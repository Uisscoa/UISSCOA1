odoo.define('themeforest.themeforest', function (require) {
'use strict';
const ajax = require('web.ajax');
var utils = require('web.utils');
var core = require('web.core');
var QWeb = core.qweb;
ajax.loadXML('/themeforest/static/src/xml/themforest.xml', QWeb)

function getFormData($form){
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function(n, i){
        indexed_array[n['name']] = n['value'];
    });

    return indexed_array;
}

/*  $('#partDelete').on('hidden.bs.modal', function(e)
    { 
        $('.int_val').val(1)
        $('.decreaseQty').addClass('disabled')
  }) ;*/

/*  route: '/shop/get_product_data',
            params: {
                product_ids: product_ids,
                cookies: JSON.parse(utils.get_cookie('comparelist_product_ids') || '[]'),
            },*/
$('.wc-tabs li').click(function(e){
    $('.woocommerce-Tabs-panel').css('display','none')
    $($(this).find('a').data('href')).css('display','')
    //$(this).css('display','')
});

$('.fm-product-quick-view').click(function(e){
    var product_id=$(this).data('product_id')
    ajax.jsonRpc("/get/product/data", 'call',{
      'product_id':product_id,
    }).then(function (data) {
        $('.modal_product').empty();
        $('.modal_product').append(data['product'])
       $('#productdetailmodel').modal('show')
       $('#wrapwrap').css('z-index','auto')
    });
})

$('.compare').click(function(e){
    var comparelist_product_ids=JSON.parse(utils.get_cookie('comparelist_product_ids') || '[]');
    ajax.jsonRpc("/shop/get_product_data", 'call',{
      'product_ids':[$(this).data('product_id')],
      'cookies':comparelist_product_ids
    }).then(function (data) {
        comparelist_product_ids = JSON.parse(data.cookies);
        document.cookie = 'comparelist_product_ids=' + JSON.stringify(comparelist_product_ids) + '; path=/';
        
        ajax.jsonRpc("/get/compare/data", 'call',{
          'product_ids':comparelist_product_ids
          }).then(function (data) {
              $('.compare_body').empty();
              $('.compare_body').append(data['products'])
              $('#comparemodel').modal('show')
             $('#wrapwrap').css('z-index','auto')
        });
          
    });

    
})

$(document).on('click','.close-modal',function(e){
    $('#comparemodel').removeClass('show');
    $('body').removeClass('modal-open');
    //$('#modalwindow').modal('hide');
})

$('.list').click(function(e){
    $('.grid').removeClass('current')
    $('body').removeClass('catalog-view-grid')
    $('body').addClass('catalog-view-list')
    $('.list').addClass('current')
    function GetactiveLayout() {
       var layout_mode='list'
      //$("input:radio[name=wsale_products_layout]:checked").val()
      ajax.jsonRpc('/shop/save_shop_layout_mode', 'call', {
              'layout_mode': layout_mode,
          })
    }
    setTimeout(GetactiveLayout, 1000);
})

$('.grid').click(function(e){
    $('.list').removeClass('current')
    $('body').removeClass('catalog-view-list')
    $('body').addClass('catalog-view-grid')
    $('.grid').addClass('current')
    function GetactiveLayout() {
       var layout_mode='grid'
      //$("input:radio[name=wsale_products_layout]:checked").val()
      ajax.jsonRpc('/shop/save_shop_layout_mode', 'call', {
              'layout_mode': layout_mode,
          })
    }
    setTimeout(GetactiveLayout, 1000);
})

$(document).on("click","#add_to_cart_forest",function(e) {
/*$('#add_to_cart_forest').click(function(e){*/
		var formdata=getFormData($(this).closest('form'));
    var msg=$(this).data('product_name') + ' has been added to your cart.'
    	ajax.jsonRpc("/shop/cart/update_json", 'call',{
    		   	product_id:parseInt(formdata['product_id']),
    		   	add_qty:parseInt(formdata['add_qty'])
               }).then(function (data) {
                $('.fm-mini-cart-counter').text(data['cart_quantity'])
               	var config={
               		autoclose: "on",
        					duration: "3",
        					hasCloseButton: false,
        					message: msg,
        					position: "top-right",
        					stopOnHover: false,
        					type: "success",
               	}
               	toast.configure(config)
        		    toast[config.type](config.message);
            });
            
    })
});

/*line_id: line_id,
                product_id: parseInt($input.data('product-id'), 10),
                set_qty: value*/