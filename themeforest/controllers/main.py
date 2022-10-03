# -*- coding: utf-8 -*-
import json
from odoo.addons.website_sale.controllers import main
from werkzeug.exceptions import NotFound
from odoo import fields, http, tools, _
from odoo.http import request
from odoo.addons.http_routing.models.ir_http import slug
from odoo.addons.website.controllers.main import QueryURL
from odoo.addons.website.models.ir_http import sitemap_qs2dom
from odoo.osv import expression
import math

main.PPG = 24
PPG=main.PPG
PPR = 4

"""
     To optimize search when user clicks on a brand it will filter data and render products template
     @override 
"""
class Themeforest(http.Controller):
    @http.route('/get/compare/data', type='json', auth="public", website=True)
    def Getcompare(self,product_ids,**post):
        values = {}
        if not product_ids:
            return request.redirect("/shop")
        # use search to check read access on each record/ids
        products = request.env['product.product'].search([('id', 'in', product_ids)])

        values['products'] = request.env['ir.ui.view']._render_template("themeforest.comparetemp", {
            'products': products,
        })
        #values['products'] = products.with_context(display_default_code=False)
        return values

    @http.route('/get/product/data', type='json', auth="public", website=True)
    def Getproduct(self,product_id,**post):
        values = {}
        product = request.env['product.product'].browse(product_id)
        values['product'] = request.env['ir.ui.view']._render_template("themeforest.producttemp", {
            'product': product,
        })
        #values['products'] = products.with_context(display_default_code=False)
        return values

