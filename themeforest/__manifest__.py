# -*- coding: utf-8 -*-
{
    'name': "Themeforest",
    'summary': """Themeforest""",
    'description': """Themeforest""",
    'author': "Spellbound Soft Solutions",
    'website': "http://spellboundss.com",
    'category': 'Theme',
    'version': '0.1',
    'depends': ['portal','web','sale','website','website_sale','website_sale_wishlist','website_sale_comparison'],

    # always loaded
    'data': [
        'security/ir.model.access.csv',
        'views/product_shop.xml',
        'views/product_details.xml',
        'views/header_footer.xml',
        'views/templates.xml',
        'views/forest_brand.xml',
    ],
    'qweb':['static/src/xml/*.xml'],
    'application': False,
    'auto_install': False,
    'license': 'LGPL-3',
}

