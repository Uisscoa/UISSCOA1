# -*- coding: utf-8 -*-

from odoo import models, fields, api
import math

class forest_brand(models.Model):
    _name = 'forest.brand'
    _description = 'Forest Models'

    name = fields.Char(string='Brand Name',required='true')
    image = fields.Binary(string='Image')
    brand_url = fields.Char(string='Brand Url')
    product_ids = fields.One2many('product.template', 'product_brand_id', widget='binary')
    products_count = fields.Integer(string='Number of products', compute='forest_get_products_count')
    brand_discount = fields.Integer(string='Discount Percentage')


    @api.depends('product_ids')
    def forest_get_products_count(self):
        for brand in self:
            brand.products_count = len(brand.product_ids)

    def forest_get_brand_url(self, name):
        for rec in self:
            base_url = rec.env['ir.config_parameter'].sudo().get_param('web.base.url')
            if rec.name:
                return 'shop?filter=' + str(name)
            else:
                return ""

class forest_product_manager(models.Model):
    _inherit = 'product.template'

    #allow_out_of_stock_order=fields.Boolean()
    product_brand_id = fields.Many2one('forest.brand',string='Brand')
    related_product_ids = fields.Many2many('product.template', 'product_related_relational_rel', 'src_id',
        'dest_id', string='Related Products')

    def _get_rating_average(self):
        val=self.rating_avg
        val_integer=math.floor(self.rating_avg)
        val_decimal=val - val_integer
        value={
            'val_integer':val_integer,
            'val_decimal':val_decimal,
            'empty_star':5 - (val_integer+math.ceil(val_decimal)),
            'total_count':self.rating_count
        }
        return value