class TableCompute(object):

    def __init__(self):
        self.table = {}

    def _check_place(self, posx, posy, sizex, sizey, ppr):
        res = True
        for y in range(sizey):
            for x in range(sizex):
                if posx + x >= ppr:
                    res = False
                    break
                row = self.table.setdefault(posy + y, {})
                if row.setdefault(posx + x) is not None:
                    res = False
                    break
            for x in range(ppr):
                self.table[posy + y].setdefault(x, None)
        return res

    def process(self, products, ppg=20, ppr=4):
        # Compute products positions on the grid
        minpos = 0
        index = 0
        maxy = 0
        x = 0
        for p in products:
            x = min(max(p.website_size_x, 1), ppr)
            y = min(max(p.website_size_y, 1), ppr)
            if index >= ppg:
                x = y = 1

            pos = minpos
            while not self._check_place(pos % ppr, pos // ppr, x, y, ppr):
                pos += 1
            # if 21st products (index 20) and the last line is full (ppr products in it), break
            # (pos + 1.0) / ppr is the line where the product would be inserted
            # maxy is the number of existing lines
            # + 1.0 is because pos begins at 0, thus pos 20 is actually the 21st block
            # and to force python to not round the division operation
            if index >= ppg and ((pos + 1.0) // ppr) > maxy:
                break

            if x == 1 and y == 1:   # simple heuristic for CPU optimization
                minpos = pos // ppr

            for y2 in range(y):
                for x2 in range(x):
                    self.table[(pos // ppr) + y2][(pos % ppr) + x2] = False
            self.table[pos // ppr][pos % ppr] = {
                'product': p, 'x': x, 'y': y,
                'ribbon': p._get_website_ribbon(),
            }
            if index <= ppg:
                maxy = max(maxy, y + (pos // ppr))
            index += 1

        # Format table according to HTML needs
        rows = sorted(self.table.items())
        rows = [r[1] for r in rows]
        for col in range(len(rows)):
            cols = sorted(rows[col].items())
            x += len(cols)
            rows[col] = [r[1] for r in cols if r[1]]

        return rows


class WebsiteSale(main.WebsiteSale):
    """ @Override
        To add other domains for the search box
    """
    def sitemap_shop(env, rule, qs):
        if not qs or qs.lower() in '/shop':
            yield {'loc': '/shop'}

        Category = env['product.public.category']
        dom = sitemap_qs2dom(qs, '/shop/category', Category._rec_name)
        dom += env['website'].get_current_website().website_domain()
        for cat in Category.search(dom):
            loc = '/shop/category/%s' % slug(cat)
            if not qs or qs.lower() in loc:
                yield {'loc': loc}

    def Forest_getShopValues(self, page=0, category=None, min_price=0.0, max_price=0.0 ,search='', ppg=False, brand=None,**post):
        add_qty = int(post.get('add_qty', 1))
        try:
            min_price = float(min_price)
        except ValueError:
            min_price = 0
        try:
            max_price = float(max_price)
        except ValueError:
            max_price = 0

        Category = request.env['product.public.category']
        if category:
            category = Category.search([('id', '=', int(category))], limit=1)
            if not category or not category.can_access_from_current_website():
                raise NotFound()
        else:
            category = Category

        if ppg:
            try:
                ppg = int(ppg)
                post['ppg'] = ppg
            except ValueError:
                ppg = False
        if not ppg:
            ppg = request.env['website'].get_current_website().shop_ppg or 20

        ppr = request.env['website'].get_current_website().shop_ppr or 4

        attrib_list = request.httprequest.args.getlist('attrib')
        attrib_values = [[int(x) for x in v.split("-")] for v in attrib_list if v]
        attributes_ids = {v[0] for v in attrib_values}
        attrib_set = {v[1] for v in attrib_values}

        keep = QueryURL('/shop', category=category and int(category), search=search, attrib=attrib_list, min_price=min_price, max_price=max_price, order=post.get('order'))

        pricelist_context, pricelist = self._get_pricelist_context()

        request.context = dict(request.context, pricelist=pricelist.id, partner=request.env.user.partner_id)

        filter_by_price_enabled = request.website.is_view_active('website_sale.filter_products_price')
        #if filter_by_price_enabled:
        company_currency = request.website.company_id.currency_id
        conversion_rate = request.env['res.currency']._get_conversion_rate(company_currency, pricelist.currency_id, request.website.company_id, fields.Date.today())
        # else:
        #     conversion_rate = 1

        url = "/shop"
        if search:
            post["search"] = search
        if attrib_list:
            post['attrib'] = attrib_list

        options = {
            'displayDescription': True,
            'displayDetail': True,
            'displayExtraDetail': True,
            'displayExtraLink': True,
            'displayImage': True,
            'allowFuzzy': not post.get('noFuzzy'),
            'category': str(category.id) if category else None,
            'min_price': min_price / conversion_rate,
            'max_price': max_price / conversion_rate,
            'attrib_values': attrib_values,
            'display_currency': pricelist.currency_id,
        }
        # No limit because attributes are obtained from complete product list
        product_count, details, fuzzy_search_term = request.website._search_with_fuzzy("products_only", search,
            limit=None, order=self._get_search_order(post), options=options)
        search_product = details[0].get('results', request.env['product.template']).with_context(bin_size=True)
        if post.get('rating_filter'):
            rat_product=[]
            #rang=search_product.search([('rating_avg','<=',int(post.get('rating_filter'))),('rating_avg','>',4)])
            for sp in search_product:
                if sp.rating_avg <= int(post.get('rating_filter')) and sp.rating_avg > int(post.get('rating_filter'))-1:
                    rat_product.append(sp.id)
                #print(sp.name,"***************************",sp.rating_avg,sp.rating_ids,sp.rating_last_value)
            search_product=search_product.search([('id','in',rat_product)])

        filter_by_price_enabled = request.website.is_view_active('website_sale.filter_products_price')
        #if filter_by_price_enabled:
        # TODO Find an alternative way to obtain the domain through the search metadata.
        Product = request.env['product.template'].with_context(bin_size=True)
        domain = self._get_search_domain(search, category, attrib_values)

        # This is ~4 times more efficient than a search for the cheapest and most expensive products
        from_clause, where_clause, where_params = Product._where_calc(domain).get_sql()
        query = f"""
            SELECT COALESCE(MIN(list_price), 0) * {conversion_rate}, COALESCE(MAX(list_price), 0) * {conversion_rate}
              FROM {from_clause}
             WHERE {where_clause}
        """
        request.env.cr.execute(query, where_params)
        available_min_price, available_max_price = request.env.cr.fetchone()

        if min_price or max_price:
            # The if/else condition in the min_price / max_price value assignment
            # tackles the case where we switch to a list of products with different
            # available min / max prices than the ones set in the previous page.
            # In order to have logical results and not yield empty product lists, the
            # price filter is set to their respective available prices when the specified
            # min exceeds the max, and / or the specified max is lower than the available min.
            if min_price:
                min_price = min_price if min_price <= available_max_price else available_min_price
                post['min_price'] = min_price
            if max_price:
                max_price = max_price if max_price >= available_min_price else available_max_price
                post['max_price'] = max_price

        website_domain = request.website.website_domain()
        categs_domain = [('parent_id', '=', False)] + website_domain
        if search:
            search_categories = Category.search([('product_tmpl_ids', 'in', search_product.ids)] + website_domain).parents_and_self
            categs_domain.append(('id', 'in', search_categories.ids))
        else:
            search_categories = Category
        categs = Category.search(categs_domain)

        if category:
            url = "/shop/category/%s" % slug(category)
        
        if brand:
            search_product=search_product.search([('product_brand_id','=',brand.id)])
            product_count=len(search_product)
            pager = request.website.pager(url=url, total=product_count, page=page, step=ppg, scope=7, url_args=post)
            offset = pager['offset']
            products = search_product[offset:offset + ppg]
        else:
            product_count=len(search_product)
            pager = request.website.pager(url=url, total=product_count, page=page, step=ppg, scope=7, url_args=post)
            offset = pager['offset']
            products = search_product[offset:offset + ppg]

        ProductAttribute = request.env['product.attribute']
        if products:
            # get all products without limit
            attributes = ProductAttribute.search([
                ('product_tmpl_ids', 'in', search_product.ids),
                ('visibility', '=', 'visible'),
            ])
        else:
            attributes = ProductAttribute.browse(attributes_ids)

        layout_mode = request.session.get('website_sale_shop_layout_mode')
        if not layout_mode:
            if request.website.viewref('website_sale.products_list_view').active:
                layout_mode = 'list'
            else:
                layout_mode = 'grid'

        brands = request.env['forest.brand'].sudo().search([])
        values = {
            'search': fuzzy_search_term or search,
            'original_search': fuzzy_search_term and search,
            'category': category,
            'brands':brands,
            'attrib_values': attrib_values,
            'attrib_set': attrib_set,
            'pager': pager,
            'pricelist': pricelist,
            'add_qty': add_qty,
            'products': products,
            'search_count': product_count,  # common for all searchbox
            'bins': TableCompute().process(products, ppg, ppr),
            'ppg': ppg,
            'ppr': ppr,
            'categories': categs,
            'attributes': attributes,
            'keep': keep,
            'search_categories_ids': search_categories.ids,
            'layout_mode': layout_mode,
        }
        #if filter_by_price_enabled:
        values['min_price'] = min_price or available_min_price
        values['max_price'] = max_price or available_max_price
        min_floore=math.floor(values['min_price'] / 10)
        max_ceil=math.ceil(values['max_price'] / 10)
        price_filter=[]
        max_limit=(min_floore * 10 + 40)
        first_price=min_floore * 10
        for i in range(1,5):
            if i == 1:
                price_filter.append({'min':first_price,'max':first_price+10})
            else:
                first_price+=10
                price_filter.append({'min':first_price,'max':first_price+10})
        
        values['price_filter']=price_filter
        values['available_min_price'] = tools.float_round(available_min_price, 2)
        values['available_max_price'] = tools.float_round(available_max_price, 2)
        if category:
            values['main_object'] = category
        return values

    @http.route([
        '''/shop''',
        '''/shop/page/<int:page>''',
        '''/shop/category/<model("product.public.category"):category>''',
        '''/shop/category/<model("product.public.category"):category>/page/<int:page>''',
        '''/shop/brand/<model("forest.brand"):brand>'''
    ], type='http', auth="public", website=True, sitemap=sitemap_shop)
    def shop(self, page=0, category=None, search='', min_price=0.0, max_price=0.0, ppg=False, brand=None ,**post):
        if post.get('filter_clear'):
            return request.redirect('/shop')
        if post.get('filter_remove'):
            category=None
        values = self.Forest_getShopValues(page, category,min_price,max_price,search, ppg, brand,**post)
        return request.render("website_sale.products", values)

    def _prepare_product_values(self, product, category, search, **kwargs):
        add_qty = int(kwargs.get('add_qty', 1))
        product_variants=[]
        for attr in product.attribute_line_ids:
            attr_val=''
            for val in attr.value_ids:
                attr_val = attr_val + ', '+val.name
                if attr_val:
                    attr_val=attr_val[1:]
            product_variants.append({'name':attr.attribute_id.name,'val':attr_val})

        product_context = dict(request.env.context, quantity=add_qty,
                               active_id=product.id,
                               partner=request.env.user.partner_id)
        ProductCategory = request.env['product.public.category']

        if category:
            category = ProductCategory.browse(int(category)).exists()

        attrib_list = request.httprequest.args.getlist('attrib')
        attrib_values = [[int(x) for x in v.split("-")] for v in attrib_list if v]
        attrib_set = {v[1] for v in attrib_values}

        keep = QueryURL('/shop', category=category and category.id, search=search, attrib=attrib_list)

        categs = ProductCategory.search([('parent_id', '=', False)])

        pricelist = request.website.get_current_pricelist()

        if not product_context.get('pricelist'):
            product_context['pricelist'] = pricelist.id
            product = product.with_context(product_context)

        # Needed to trigger the recently viewed product rpc
        view_track = request.website.viewref("website_sale.product").track
        # pro_img=product.image_url
        return {
            'search': search,
            'category': category,
            'pricelist': pricelist,
            'attrib_values': attrib_values,
            'attrib_set': attrib_set,
            'keep': keep,
            'categories': categs,
            'main_object': product,
            'product': product,
            'product_variants':product_variants,
            # 'pro_img':pro_img,
            'add_qty': add_qty,
            'view_track': view_track,
        }