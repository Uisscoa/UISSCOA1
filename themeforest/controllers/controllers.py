# -*- coding: utf-8 -*-
# from odoo import http


# class Themeforest(http.Controller):
#     @http.route('/themeforest/themeforest/', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/themeforest/themeforest/objects/', auth='public')
#     def list(self, **kw):
#         return http.request.render('themeforest.listing', {
#             'root': '/themeforest/themeforest',
#             'objects': http.request.env['themeforest.themeforest'].search([]),
#         })

#     @http.route('/themeforest/themeforest/objects/<model("themeforest.themeforest"):obj>/', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('themeforest.object', {
#             'object': obj
#         })
