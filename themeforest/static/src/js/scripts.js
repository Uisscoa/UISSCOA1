(function ($) {
    'use strict';

    var farmart = farmart || {};
    farmart.init = function () {
        farmart.$body = $(document.body),
            farmart.$window = $(window),
            farmart.$header = $('#site-header'),
            farmart.$iconChevronLeft    = '<span class="slick-prev-arrow farmart-svg-icon"><svg viewBox="0 0 32 32"><path d="M22.4 32c0.205 0 0.409-0.078 0.566-0.234 0.312-0.312 0.312-0.819 0-1.131l-13.834-13.834 13.834-13.834c0.312-0.312 0.312-0.819 0-1.131s-0.819-0.312-1.131 0l-14.4 14.4c-0.312 0.312-0.312 0.819 0 1.131l14.4 14.4c0.156 0.156 0.361 0.234 0.566 0.234z"></path></svg></span>',
            farmart.$iconChevronRight   = '<span class="slick-next-arrow farmart-svg-icon"><svg viewBox="0 0 32 32"><path d="M8 32c-0.205 0-0.409-0.078-0.566-0.234-0.312-0.312-0.312-0.819 0-1.131l13.834-13.834-13.834-13.834c-0.312-0.312-0.312-0.819 0-1.131s0.819-0.312 1.131 0l14.4 14.4c0.312 0.312 0.312 0.819 0 1.131l-14.4 14.4c-0.156 0.156-0.361 0.234-0.566 0.234z"></path></svg></span>',
            farmart.$icon_check         = '<span class="message-icon farmart-svg-icon"><svg viewBox="0 0 32 32"><path d="M15.2 32c-4.060 0-7.877-1.581-10.748-4.452s-4.452-6.688-4.452-10.748c0-4.060 1.581-7.877 4.452-10.748s6.688-4.452 10.748-4.452c4.060 0 7.877 1.581 10.748 4.452s4.452 6.688 4.452 10.748-1.581 7.877-4.452 10.748c-2.871 2.871-6.688 4.452-10.748 4.452zM15.2 3.2c-7.499 0-13.6 6.101-13.6 13.6s6.101 13.6 13.6 13.6 13.6-6.101 13.6-13.6-6.101-13.6-13.6-13.6zM12 23.2c-0.205 0-0.409-0.078-0.566-0.234l-4.8-4.8c-0.312-0.312-0.312-0.819 0-1.131s0.819-0.312 1.131 0l4.234 4.234 10.634-10.634c0.312-0.312 0.819-0.312 1.131 0s0.312 0.819 0 1.131l-11.2 11.2c-0.156 0.156-0.361 0.234-0.566 0.234z"></path></svg></span>',
            farmart.$icon_alert         = '<span class="message-icon farmart-svg-icon"><svg viewBox="0 0 32 32"><path d="M15.2 32c-0.085 0-0.171-0.014-0.253-0.041-2.943-0.981-6.636-4.242-9.408-8.308-2.527-3.706-5.539-9.846-5.539-18.051 0-0.442 0.358-0.8 0.8-0.8 4.502 0 11.581-3.082 13.956-4.666 0.269-0.179 0.619-0.179 0.887 0 2.375 1.584 9.454 4.666 13.956 4.666 0.442 0 0.8 0.358 0.8 0.8 0 8.205-3.012 14.345-5.539 18.051-2.772 4.066-6.465 7.327-9.408 8.308-0.082 0.027-0.168 0.041-0.253 0.041zM1.609 6.374c0.181 7.409 2.932 12.973 5.252 16.376 2.83 4.151 6.169 6.767 8.339 7.601 2.17-0.833 5.509-3.45 8.339-7.601 2.32-3.403 5.070-8.966 5.252-16.376-2.605-0.163-5.506-1.060-7.568-1.824-2.269-0.84-4.558-1.909-6.022-2.802-1.464 0.893-3.753 1.962-6.022 2.802-2.062 0.764-4.963 1.66-7.568 1.824zM15.2 17.6c-0.442 0-0.8-0.358-0.8-0.8v-8c0-0.442 0.358-0.8 0.8-0.8s0.8 0.358 0.8 0.8v8c0 0.442-0.358 0.8-0.8 0.8zM15.2 22.4c-0.442 0-0.8-0.358-0.8-0.8v-1.6c0-0.442 0.358-0.8 0.8-0.8s0.8 0.358 0.8 0.8v1.6c0 0.442-0.358 0.8-0.8 0.8z"></path></svg></span>',
            farmart.$icon_close         = '<span class="close farmart-svg-icon"><svg viewBox="0 0 32 32"><path d="M17.131 16.8l9.034-9.034c0.312-0.312 0.312-0.819 0-1.131s-0.819-0.312-1.131 0l-9.034 9.034-9.034-9.034c-0.312-0.312-0.819-0.312-1.131 0s-0.312 0.819 0 1.131l9.034 9.034-9.034 9.034c-0.312 0.312-0.312 0.819 0 1.131 0.156 0.156 0.361 0.234 0.566 0.234s0.409-0.078 0.566-0.234l9.034-9.034 9.034 9.034c0.156 0.156 0.361 0.234 0.566 0.234s0.409-0.078 0.566-0.234c0.312-0.312 0.312-0.819 0-1.131l-9.034-9.034z"></path></svg></span>',
            farmart.$icon_chevron_down  = '<span class="cat-menu-close farmart-svg-icon"><svg viewBox="0 0 32 32"><path d="M0 9.6c0-0.205 0.078-0.409 0.234-0.566 0.312-0.312 0.819-0.312 1.131 0l13.834 13.834 13.834-13.834c0.312-0.312 0.819-0.312 1.131 0s0.312 0.819 0 1.131l-14.4 14.4c-0.312 0.312-0.819 0.312-1.131 0l-14.4-14.4c-0.156-0.156-0.234-0.361-0.234-0.566z"></path></svg></span>';

        // Styling
        /*this.preLoader();*/

        // Header
        /*this.searchFormHandler();
        this.cartTogglePanel();
        this.menuSideBar()
        this.recentlyViewedProducts();
        this.menuMobile();
        this.searchMobile();*/

        // Catalog
        /*this.catalogBanners();
        this.catalogCategories();
        this.catalogProducts();
        this.productAttribute();
        this.catalogToolbarPagination();
        this.shopView();
        this.catalogFilterAjax();
        this.filterOnMobile();
        this.productQuickView();
        this.catalogOpenCartMini();
        this.updateWishlistCounter();
        this.addWishlist();
        this.addCompare();
        this.loadMoreProducts();*/

        // Widget
        /*this.productCategoriesWidget();
        this.searchLayeredNav();
        this.toggleWidget();
        this.productsCarouselWidget();
        this.addClassCalendar();*/

        //Single Products
        this.productThumbnail();
        this.productVideo();
        this.productGallery();
        this.hoverProductTabs();
        this.singleProductCarousel();
        this.fbtProduct();
        this.fbtAddToCartAjax();
        this.fbtAddToWishlistAjax();
        this.productVariation();
        this.stickyProductInfo();
        this.productsCarousel();
        this.reviewProduct();

        // Cart
        /*this.productQuantity();
        this.buyNow();
        this.addToCartAjax();*/

        /*this.Tabs();*/

        // Blog
        /*this.postFormatGallery();
        this.postRelated();
        this.blogFilterAjax();
        this.blogLoadingAjax();
        this.popupVideo();*/

        // Vendor
        /*this.filterSidebar();
        this.changeArrowNav();*/

        // Footer
        /*this.scrollTop();*/

        // Mobile
        /*this.wooTabToggle();
        this.catalogSorting();
        this.goBackToPreviouslyPage();*/

    };

    farmart.searchFormHandler = function () {
        if (farmartData.header_ajax_search != '1') {
            return;
        }
		farmart.$body.find('.farmart-products-search, .fm-search-form, .fm-search-icon').each(function () {
			var $selector = $(this);

			$selector.on('change', '.product-cat-dd', function () {
				var value = $(this).find('option:selected').text().trim();
				$selector.find('.product-cat-label .label').html(value);
			});

			$selector.find('.products-search').submit(function () {
				if ($(this).find('.product-cat-dd').val() == '0') {
					$(this).find('.product-cat-dd').removeAttr('name');
				}
			});

			if (typeof wc_add_to_cart_params === 'undefined') {
				return;
			}

			var xhr = null,
				$form = $selector.closest('form.form-search'),
				searchCache = {};

			$selector.on('keyup', '.search-field', function (e) {
				var valid = false;
				if (typeof e.which == 'undefined') {
					valid = true;
				} else if (typeof e.which == 'number' && e.which > 0) {
					valid = !e.ctrlKey && !e.metaKey && !e.altKey;
				}

				if (!valid) {
					return;
				}

				if (xhr) {
					xhr.abort();
				}

				var $currentForm = $(this).closest('.form-search'),
					$search = $currentForm.find('input.search-field');

				if ($search.val().length < 2) {
					$currentForm.removeClass('searching searched actived found-products found-no-product invalid-length');
					$(document.body).removeClass('fm-search-mobile-success');
				}

				search($currentForm);

			}).on('change', '.product-cat input', function () {
				if (xhr) {
					xhr.abort();
				}
				var $currentForm = $(this).closest('.form-search');

				search($currentForm);
			}).on('change', '.product-cat-dd', function () {
				if (xhr) {
					xhr.abort();
				}
				var $currentForm = $(this).closest('.form-search');

				search($currentForm);
			}).on('focusout', '.search-field', function () {
				var $currentForm = $(this).closest('.form-search'),
					$search = $currentForm.find('input.search-field');
				if ($search.val().length < 2) {
					$currentForm.removeClass('searching searched actived found-products found-no-product invalid-length');
					$(document.body).removeClass('fm-search-mobile-success');
				}
			}).on( 'click', '.product-cat-click a', function () {
                $( '.product-cat-click li' ).removeClass( 'actived' );
                $(this).parent().addClass( 'actived' );
                $form.removeClass('actived');

                if (xhr) {
                    xhr.abort();
                }

                var catSlug = $(this).attr('data-catslug');
                if (catSlug == undefined ) {
                    catSlug = 0;
                }
                var $currentForm = $(this).closest('.form-search');

                $currentForm.find('input[name="product_cat"]').val(catSlug);

                search($currentForm);
                return false;
            });

			$selector.on('click', '.close-search-results', function (e) {
				e.preventDefault();
				$selector.find('.search-field').val('');
				$selector.find('.form-search').removeClass('searching searched actived found-products found-no-product invalid-length');
				$(document.body).removeClass('fm-search-mobile-success');
			});

			/**
			 * Private function for search
			 */
			function search($currentForm) {
				var $search = $currentForm.find('input.search-field'),
					keyword = $search.val(),
					cat = 0,
					$results = $currentForm.find('.search-results');

				if ($currentForm.find('.product-cat-dd').length > 0) {
					cat = $currentForm.find('.product-cat-dd').val();
				}

                if ( $currentForm.find('input[name="product_cat"]').val() ) {
                    cat = $currentForm.find('input[name="product_cat"]').val();
                }

				if (keyword.trim().length < 2) {
					$currentForm.removeClass('searching found-products found-no-product').addClass('invalid-length');
					return;
				}

				$currentForm.removeClass('found-products found-no-product').addClass('searching');

				var keycat = keyword + cat;

				if (keycat in searchCache) {
					var result = searchCache[keycat];

					$currentForm.removeClass('searching');

					$currentForm.addClass('found-products');

					$results.html(result.products);

					$(document.body).trigger('farmart_ajax_search_request_success', [$results]);

					$currentForm.removeClass('invalid-length');

					$currentForm.addClass('searched actived');

					$(document.body).addClass('fm-search-mobile-success');

				} else {
					var data = {
							'term': keyword,
							'cat': cat,
							'ajax_search_number': farmartData.header_search_number,
                            'search_type': farmartData.search_content_type
						},
						ajax_url = farmartData.ajax_url.toString().replace('%%endpoint%%', 'farmart_instance_search_form');

					xhr = $.post(
						ajax_url,
						data,
						function (response) {
							var $products = response.data;

							$currentForm.removeClass('searching');

							$currentForm.addClass('found-products');

							$results.html($products);

							$currentForm.removeClass('invalid-length');

							$(document.body).trigger('farmart_ajax_search_request_success', [$results]);

							// Cache
							searchCache[keycat] = {
								found: true,
								products: $products
							};

							$currentForm.addClass('searched actived');

							$(document.body).addClass('fm-search-mobile-success');
						}
					);
				}
			}

		});
	};

    farmart.cartTogglePanel = function () {

        var $selector = farmart.$body;

        $selector.on('click', '[data-toggle="modal"]', function (e) {
            e.preventDefault();
            var seclect = '#' + $(this).data( 'target' );

            var widthScrollBar = window.innerWidth - document.documentElement.clientWidth;
            $(document.body).css({'padding-right': widthScrollBar, 'overflow': 'hidden'});

            $(seclect).fadeIn();
            $(seclect).toggleClass('open');
            $(seclect).find('.box-cart-wrapper').toggleClass('open');
            $(seclect).find('.fm-off-canvas-layer').toggleClass('open');
        }).on('click', '.fm-off-canvas-layer, .go-back', function () {

            $(document.body).removeAttr('style');
		    $('.header-transparent .site-header').removeAttr('style');

            $selector.find('.cart-panel').fadeOut();
            $selector.find('.cart-panel').removeClass('open');
            $selector.find('.fm-off-canvas-layer').removeClass('open');
            $selector.find('.box-cart-wrapper').removeClass('open');
            $selector.find('.box-cart-wrapper').removeAttr('style');
        }).on( 'keyup', function ( e ) {
			if ( e.keyCode === 27 ) {
                $(document.body).removeAttr('style');
                $selector.find('.cart-panel').fadeOut();
                $selector.find('.cart-panel').removeClass('open');
				$selector.find('.fm-off-canvas-layer').removeClass('open');
                $selector.find('.box-cart-wrapper').removeClass('open');
                $selector.find('.box-cart-wrapper').removeAttr('style');
			}
		});

	};

    farmart.menuSideBar = function () {

        $('#primary-menu, .fm-nav-mobile-menu').find('.menu-item-has-children > a').append('<span class="toggle-menu-children"><span class="farmart-svg-icon"><svg viewBox="0 0 1024 1024"><path class="path1" d="M0 307.2c0-6.552 2.499-13.102 7.499-18.101 9.997-9.998 26.206-9.998 36.203 0l442.698 442.698 442.699-442.698c9.997-9.998 26.206-9.998 36.203 0s9.998 26.206 0 36.203l-460.8 460.8c-9.997 9.998-26.206 9.998-36.203 0l-460.8-460.8c-5-5-7.499-11.55-7.499-18.102z"></path></svg></span></span>');

        $('.department-menu').find('.menu-item-has-children > a').append('<span class="toggle-menu-children"><span class="farmart-svg-icon"><svg viewBox="0 0 1024 1024"><path class="path1" d="M256 1024c-6.552 0-13.102-2.499-18.101-7.499-9.998-9.997-9.998-26.206 0-36.203l442.698-442.698-442.698-442.699c-9.998-9.997-9.998-26.206 0-36.203s26.206-9.998 36.203 0l460.8 460.8c9.998 9.997 9.998 26.206 0 36.203l-460.8 460.8c-5 5-11.55 7.499-18.102 7.499z"></path></svg></span></span>');
    };

	farmart.recentlyViewedProducts = function () {
		farmart.$body.find('.fm-header-recently-viewed').each(function () {
			var $el = $(this),
				found = true;

			$el.hover( function () {
				if (found) {
					loadAjaxRecently($el);
					found = false;
				}

			});
		});

        function loadAjaxRecently($selector) {
            var $recently = $selector.find('.recently-has-products');

            var data = {
                    numbers: 15,
                    nonce: farmartData.nonce
                },
                ajax_url = farmartData.ajax_url.toString().replace('%%endpoint%%', 'farmart_recently_viewed_products');

            if ( ajax_url == '') {
                return;
            }

            $.post(
                ajax_url,
                data,
                function (response) {
                    var $data = $(response.data);

                    $recently.html($data);

                    if ($recently.find('.product-list').hasClass('no-products')) {
                        $selector.find('.recently-viewed-products').remove();
                        if($selector.hasClass('hide-empty-section')){
                            $selector.addClass('fm-hide-section');
                        }
                    } else {
                        $selector.find('.recently-empty-products').remove();
                    }

                    getProductCarousel($selector);
                    $selector
                        .addClass('products-loaded')
                        .find('.farmart-loading--wrapper').remove();
                }
            );
        }

        function getProductCarousel($els, extendOptions = {}) {
            var $selector = $els,
                $slider = $selector.find('ul.products,ul.product-list'),
                dataSettings = {"arrows":true,"dots":false,"autoplay":false,"infinite":true,"autoplaySpeed":3000,"speed":800,"slidesToShow":10,"slidesToScroll":1,"rtl":false};

            var data = JSON.stringify(dataSettings);

            var options = {
                prevArrow: '<span class="slick-prev-arrow farmart-svg-icon"><svg viewBox="0 0 32 32"><path d="M22.4 32c0.205 0 0.409-0.078 0.566-0.234 0.312-0.312 0.312-0.819 0-1.131l-13.834-13.834 13.834-13.834c0.312-0.312 0.312-0.819 0-1.131s-0.819-0.312-1.131 0l-14.4 14.4c-0.312 0.312-0.312 0.819 0 1.131l14.4 14.4c0.156 0.156 0.361 0.234 0.566 0.234z"></svg></path></span>',
                nextArrow: '<span class="slick-next-arrow farmart-svg-icon"><svg viewBox="0 0 32 32"><path d="M8 32c-0.205 0-0.409-0.078-0.566-0.234-0.312-0.312-0.312-0.819 0-1.131l13.834-13.834-13.834-13.834c-0.312-0.312-0.312-0.819 0-1.131s0.819-0.312 1.131 0l14.4 14.4c0.312 0.312 0.312 0.819 0 1.131l-14.4 14.4c-0.156 0.156-0.361 0.234-0.566 0.234z"></svg></path></span>',
            };

            if($selector.data('type') == 'grid') {
                return;
            }

            $.extend(true, options, extendOptions);

            $slider.attr('data-slick', data);

            $slider.not('.slick-initialized').slick(options);

        };
	};

    /**
	 * Mobile menu
	 */
	farmart.menuMobile = function () {
		farmart.$body.find('.fm-menu-mobile').each(function () {
			var $mobileMenu = farmart.$body.find('.farmart-menu-mobile'),
				$otherMobileMenu = $('.fm-menu-mobile').not($mobileMenu);
			$mobileMenu.on('click', '.menu-box-title', function (event) {
				var $this = $(this);

				event.preventDefault();

				$otherMobileMenu.find('.menu-mobile-wrapper').removeClass('open');
				$otherMobileMenu.removeClass('menu-active');

				$this.siblings('.menu-mobile-wrapper').toggleClass('open');
				$this.parent().toggleClass('menu-active');

				$(document.body).toggleClass('display-canvas-layer-menu');
				$(document).trigger('farmart_toggle_menu_mobile');
			});

			$('.fm-off-canvas-layer').on('click', function (e) {
				$(document.body).removeClass('display-canvas-layer-menu');
				$mobileMenu.find('.menu-mobile-wrapper').removeClass('open');
				$mobileMenu.find('.menu-mobile-wrapper').removeAttr('style');
				$mobileMenu.removeClass('menu-active');
			});

			$mobileMenu.on('click', '.close-canvas-mobile-panel', function (e) {
				var $this = $(this);
				e.preventDefault();
				$(document.body).removeClass('display-canvas-layer-menu');
				$this.closest('.menu-mobile-wrapper').removeClass('open');
				$this.closest('.menu-mobile-wrapper').removeAttr('style');
				$mobileMenu.removeClass('menu-active');
			});

			$mobileMenu.on('click', '.toggle-menu-children', function (e) {
				e.preventDefault();
				openSubMenus($(this));
			});

			$(document).on('farmart_toggle_cart_mobile farmart_toggle_search_mobile', function(){
				$mobileMenu.removeClass('menu-active');
				$mobileMenu.find('.menu-mobile-wrapper').removeClass('open');
				$(document.body).removeClass('display-canvas-layer-menu');
			});

			function openSubMenus($el) {
				$el.closest('li').siblings().find('ul').slideUp();
				$el.closest('li').siblings().removeClass('active');
				$el.closest('li').siblings().find('li').removeClass('active');

				$el.closest('li').children('ul').slideToggle();
				$el.closest('li').toggleClass('active');
			}

		});
	};
    // Search Mobile
    farmart.searchMobile = function () {
		farmart.$body.find('.search-panel').each(function () {
			var $selector = $(this),
				$searchMobile = $('.search-panel').not($selector);

			$selector.on('click', '.open-search-panel', function (e) {
				e.preventDefault();

				var $this = $(this);

                var widthScrollBar = window.innerWidth - document.documentElement.clientWidth;
                $(document.body).css({'padding-right': widthScrollBar, 'overflow': 'hidden'});

				$searchMobile.find('.search-panel-content').removeClass('open');
				$searchMobile.removeClass('search-active');

				$this.siblings('.search-panel-content').toggleClass('open');
				$this.parent().toggleClass('search-active');
				$(document.body).toggleClass('display-canvas-layer-search');
				$(document).trigger('farmart_toggle_search_mobile');
			});

			$selector.on('click', '.close-search-panel', function (e) {
				e.preventDefault();

				var $this = $(this);
                $(document.body).removeAttr('style');

				$this.closest('.search-panel-content').removeClass('open');
				$selector.removeClass('search-active');
                $selector.find('.search-field').val('');
                $selector.find('input[name="product_cat"]').val('0');
                $selector.find('.product-cat-click').find('li').removeClass( 'actived' );
                $selector.find('.product-cat-click').find('li:first-child').addClass( 'actived' );
                $selector.find('form').removeClass('searching actived found-products found-no-product invalid-length');
                $selector.find('form').find('.search-results').html('');
				$(document.body).removeClass('display-canvas-layer-search');
			});

			$selector.on('click', '.fm-off-canvas-layer', function (e) {
                $(document.body).removeAttr('style');
				$(document.body).removeClass('display-canvas-layer-search');
				$selector.find('.search-panel-content').removeClass('open');
				$selector.removeClass('search-active');
			});

			$(document).on('farmart_toggle_menu_mobile farmart_toggle_cart_mobile', function(){
                $(document.body).removeAttr('style');
				$selector.find('.search-panel-content').removeClass('open');
				$selector.removeClass('search-active');
				$(document.body).removeClass('display-canvas-layer-search');
			});
		});
	};

    farmart.popupVideo = function () {
        $('.popup-video').magnificPopup({
            type: 'iframe',
            mainClass: 'fmp-fade',
            removalDelay: 300,
            preloader: false,
            fixedContentPos: false,
            disableOn: function () { // don't use a popup for mobile
                if ($(window).width() < 600) {
                    return false;
                }
                return true;
            },
            iframe: {
                patterns: {
                    youtube: {
                        index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

                        id: 'v=', // String that splits URL in a two parts, second part should be %id%
                        src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
                    },
                    vimeo: {
                        index: 'vimeo.com/',
                        id: '/',
                        src: '//player.vimeo.com/video/%id%?autoplay=1'
                    },
                    gmaps: {
                        index: '//maps.google.',
                        src: '%id%&output=embed'
                    }
                },

                srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
            }
        });
    };

    farmart.searchLayeredNav = function () {

        var $widgets = $('.fm-widget-layered-nav');

        if ($widgets.length < 1) {
            return;
        }

        $widgets.on('keyup', '.fm-input-search-nav', function (e) {
            var valid = false;

            if (typeof e.which == 'undefined') {
                valid = true;
            } else if (typeof e.which == 'number' && e.which > 0) {
                valid = !e.ctrlKey && !e.metaKey && !e.altKey;
            }

            if (!valid) {
                return;
            }

            var val = $(this).val();

            if (typeof val === 'number') {
                val = '' + val;
            }

            var filter = val.toUpperCase(),
                widget = $(this).closest('.fm-widget-layered-nav'),
                ul = widget.find('.woocommerce-widget-layered-nav-list'),
                items = ul.children('.wc-layered-nav-term');

            items.each(function () {
                var a = $(this).find('a').data('title');

                if (typeof a === 'number') {
                    a = '' + a;
                }

                a = a.toUpperCase();

                if (a.indexOf(filter) > -1) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });

            var heightUL = ul.data('height');
            if (ul.height() < parseInt(heightUL)) {
                widget.addClass('no-scroll');
            } else {
                widget.removeClass('no-scroll');
            }
        });

    };

    // Get price js slider
    farmart.priceSlider = function () {
        // woocommerce_price_slider_params is required to continue, ensure the object exists
        if (typeof woocommerce_price_slider_params === 'undefined') {
            return false;
        }

        if ($('.catalog-sidebar').find('.widget_price_filter').length <= 0) {
            return false;
        }

        // Get markup ready for slider
        $('input#min_price, input#max_price').hide();
        $('.price_slider, .price_label').show();

        // Price slider uses jquery ui
        var min_price = $('.price_slider_amount #min_price').data('min'),
            max_price = $('.price_slider_amount #max_price').data('max'),
            current_min_price = parseInt(min_price, 10),
            current_max_price = parseInt(max_price, 10);

        if ($('.price_slider_amount #min_price').val() != '') {
            current_min_price = parseInt($('.price_slider_amount #min_price').val(), 10);
        }
        if ($('.price_slider_amount #max_price').val() != '') {
            current_max_price = parseInt($('.price_slider_amount #max_price').val(), 10);
        }

        $(document.body).on('price_slider_create price_slider_slide', function (event, min, max) {
            if (woocommerce_price_slider_params.currency_pos === 'left') {

                $('.price_slider_amount span.from').html(woocommerce_price_slider_params.currency_symbol + min);
                $('.price_slider_amount span.to').html(woocommerce_price_slider_params.currency_symbol + max);

            } else if (woocommerce_price_slider_params.currency_pos === 'left_space') {

                $('.price_slider_amount span.from').html(woocommerce_price_slider_params.currency_symbol + ' ' + min);
                $('.price_slider_amount span.to').html(woocommerce_price_slider_params.currency_symbol + ' ' + max);

            } else if (woocommerce_price_slider_params.currency_pos === 'right') {

                $('.price_slider_amount span.from').html(min + woocommerce_price_slider_params.currency_symbol);
                $('.price_slider_amount span.to').html(max + woocommerce_price_slider_params.currency_symbol);

            } else if (woocommerce_price_slider_params.currency_pos === 'right_space') {

                $('.price_slider_amount span.from').html(min + ' ' + woocommerce_price_slider_params.currency_symbol);
                $('.price_slider_amount span.to').html(max + ' ' + woocommerce_price_slider_params.currency_symbol);

            }

            $(document.body).trigger('price_slider_updated', [min, max]);
        });
        if (typeof $.fn.slider !== 'undefined') {
            $('.price_slider').slider({
                range: true,
                animate: true,
                min: min_price,
                max: max_price,
                values: [current_min_price, current_max_price],
                create: function () {

                    $('.price_slider_amount #min_price').val(current_min_price);
                    $('.price_slider_amount #max_price').val(current_max_price);

                    $(document.body).trigger('price_slider_create', [current_min_price, current_max_price]);
                },
                slide: function (event, ui) {

                    $('input#min_price').val(ui.values[0]);
                    $('input#max_price').val(ui.values[1]);

                    $(document.body).trigger('price_slider_slide', [ui.values[0], ui.values[1]]);
                },
                change: function (event, ui) {

                    $(document.body).trigger('price_slider_change', [ui.values[0], ui.values[1]]);
                }
            });
        }
    };

    // Filter Ajax
    farmart.catalogFilterAjax = function () {
        if ( $('#primary-sidebar').hasClass('farmart-sidebar-style-2') ) {
            $('.fm_widget_product_categories .product-categories').removeClass('fm-widget-vertical-item');

            if( $('.wp-block-group__inner-container > p').is(':empty') ) {
                $('.wp-block-group__inner-container > p').remove();
            }
        }

        if (!farmart.$body.hasClass('catalog-ajax-filter')) {
            return;
        }

        var $ajaxPreloader = $( '#fm-catalog-ajax-loader' );
            $ajaxPreloader.addClass('fade-in');

        $(document.body).on('price_slider_change', function (event, ui) {
            var form = $('.price_slider').closest('form').get(0),
                $form = $(form),
                url = $form.attr('action') + '?' + $form.serialize();

            $(document.body).trigger('farmart_catelog_filter_ajax', url, $(this));
        });

        farmart.$body.on('click', '.fm_widget_product_categories a, .fm-widget-layered-nav a, .widget_rating_filter a, .widget_layered_nav_filters a, ul.woocommerce-ordering a:not(.fm-cancel-order), ul.per-page a, .farmart-go-back a, .farmart-price-filter-list a', function (e) {
            e.preventDefault();
            var url = $(this).attr('href');

            $(document.body).trigger('farmart_catelog_filter_ajax', url, $(this));
        });

        $(document.body).on('farmart_catelog_filter_ajax', function (e, url, element) {

            var $content = $('#content'),
                $pageHeader = $('.page-header');

            $ajaxPreloader.removeClass('fade-in');

            NProgress.start();

            if ('?' == url.slice(-1)) {
                url = url.slice(0, -1);
            }

            url = url.replace(/%2C/g, ',');

            history.pushState(null, null, url);

            $(document.body).trigger('farmart_ajax_filter_before_send_request', [url, element]);

            if (farmart.ajaxXHR) {
                farmart.ajaxXHR.abort();
            }

            farmart.ajaxXHR = $.get(url, function (res) {

                $content.replaceWith($(res).find('#content'));
                $pageHeader.html($(res).find('.page-header').html());

                if ($(res).find('#primary-sidebar').length < 1) {
                    farmart.$body.removeClass('mb-filter-active sidebar-content').addClass('full-content');
                }

                $(document.body).trigger('farmart_ajax_filter_request_success', [res, url]);

            }, 'html');

        });

        $(document.body).on('farmart_ajax_filter_request_success', function () {
            farmart.shopView();
            farmart.catalogCategories();
            farmart.catalogProducts();

            farmart.searchLayeredNav();
            farmart.productCategoriesWidget();
            farmart.productAttribute();
            farmart.priceSlider();
            farmart.productsCarouselWidget();
            farmart.toggleWidget();
            NProgress.done();

            if ( $('#primary-sidebar').hasClass('farmart-sidebar-style-2') ) {
                $('.fm_widget_product_categories .product-categories').removeClass('fm-widget-vertical-item');
            }

            $ajaxPreloader.addClass('fade-in');
            $(document.body).removeClass('fm-overflow-y');
        });

    };

    farmart.filterOnMobile = function () {
        var $mobileNavMenu = $('.fm-navigation-mobile');

        farmart.$body.on('click', '#fm-filter-mobile', function (e) {
            e.preventDefault();
            var $this = $(this),
                height = $mobileNavMenu.height();

            farmart.$body.find('.catalog-sidebar').fadeIn().toggleClass('fm-filter-active');
            $(document.body).toggleClass('fm-overflow-y');

            farmart.$body.find('#primary-sidebar').css('height', $(window).height() - height);
        });

        farmart.$body.on('click', '.catalog-sidebar .backdrop,.catalog-sidebar .close-sidebar', function (e) {
            e.preventDefault();
            farmart.$body.find('.catalog-sidebar').fadeOut().removeClass('fm-filter-active');
            $(document.body).removeClass('fm-overflow-y');
        });

    };

    farmart.filterSidebar = function () {
        var $mobileNavMenu = $('.fm-navigation-mobile');

        farmart.$body.on('click', '#fm-vendor-infor-mobile', function (e) {
            e.preventDefault();
            var $this = $(this),
                height = $mobileNavMenu.height();

            farmart.$body.find('.dokan-store-sidebar').fadeIn().toggleClass('fm-filter-active');
            farmart.$body.find('#wcfmmp-store .sidebar').fadeIn().toggleClass('fm-filter-active');

            $(document.body).toggleClass('fm-overflow-y');
            farmart.$body.find('.dokan-store-sidebar').css('height', $(window).height() - height);
            farmart.$body.find('.dokan-widget-area').css('padding-bottom', height + 'px');

            farmart.$body.find('#wcfmmp-store .sidebar').css('height', $(window).height() - height);
            farmart.$body.find('.wcfm-widget-area').css('padding-bottom', height + 'px');
        });

        farmart.$body.on('click', '.close-sidebar', function (e) {
            e.preventDefault();
            farmart.$body.find('.dokan-store-sidebar').fadeOut().removeClass('fm-filter-active');
            farmart.$body.find('#wcfmmp-store .sidebar').fadeOut().removeClass('fm-filter-active');
            $(document.body).removeClass('fm-overflow-y');
        });

    };


    farmart.changeArrowNav = function () {
        $('.dokan-single-store .dokan-pagination-container .dokan-pagination li:first-child a').html('<span class="farmart-svg-icon"><svg viewBox="0 0 32 32"><path d="M22.4 32c0.205 0 0.409-0.078 0.566-0.234 0.312-0.312 0.312-0.819 0-1.131l-13.834-13.834 13.834-13.834c0.312-0.312 0.312-0.819 0-1.131s-0.819-0.312-1.131 0l-14.4 14.4c-0.312 0.312-0.312 0.819 0 1.131l14.4 14.4c0.156 0.156 0.361 0.234 0.566 0.234z"></path></svg></span>');
        $('.dokan-single-store .dokan-pagination-container .dokan-pagination li:last-child a').html('<span class="farmart-svg-icon"><svg viewBox="0 0 32 32"><path d="M8 32c-0.205 0-0.409-0.078-0.566-0.234-0.312-0.312-0.312-0.819 0-1.131l13.834-13.834-13.834-13.834c-0.312-0.312-0.312-0.819 0-1.131s0.819-0.312 1.131 0l14.4 14.4c0.312 0.312 0.312 0.819 0 1.131l-14.4 14.4c-0.156 0.156-0.361 0.234-0.566 0.234z"></path></svg></span>');
    };

    /**
     * preLoader
     */
    farmart.preLoader = function () {
        if ( !farmart.$body.hasClass( 'fm-preloader' ) ) {
			return;
		}

		var $preloader = $( '#farmart-preloader' );

		if ( !$preloader.length ) {
			return;
		}

		if (farmart.$body.hasClass('elementor-editor-active')) {
            $preloader.addClass('fade-in');
            return;
        }

        $(document).ready(function () {
            $preloader.addClass('fade-in');
        });
    };

    // Catalog Banners Carousel
    farmart.catalogBanners = function () {
        var $banners = $('#fm-catalog-banners');

        if ($banners.length <= 0) {
            return;
        }

        var autoplay = $banners.data('autoplay'),
            infinite = false,
            speed = 1000;

        if (autoplay > 0) {
            infinite = true;
            speed = autoplay;
            autoplay = true;
        } else {
            autoplay = false;
        }

        $banners.slick({
            rtl: (farmartData.direction === 'true'),
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: speed,
            autoplay: autoplay,
            infinite: infinite,
            arrows: true,
            dots: true,
            prevArrow: farmart.$iconChevronLeft,
            nextArrow: farmart.$iconChevronRight,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                    }
                }
            ]
        });

    };

    // Catalog Categories Carousel
    farmart.catalogCategories = function () {
        var $categories = $('#fm-catalog-categories .catalog-carousel__wrapper');

        if ($categories.length <= 0) {
            return;
        }

        var columns = $categories.data('columns');

        $categories.slick({
            rtl: (farmartData.direction === 'true'),
            slidesToShow: columns,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            prevArrow: farmart.$iconChevronLeft,
            nextArrow: farmart.$iconChevronRight,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        arrows: false,
                        dots: true
                    }
                }
            ]
        });
    };

    // Catalog Product Carousel
    farmart.catalogProducts = function () {
        var $products = $('.fm-catalog-products .catalog-carousel__wrapper');

        if (!$products.length) {
            return;
        }

        $products.each(function () {
            var $el = $(this),
                $slider = $el.find('ul.products'),
                dataSettings = $el.data('settings');

            if ($slider.children().length < dataSettings.slidesToShow) {
                return;
            }

            var options = {
                arrows: false,
                dots: true,
                prevArrow: farmart.$iconChevronLeft,
                nextArrow: farmart.$iconChevronRight,
            };

            var data = JSON.stringify(dataSettings);

            $slider.attr('data-slick', data);
            $slider.slick(options);

        });
    };

    // Product Attribute
    farmart.productAttribute = function () {
        var oImgSrc = '',
            oImgSrcSet = '';
        farmart.$body.on('mouseover', '.fm-swatch-item', function (e) {
            e.preventDefault();
            var $mainImages = $(this).closest('li.product').find('.fm-product-thumbnail'),
                $oriImage = $mainImages.find('img');

            oImgSrc = $oriImage.attr('src');
            oImgSrcSet = $oriImage.attr('srcset');

            var imgSrc = $(this).data('src'),
                imgSrcSet = $(this).data('src-set');

            $oriImage.attr('src', imgSrc);

            if (imgSrcSet) {
                $oriImage.attr('srcset', imgSrcSet);
            }


        }).on('mouseout', '.fm-swatch-item', function (e) {
            e.preventDefault();
            var $mainImages = $(this).closest('li.product').find('.fm-product-thumbnail'),
                $oriImage = $mainImages.find('img');

            if (oImgSrc) {
                $oriImage.attr('src', oImgSrc);
            }

            if (oImgSrcSet) {
                $oriImage.attr('srcset', oImgSrcSet);
            }
        });
    };

    // Change page product toolbar pagination
    farmart.catalogToolbarPagination = function () {
        $('.fm-toolbar-pagination').on('submit', function () {
            var pageNumber = $('#fm-catalog-page-number').val(),
                pageUrl = $('#fm-catalog-url-page-' + pageNumber).val();

            window.location.href = pageUrl;
            return false;
        });
    };

    // Shop View
    farmart.shopView = function () {
        $('#fm-shop-view').on('click', '.shop-view__icon a', function (e) {
            e.preventDefault();
            var $el = $(this),
                view = $el.data('view');

            if ($el.hasClass('current')) {
                return;
            }

            $el.addClass('current').siblings().removeClass('current');
            farmart.$body.removeClass('catalog-view-grid catalog-view-list catalog-view-extended').addClass('catalog-view-' + view);

            document.cookie = 'catalog_view=' + view + ';domain=' + window.location.host + ';path=/';

            farmart.$body.trigger('farmart_shop_view_after_change');
        });
    };

    /**
     * Toggle product quick view
     */
    farmart.productQuickView = function () {
        var $modal = $('#fm-quick-view-modal'),
            $product = $modal.find('.product-modal-content'),
            ajax_url = farmartData.ajax_url.toString().replace('%%endpoint%%', 'product_quick_view');

        if (ajax_url == '') {
            return;
        }

        farmart.$body.on('click', '.fm-product-quick-view', function (e) {
            e.preventDefault();

            var $a = $(this),
                id = $a.data('id');

            $product.hide().html('');
            $modal.addClass('loading').removeClass('loaded');
            farmart.openModal($modal);

            $.ajax({
                url: ajax_url,
                dataType: 'json',
                method: 'post',
                data: {
                    action: 'farmart_product_quick_view',
                    nonce: farmartData.nonce,
                    product_id: id
                },
                success: function (response) {
                    $product.show().append(response.data);
                    $modal.removeClass('loading').addClass('loaded');
                    var $gallery = $product.find('.woocommerce-product-gallery'),
                        $variation = $('.variations_form'),
                        $buttons = $product.find('form.cart .actions-button'),
                        $buy_now = $buttons.find('.buy_now_button');
                    $gallery.removeAttr('style');
                    $gallery.imagesLoaded(function () {
                        $gallery.find('.woocommerce-product-gallery__wrapper').not('.slick-initialized').slick({
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: false,
                            dots: true,
                            prevArrow: farmart.$iconChevronLeft,
                            nextArrow: farmart.$iconChevronRight,
                        });
                    });

                    if ($buy_now.length > 0) {
                        $buttons.prepend($buy_now);
                    }

                    $gallery.find('.woocommerce-product-gallery__image').on('click', function (e) {
                        e.preventDefault();
                    });

                    if (typeof wc_add_to_cart_variation_params !== 'undefined') {
                        $variation.each(function () {
                            $(this).wc_variation_form();
                        });
                    }

                    if (typeof $.fn.tawcvs_variation_swatches_form !== 'undefined') {
                        $variation.tawcvs_variation_swatches_form();
                    }

                    $( document.body ).trigger( 'init_variation_swatches');

                    if (typeof tawcvs !== 'undefined') {
                        if (tawcvs.tooltip === 'yes') {
                            $variation.find('.swatch').tooltip({
                                classes: {'ui-tooltip': 'farmart-tooltip'},
                                tooltipClass: 'farmart-tooltip qv-tool-tip',
                                position: {my: 'center bottom', at: 'center top-13'},
                                create: function () {
                                    $('.ui-helper-hidden-accessible').remove();
                                }
                            });
                        }
                    }

                    farmart.buyNow();
                    farmart.addToCartAjax();
                }
            });
        });

        $modal.on('click', '.close-modal, .fm-modal-overlay', function (e) {
            e.preventDefault();
            farmart.closeModal($modal);
        })

    };

    farmart.buyNow = function () {
        farmart.$body.find('form.cart').on('click', '.buy_now_button', function (e) {
            e.preventDefault();
            var $form = $(this).closest('form.cart'),
                is_disabled = $(this).is(':disabled');

            if (is_disabled) {
                jQuery('html, body').animate({
                        scrollTop: $(this).offset().top - 200
                    }, 900
                );
            } else {
                $form.append('<input type="hidden" value="true" name="buy_now" />');
                $form.find('.single_add_to_cart_button').addClass('has-buy-now');
                $form.find('.single_add_to_cart_button').trigger('click');
            }
        });
    };

    /**
     * Open modal
     *
     * @param $modal
     */
    farmart.openModal = function ($modal) {
        $modal.fadeIn();
        $modal.addClass('open');
    };

    /**
     * Close modal
     */
    farmart.closeModal = function ($modal) {
        $modal.fadeOut(function () {
            $(this).removeClass('open');
        });
    };

    // Add to cart ajax
    farmart.addToCartAjax = function () {

        var found = false;
        farmart.$body.find('form.cart').on('click', '.single_add_to_cart_button', function (e) {
            var $el = $(this),
                $cartForm = $el.closest('form.cart'),
                $productTitle = $el.closest('.product').find('.product_title');

            if ($el.hasClass('has-buy-now')) {
                return;
            }

            if ($cartForm.length > 0) {
                e.preventDefault();
            } else {
                return;
            }

            if ($el.hasClass('disabled')) {
                return;
            }

            $el.addClass('loading');
            if (found) {
                return;
            }
            found = true;

            var formdata = $cartForm.serializeArray(),
                currentURL = window.location.href;

            if ($el.val() != '') {
                formdata.push({name: $el.attr('name'), value: $el.val()});
            }
            $.ajax({
                url: window.location.href,
                method: 'post',
                data: formdata,
                error: function () {
                    window.location = currentURL;
                },
                success: function (response) {
                    if (!response) {
                        window.location = currentURL;
                    }

                    if (typeof wc_add_to_cart_params !== 'undefined') {
                        if (wc_add_to_cart_params.cart_redirect_after_add === 'yes') {
                            window.location = wc_add_to_cart_params.cart_url;
                            return;
                        }
                    }

                    $(document.body).trigger('updated_wc_div');

                    $(document.body).on('wc_fragments_refreshed', function () {
                        $el.removeClass('loading');
                    });

                    var $message = '',
                        className = 'success',
                        $content = $productTitle.html();
                    if ($(response).find('.woocommerce-message').length > 0) {
                        $message = $(response).find('.woocommerce-message').html();
                    }

                    if ($(response).find('.woocommerce-error').length > 0) {
                        $message = $(response).find('.woocommerce-error').html();
                        className = 'error';
                    }

                    if ($(response).find('.woocommerce-info').length > 0) {
                        $message = $(response).find('.woocommerce-info').html();
                    }

                    if (!$message) {
                        $content = $productTitle.find('a').html();
                    }

                    farmart.addedToCartNotice($message, $content, true, className, false);

                    found = false;
                }
            });

        });

    };

    farmart.addedToCartNotice = function ($message, $content, single, className, multiple) {
        if (farmartData.added_to_cart_notice === 'undefined' || !$.fn.notify) {
            return;
        }

        if ($content === false) {
            $content = ' ';
        } else {
            if (multiple) {
                $content += ' ' + farmartData.added_to_cart_notice.added_to_cart_texts;
            } else {
                $content += ' ' + farmartData.added_to_cart_notice.added_to_cart_text;
            }
        }

        $message += '<a href="' + farmartData.added_to_cart_notice.cart_view_link + '" class="btn-button">' + farmartData.added_to_cart_notice.cart_view_text + '</a>';

        if (single) {
            $message = '<div class="message-box">' + $message + '</div>';
        }

        $.notify.addStyle('farmart', {
            html: '<div>'+ farmart.$icon_check +'<span data-notify-text/>' + $message + farmart.$icon_close + '</div>'
        });
        $.notify($content, {
            autoHideDelay: farmartData.added_to_cart_notice.cart_notice_auto_hide,
            className: className,
            style: 'farmart',
            showAnimation: 'fadeIn',
            hideAnimation: 'fadeOut'
        });
    };

    farmart.addedToCartFaildNotice = function ($message, $content, className, max, min) {
        if (farmartData.added_to_cart_notice === 'undefined' || !$.fn.notify) {
            return;
        }

        $content = ' ';

        $message = '<div class="message-box">' + $message +
            '<br>' + farmartData.added_to_cart_notice.noticeQuantityMin + ' : ' + min +
            '<br>' + farmartData.added_to_cart_notice.noticeQuantityMax + ' : ' + max +
            '</div>';

        $.notify.addStyle('farmart', {
            html: '<div>'+ farmart.$icon_alert +'<span data-notify-text/>' + $message + farmart.$icon_close + '</div>'
        });
        $.notify($content, {
            autoHideDelay: farmartData.added_to_cart_notice.cart_notice_auto_hide,
            className: className,
            style: 'farmart',
            showAnimation: 'fadeIn',
            hideAnimation: 'fadeOut'
        });
    };

    farmart.catalogOpenCartMini = function () {

        $(document.body).on('added_to_cart', function (event, fragments, cart_hash, $thisbutton) {
            var product_title = $thisbutton.attr('data-title'),
                $message = '<span class="notify-quantity">(' + 'x' + $thisbutton.data('quantity') + ')</span>';

            farmart.addedToCartNotice($message, product_title, false, 'success', false);
        });
    };

    farmart.productQuantity = function () {
        farmart.$body.on('click', '.quantity .increase, .quantity .decrease', function (e) {
            e.preventDefault();

            var $this = $(this),
                $wrapperBtn = $this.closest('.product-button'),
                $btn = $wrapperBtn.find('.quantity_button'),
                $price = $this.closest('.quantity').siblings('.box-price').find('.price-current'),
                $priceCurrent = $price.html(),
                $qty = $this.siblings('.qty'),
                step = parseInt($qty.attr('step'), 10),
                current = parseInt($qty.val(), 10),
                min = parseInt($qty.attr('min'), 10),
                max = parseInt($qty.attr('max'), 10);

            min = min ? min : 0;
            max = max ? max : current + 1;

            if ($this.hasClass('decrease') && current > min) {
                $qty.val(current - step);
                $qty.trigger('change');

                // Btn
                var numQuantity = +$btn.attr("data-quantity");
                numQuantity = numQuantity - 1;
                $btn.attr('data-quantity', numQuantity);

                var $total2 = ($priceCurrent * 1 - $priceCurrent / current).toFixed(2);

                $price.html($total2);
            }
            if ($this.hasClass('increase') && current < max) {
                $qty.val(current + step);
                $qty.trigger('change');

                // Btn
                var numQuantity = +$btn.attr("data-quantity");
                numQuantity = numQuantity + 1;
                $btn.attr('data-quantity', numQuantity);

                var $total = ($priceCurrent * 1 + $priceCurrent / current).toFixed(2);

                $price.html($total);
            }
        });

        farmart.$body.on('keyup', '.quantity .qty', function (e) {
            e.preventDefault();

            var $this = $(this),
                $wrapperBtn = $this.closest('.product-button'),
                $btn = $wrapperBtn.find('.quantity_button'),
                $price = $this.closest('.quantity').siblings('.box-price').find('.price-current'),
                $priceFirst = $price.data('current'),
                current = parseInt($this.val(), 10),
                min = parseInt($this.attr('min'), 10),
                max = parseInt($this.attr('max'), 10);

            var min_check = min ? min : 1;
            var max_check = max ? max : current + 1;

            if (current <= max_check && current >= min_check) {
                $btn.attr('data-quantity', current);

                var $total = ($priceFirst * current).toFixed(2);

                $price.html($total)
            } else {
                var $message = farmartData.added_to_cart_notice.noticeFaildQuantity;

                farmart.addedToCartFaildNotice($message,'', 'success',max,min);
            }
        });

    };

    // add wishlist
    farmart.addWishlist = function () {
        $('ul.products li.product .yith-wcwl-add-button').on('click', 'a', function () {
            $(this).addClass('loading');
        });


        farmart.$body.on('added_to_wishlist', function (e, $el_wrap) {
            e.preventDefault();
            $('ul.products li.product .yith-wcwl-add-button a').removeClass('loading');
            if ($el_wrap.hasClass('fbt-wishlist')) {
                return;
            }
            var content = $el_wrap.data('product-title');
            farmart.addedToWishlistNotice('', content, 'success', min, max);
        });
    };

    // update wishlist count
    farmart.updateWishlistCounter = function () {
        var $counter = $('.fm-wishlist .mini-item-counter, .header-element--wishlist .mini-item-counter');

        if (!$counter.length) {
            return;
        }

        $(document.body).on('added_to_wishlist', function () {
            $counter.text(function () {
                return parseInt(this.innerText, 10) + 1;
            });
        }).on('removed_from_wishlist', function () {
            $counter.text(function () {
                var counter = parseInt(this.innerText, 10) - 1;
                return Math.max(0, counter);
            });
        });
    };

    farmart.addedToWishlistNotice = function ($message, $content, single, className, multiple) {
        if (typeof farmartData.added_to_wishlist_notice === 'undefined' || !$.fn.notify) {
            return;
        }

        if (multiple) {
            $content += ' ' + farmartData.added_to_wishlist_notice.added_to_wishlist_texts;
        } else {
            $content += ' ' + farmartData.added_to_wishlist_notice.added_to_wishlist_text;
        }

        $message += '<a href="' + farmartData.added_to_wishlist_notice.wishlist_view_link + '" class="btn-button">' + farmartData.added_to_wishlist_notice.wishlist_view_text + '</a>';

        if (single) {
            $message = '<div class="message-box">' + $message + '</div>';
        }

        $.notify.addStyle('farmart', {
            html: '<div>'+ farmart.$icon_check +'<span data-notify-text/>' + $message + farmart.$icon_close + '</div>'
        });
        $.notify($content, {
            autoHideDelay: farmartData.added_to_wishlist_notice.wishlist_notice_auto_hide,
            className: className,
            style: 'farmart',
            showAnimation: 'fadeIn',
            hideAnimation: 'fadeOut'
        });
    };

    // Compare Button
    farmart.addCompare = function () {

        farmart.$body.on('click', 'a.compare:not(.added)', function (e) {
            e.preventDefault();

            var $el = $(this);
            $el.addClass('loading');

            $el.closest('.product-inner, .single-button-wrapper').find('.compare:not(.loading)').trigger('click');

            var compare = false;

            if ($(this).hasClass('added')) {
                compare = true;
            }

            if (compare === false) {
                var compare_counter = farmart.$header.find('.mini-compare-counter').html();
                compare_counter = parseInt(compare_counter, 10) + 1;

                setTimeout(function () {
                    farmart.$header.find('.mini-compare-counter').html(compare_counter);
                    $el.removeClass('loading');
                }, 2000);
            }
        });

        $(document).find('.compare-list').on('click', '.remove a', function (e) {
            e.preventDefault();
            var compare_counter = $('.mini-compare-counter', window.parent.document).html();
            compare_counter = parseInt(compare_counter, 10) - 1;
            if (compare_counter < 0) {
                compare_counter = 0;
            }

            $('.mini-compare-counter', window.parent.document).html(compare_counter);

            $('a.compare').removeClass('loading');
        });

        $('.yith-woocompare-widget').on('click', 'li a.remove', function (e) {
            e.preventDefault();
            var compare_counter = farmart.$header.find('.mini-compare-counter').html();
            compare_counter = parseInt(compare_counter, 10) - 1;
            if (compare_counter < 0) {
                compare_counter = 0;
            }

            setTimeout(function () {
                farmart.$header.find('.mini-compare-counter').html(compare_counter);
            }, 2000);

        });

        $('.yith-woocompare-widget').on('click', 'a.clear-all', function (e) {
            e.preventDefault();
            setTimeout(function () {
                farmart.$header.find('.mini-compare-counter').html('0');
            }, 2000);
        });
    };

    /**
	 * Ajax load more products.
	 */
	farmart.loadMoreProducts = function() {
		// Handles click load more button.
		$( document.body ).on( 'click', '.woocommerce-navigation.ajax-navigation a', function( event ) {
			event.preventDefault();

			var $el = $( this );

			if ( $el.hasClass( 'loading' ) ) {
				return;
			}

			$el.addClass( 'loading' );

			loadProducts( $( this ) );
		} );

		// Infinite scroll.
		if ( $( document.body ).hasClass( 'catalog-nav-infinite' ) ) {
			$( window ).on( 'scroll', function() {
				if ($( document.body ).find('.woocommerce-navigation.ajax-navigation').is(':in-viewport')) {
					$( document.body ).find('.woocommerce-navigation.ajax-navigation a').trigger('click');
				}
			} ).trigger('scroll');
		}

		/**
		 * Ajax load products.
		 *
		 * @param jQuery $el Button element.
		 */
		function loadProducts( $el ) {
			var $nav = $el.closest( '.woocommerce-navigation' ),
				url = $el.attr( 'href' );

			$.get( url, function( response ) {
				var $content = $( '#main', response ),
					$list = $( 'ul.products', $content ),
					$products = $list.children(),
					$newNav = $( '.woocommerce-navigation.ajax-navigation', $content );

				$products.each( function( index, product ) {
					$( product ).css( 'animation-delay', index * 100 + 'ms' );
				} );

				$products.appendTo( $nav.prev( 'ul.products' ) );
				$products.addClass( 'animated farmartFadeInUp' );

				if ( $newNav.length ) {
					$el.replaceWith( $( 'a', $newNav ) );
				} else {
					$nav.fadeOut( function() {
						$nav.remove();
					} );
				}

				$( document.body ).trigger( 'farmart_products_loaded', [$products, true] );
				$( document.body ).trigger('yith_wcwl_init');
			} );
		}
	};

    farmart.productCategoriesWidget = function () {
        var $categories = $('.fm_widget_product_categories');

        if ($categories.length <= 0) {
            return;
        }

        $categories.find('ul.children').closest('li').prepend( farmart.$icon_chevron_down);

        $categories.find('li.current-cat-parent, li.current-cat, li.current-cat-ancestor').addClass('opened').children('.children').show();

        $categories.on('click', '.cat-menu-close', function (e) {
            e.preventDefault();
            $(this).closest('li').children('.children').slideToggle();
            $(this).closest('li').toggleClass('opened');
        })
    };

    farmart.toggleWidget = function () {

        $('.widget').each(function () {
            var btn = $(this).find('.toggle-widget-btn');

            btn.on('click', function () {
                var wrap = $(this).closest('.widget').children().not('.widget-title');

                $(this).toggleClass('close');
                wrap.slideToggle();
            });
        });
    };

    farmart.productsCarouselWidget = function () {
        $('.fm-widget-products-carousel').each(function () {
            var $el = $(this),
                options = {
                    prevArrow: farmart.$iconChevronLeft,
                    nextArrow: farmart.$iconChevronRight,
                };
            $el.find('ul.products').not('.slick-initialized').slick(options);
        });
    };

    farmart.addClassCalendar = function () {
        var date = new Date(),
            currentDate = date.getDate();

        $('#wp-calendar tbody td').each(function() {
            var specifiedDate = $(this).text();

            if (currentDate > specifiedDate) {
                $(this).addClass('old');
            }
        });

    };

    /**
     * Change product quantity
     */
    farmart.productThumbnail = function () {
        var $gallery = $('.woocommerce-product-gallery'),
            $video = $gallery.find('.woocommerce-product-gallery__image.fm-product-video'),
            $thumbnail = $gallery.find('.flex-control-thumbs'),
            $divProduct = $gallery.parent();

        farmart.$window.on('load', function () {
            $('.woocommerce-product-gallery').find('.woocommerce-product-gallery__image').each(function () {
                if ($(this).find('img').hasClass('lazy')) {
                    var src = $(this).find('img').data('original');
                    $(this).find('img').attr('src', src);
                }
            })
        });

        $gallery.imagesLoaded(function () {
            setTimeout(function () {
                if ($thumbnail.length < 1) {
                    return;
                }

                if (farmart.$body.hasClass('mobile-version')) {
                    return;
                }

                var columns = $gallery.data('columns');
                var count = $thumbnail.find('li').length;
                if (count > columns) {
                    var options = {
                        rtl: farmartData.isRTL === '1',
                        slidesToShow: columns,
                        slidesToScroll: 1,
                        vertical: true,
                        focusOnSelect: true,
                        infinite: false,
                        prevArrow: farmart.$iconChevronLeft,
                        nextArrow: farmart.$iconChevronRight,
                    };

                    if ($divProduct.hasClass('fm-product-thumbnail-horizontal')) {
                        options.vertical = false;
                        options.prevArrow = farmart.$iconChevronLeft;
                        options.nextArrow = farmart.$iconChevronRight;
                    }
                    $thumbnail.slick(options);
                } else {
                    $thumbnail.addClass('no-slick');
                }

                if ($video.length > 0) {
                    $('.woocommerce-product-gallery').addClass('has-video');
                    if ($('.woocommerce-product-gallery').hasClass('video-first')) {
                        $thumbnail.find('li').first().append('<div class="i-video"><div class="i-inner"></div><div class="i-play"></div></div>');
                    } else {
                        $thumbnail.find('li').last().append('<div class="i-video"><div class="i-inner"></div><div class="i-play"></div></div>');
                    }
                }

            }, 100);

        });

        farmart.$window.on('resize', function () {
            var $images = $gallery.find('.woocommerce-product-gallery__image').height(),
            $zoom = $gallery.find('.product-image-ms');

            $zoom.css('top', $images + 50);
        }).trigger('resize');

    };

    farmart.productVideo = function () {
        var $gallery = $('.woocommerce-product-gallery');
        var $video = $gallery.find('.woocommerce-product-gallery__image.fm-product-video');
        var $thumbnail = $gallery.find('.flex-control-thumbs');

        if ($video.length < 1) {
            return;
        }

        var found = false,
            last = false;

        $thumbnail.on('click', 'li', function () {

            var $video = $gallery.find('.fm-product-video');

            var thumbsCount = $(this).siblings().length;

            last = true;
            if ($(this).index() == thumbsCount) {
                last = false;
                found = false;
            }

            if (!found && last) {
                var $iframe = $video.find('iframe'),
                    $wp_video = $video.find('video.wp-video-shortcode');

                if ($iframe.length > 0) {
                    $iframe.attr('src', $iframe.attr('src'));
                }
                if ($wp_video.length > 0) {
                    $wp_video[0].pause();
                }
                found = true;
            }

            return false;

        });

        $thumbnail.find('li').on('click', '.i-video', function (e) {
            e.preventDefault();
            $(this).closest('li').find('img').trigger('click');
        });
    };

    /**
     * Show photoSwipe lightbox
     */
    farmart.productGallery = function () {
        var $images = $('.woocommerce-product-gallery');

        /*if (typeof farmartData.product_gallery === 'undefined' || farmartData.product_gallery != '1') {
            $images.on('click', '.woocommerce-product-gallery__image', function (e) {
                return false;
            });

            return
        }*/

        if (!$images.length) {
            return;
        }

        $images.find('.woocommerce-product-gallery__image').on('mouseenter', function () {
            $(this).closest('.woocommerce-product-gallery').find('.ms-image-view').removeClass('hide');
            $(this).closest('.woocommerce-product-gallery').find('.ms-image-zoom').addClass('hide');
        });

        $images.find('.woocommerce-product-gallery__image').on('mouseleave', function () {
            $(this).closest('.woocommerce-product-gallery').find('.ms-image-view').addClass('hide');
            $(this).closest('.woocommerce-product-gallery').find('.ms-image-zoom').removeClass('hide');
        });

        $images.on('click', '.woocommerce-product-gallery__image', function (e) {
            e.preventDefault();

            if ($(this).hasClass('fm-product-video')) {
                return false;
            }

            var items = [];
            var $links = $(this).closest('.woocommerce-product-gallery').find('.woocommerce-product-gallery__image');
            $links.each(function () {
                var $el = $(this);

                if ($el.hasClass('fm-product-video')) {
                    items.push({
                        html: $el.find('.fm-video-content').html()
                    });

                } else {
                    items.push({
                        src: $el.children('a').attr('href'),
                        w: $el.find('a img').attr('data-large_image_width'),
                        h: $el.find('a img').attr('data-large_image_height')
                    });
                }
            });

            var index = $links.index($(this)),
                options = {
                    index: index,
                    bgOpacity: 0.85,
                    showHideOpacity: true,
                    mainClass: 'pswp--minimal-dark',
                    barsSize: {top: 0, bottom: 0},
                    captionEl: false,
                    fullscreenEl: false,
                    shareEl: false,
                    tapToClose: true,
                    tapToToggleControls: false
                };

            var lightBox = new PhotoSwipe(document.getElementById('pswp'), window.PhotoSwipeUI_Default, items, options);
            lightBox.init();

            lightBox.listen('close', function () {
                $('.fm-video-wrapper').find('iframe').each(function () {
                    $(this).attr('src', $(this).attr('src'));
                });

                $('.fm-video-wrapper').find('video').each(function () {
                    $(this)[0].pause();
                });
            });

            return false;
        });
    };

    /**
     * Append WC Tab magic line
     */
    farmart.hoverProductTabs = function () {
        var $el, leftPos, newWidth, $origWidth, childWidth,
            $mainNav = $('.single-product .woocommerce-tabs').find('ul.wc-tabs');

        if ($mainNav.length < 1) {
            return;
        }

        $mainNav.append('<li id="fm-wc-tab__magic-line" class="fm-wc-tab__magic-line"></li>');
        var $magicLine = $('#fm-wc-tab__magic-line');

        farmart.$window.on('load', function () {
            childWidth = $mainNav.children('li.active').outerWidth();
            $magicLine
                .width(childWidth)
                .css('left', $mainNav.children('li.active').position().left)
                //.data( 'origLeft', $magicLine.position().left )
                .data('origWidth', $magicLine.width());

            $origWidth = $magicLine.data('origWidth');

            $mainNav.children('li').on('mouseenter', function () {
                $el = $(this);
                newWidth = $el.outerWidth();
                leftPos = $el.position().left;
                $magicLine.stop().animate({
                    left: leftPos,
                    width: newWidth
                });

            });

            $mainNav.children('li').on('mouseleave', function () {
                $magicLine.stop().animate({
                    left: $magicLine.data('origLeft'),
                    width: $origWidth
                });

            });

            $mainNav.on('click', 'li', function () {
                $el = $(this);
                $origWidth = newWidth = $el.outerWidth();
                leftPos = $el.position().left;
                $magicLine.stop().animate({
                    left: leftPos,
                    width: newWidth
                });
                $magicLine
                    .data('origLeft', leftPos)
                    .data('origWidth', newWidth);
            });
        });
    };

    //related & upsell slider
    farmart.singleProductCarousel = function () {
        var $related = $('.single-product, .fm-cart-page').find('.related-products');
        $related.each(function () {
            var $this = $(this),
                columns = $this.data('columns'),
                $product = $this.find('ul.products');
            if( $product.find('li.product').length < columns ) {
                return;
            }
            // Product thumnails and featured image slider
            $product.not('.slick-initialized').slick({
                rtl: (farmartData.direction === 'true'),
                slidesToShow: parseInt(columns),
                slidesToScroll: 1,
                arrows: true,
                dots: false,
                infinite: false,
                centerPadding: '20px',
                prevArrow: farmart.$iconChevronLeft,
                nextArrow: farmart.$iconChevronRight,
                responsive: [
                    {
                        breakpoint: 1366,
                        settings: {
                            slidesToShow: parseInt(columns) > 5 ? 5 : parseInt(columns),
                            slidesToScroll: parseInt(columns) > 5 ? 5 : parseInt(columns),
                            arrows: false,
                            dots: true,
                        }
                    },
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: parseInt(columns) > 4 ? 4 : parseInt(columns),
                            slidesToScroll: parseInt(columns) > 4 ? 4 : parseInt(columns),
                            arrows: false,
                            dots: true,
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            arrows: false,
                            dots: true,
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            arrows: false,
                            dots: true,
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            arrows: false,
                            dots: true,
                        }
                    }
                ]
            });
        });
    };

    farmart.fbtProduct = function () {
        if (!farmart.$body.hasClass('single-product')) {
            return;
        }

        var $fbtProducts = $('#fm-product-fbt');

        if ($fbtProducts.length <= 0) {
            return;
        }

        var $priceAt = $fbtProducts.find('.fm-total-price .woocommerce-Price-amount'),
            $button = $fbtProducts.find('.fm_add_to_cart_button'),
            totalPrice = parseFloat($fbtProducts.find('#fm-data_price').data('price')),
            currency = farmartData.currency_param.currency_symbol,
            thousand = farmartData.currency_param.thousand_sep,
            decimal = farmartData.currency_param.decimal_sep,
            price_decimals = farmartData.currency_param.price_decimals,
            currency_pos = farmartData.currency_param.currency_pos;

        $fbtProducts.find('.products-list').on('click', 'a', function (e) {
            e.preventDefault();
            var id = $(this).data('id');
            $(this).closest('li').toggleClass('uncheck');
            var currentPrice = parseFloat($(this).closest('li').find('.s-price').data('price'));
            if ($(this).closest('li').hasClass('uncheck')) {
                $fbtProducts.find('#fbt-product-' + id).addClass('un-active');
                totalPrice -= currentPrice;

            } else {
                $fbtProducts.find('#fbt-product-' + id).removeClass('un-active');
                totalPrice += currentPrice;
            }

            var $product_ids = '0';
            $fbtProducts.find('.products-list li').each(function () {
                if (!$(this).hasClass('uncheck')) {
                    $product_ids += ',' + $(this).find('a').data('id');
                }
            });

            $button.attr('value', $product_ids);

            $priceAt.html(formatNumber(totalPrice));
        });


        function formatNumber(number) {
            var n = number;
            if (parseInt(price_decimals) > 0) {
                number = number.toFixed(price_decimals) + '';
                var x = number.split('.');
                var x1 = x[0],
                    x2 = x.length > 1 ? decimal + x[1] : '';
                var rgx = /(\d+)(\d{3})/;
                while (rgx.test(x1)) {
                    x1 = x1.replace(rgx, '$1' + thousand + '$2');
                }

                n = x1 + x2
            }


            switch (currency_pos) {
                case 'left' :
                    return currency + n;
                    break;
                case 'right' :
                    return n + currency;
                    break;
                case 'left_space' :
                    return currency + ' ' + n;
                    break;
                case 'right_space' :
                    return n + ' ' + currency;
                    break;
            }
        }
    };

    // Add to cart ajax
    farmart.fbtAddToCartAjax = function () {
        var $fbtProducts = $('#fm-product-fbt');

        if ($fbtProducts.length <= 0) {
            return;
        }


        $fbtProducts.on('click', '.fm_add_to_cart_button.ajax_add_to_cart', function (e) {
            e.preventDefault();

            var $singleBtn = $(this);
            $singleBtn.addClass('loading');

            var currentURL = window.location.href,
                pro_title = '',
                i = 0;

            $fbtProducts.find('.products-list li').each(function () {
                if (!$(this).hasClass('uncheck')) {
                    if (i > 0) {
                        pro_title += ',';
                    }
                    pro_title += ' ' + $(this).find('a').data('title');
                    i++;
                }
            });

            var data = {
                    nonce: farmartData.nonce,
                    product_ids: $singleBtn.attr('value')
                },
                ajax_url = farmartData.ajax_url.toString().replace('%%endpoint%%', 'farmart_fbt_add_to_cart');

            $.post(
                ajax_url,
                data,
                function (response) {
                    if (typeof wc_add_to_cart_params !== 'undefined') {
                        if (wc_add_to_cart_params.cart_redirect_after_add === 'yes') {
                            window.location = wc_add_to_cart_params.cart_url;
                            return;
                        }
                    }

                    $(document.body).trigger('updated_wc_div');
                    $(document.body).on('wc_fragments_refreshed', function () {
                        $singleBtn.removeClass('loading');
                    });

                    farmart.addedToCartNotice('', pro_title, false, 'success', true);

                }
            );

        });

    };

    // Add to wishlist  ajax
    farmart.fbtAddToWishlistAjax = function () {
        var $fbtProducts = $('#fm-product-fbt'),
            i = 0;

        if (!$fbtProducts.length) {
            return;
        }

        var product_ids = getProductIds();

        if (product_ids.length == 0) {
            $fbtProducts.find('.btn-view-to-wishlist').addClass('showed');
            $fbtProducts.find('.btn-add-to-wishlist').addClass('hided');
        }

        $fbtProducts.on('click', '.btn-add-to-wishlist', function (e) {
            e.preventDefault();

            var $singleBtn = $(this);
            product_ids = getProductIds();

            if (product_ids.length == 0) {
                return;
            }

            var pro_title = '',
                index = 0;
            $fbtProducts.find('.products-list li').each(function () {
                if (!$(this).hasClass('uncheck')) {
                    if (index > 0) {
                        pro_title += ',';
                    }
                    pro_title += ' ' + $(this).find('a').data('title');
                    index++;
                }
            });

            $singleBtn.addClass('loading');
            wishlistCallBack(product_ids[i]);

            farmart.$body.on('added_to_wishlist', function () {
                if (product_ids.length > i) {
                    wishlistCallBack(product_ids[i]);
                } else if (product_ids.length == i) {
                    $fbtProducts.find('.btn-view-to-wishlist').addClass('showed');
                    $fbtProducts.find('.btn-add-to-wishlist').addClass('hided');
                    farmart.addedToWishlistNotice('', pro_title, false, 'success', true);
                    $singleBtn.removeClass('loading');
                }
            });

        });

        function getProductIds() {
            var product_ids = [];
            $fbtProducts.find('li.product').each(function () {
                if (!$(this).hasClass('un-active') && !$(this).hasClass('product-buttons') && !$(this).find('.yith-wcwl-add-to-wishlist').hasClass('exists')) {
                    if (product_ids.indexOf($(this).data('id')) == -1) {
                        product_ids.push($(this).data('id'));
                    }
                }

            });

            return product_ids;
        }

        function wishlistCallBack(id) {
            var $product = $fbtProducts.find('.add-to-wishlist-' + id);
            $product.find('.yith-wcwl-add-button .add_to_wishlist').trigger('click');
            i++;
            return i;
        }

    };

    farmart.productVariation = function () {
        var $form = $('.variations_form');
        farmart.$body.on('tawcvs_initialized', function () {
            $form.unbind('tawcvs_no_matching_variations');
            $form.on('tawcvs_no_matching_variations', function (event, $el) {
                event.preventDefault();

                $form.find('.woocommerce-variation.single_variation').show();
                if (typeof wc_add_to_cart_variation_params !== 'undefined') {
                    $form.find('.single_variation').slideDown(200).html('<p>' + wc_add_to_cart_variation_params.i18n_no_matching_variations_text + '</p>');
                }
            });

        });

        $form.find('td.value').on('change', 'select', function () {
            var value = $(this).find('option:selected').text();
            $(this).closest('tr').find('td.label .fm-attr-value').html(value);
        });
    };

    farmart.stickyProductInfo = function () {
        if (!farmart.$body.hasClass('sticky-header-info')) {
            return;
        }

        var $sticky_header = $('#sticky-product-info-wapper'),
            $wc_tabs = $('div.product').find('.woocommerce-tabs'),
            sticky_height = $sticky_header.outerHeight(true),
            $product_summary = $('div.product').find('.fm-product-summary'),
            $entry_cat = $('div.product').find('.entry-summary').find('.cart'),
            topSection = 0;

        $sticky_header.find('.sc-tabs').on('click', 'a', function (e) {
            e.preventDefault();
            var target = $(this).data('tab');
            $(this).closest('.sc-tabs').find('a').removeClass('active');
            $(this).addClass('active');
            if ( farmart.$body.hasClass( 'mobile-version' ) ) {
				var $tab = $( '#tab-' + target );
				if ( $tab.length > 0 ) {
					topSection = $tab.offset().top - sticky_height - 60;
					$( 'html, body' ).stop().animate( {
							scrollTop: topSection
						},
						400
					);
				}
			} else {
				if ( $wc_tabs.length > 0 ) {
					$wc_tabs.find( '.' + target + '_tab a' ).trigger( 'click' );
					topSection = $wc_tabs.offset().top - sticky_height - 60;
					$( 'html, body' ).stop().animate( {
							scrollTop: topSection
						},
						400
					);
				}
			}
        });

        $wc_tabs.find('.wc-tabs').on('click', 'a', function (e) {
            e.preventDefault();
            var id = $(this).attr('href');
            id = id ? id.replace('#', '') : id;
            if (id) {
                $sticky_header.find('.sc-tabs').find('a').removeClass('active');
                $sticky_header.find('.sc-tabs .' + id).addClass('active');
            }
        });

        $sticky_header.find('.sc-product-cart').on('click', '.button', function (e) {
            e.preventDefault();
            if ($entry_cat.length > 0) {
                var topSection = $entry_cat.offset().top - sticky_height - 50;
                $('html, body').stop().animate({
                        scrollTop: topSection
                    },
                    400
                );
            }

        });
        var offSet = 150;
        if (farmart.$body.hasClass('mobile-version')) {
            farmart.$window.on('scroll', function () {
                $sticky_header.find('.sc-tabs li a').removeClass('active');
                $sticky_header.find('.sc-tabs li').each(function () {
                    var $el = $(this).find('a');
                    var currentTab = $el.attr('href');
                    if ($(currentTab).is(':in-viewport(' + offSet + ')')) {
                        $el.addClass('active');
                    }
                });

            });
        }

        if ($product_summary.length < 1) {
            return;
        }

        var top_sumary = 0;
        farmart.$window.on('scroll', function () {
            if (farmart.$body.hasClass('mobile-version')) {
                var hTopbar = $('#topbar').length > 0 ? $('#topbar').outerHeight(true) : 0,
                    hHeader = farmart.$header.outerHeight(true);
                top_sumary = hHeader + hTopbar;
            } else {
                top_sumary = $product_summary.offset().top - 300;
            }
            if (farmart.$window.scrollTop() > top_sumary) {
                $sticky_header.addClass('viewport');
            } else {
                $sticky_header.removeClass('viewport');
            }
        });

        // Top Offset
		var $wpAdminBar = $( '#wpadminbar' ),
            topOffSet = $sticky_header.data( 'top_offset' );

        if ($wpAdminBar.length && 'top' && 'fixed' === $wpAdminBar.css('position')) {
            topOffSet += $wpAdminBar.height();
        }

        $sticky_header.css({
            'top' : topOffSet
        });
    };

    // Products Carousel
    farmart.productsCarousel = function () {
        var $products = $( '.farmart-wc-products-carousel' );

        $products.each( function () {
            var $el = $( this ),
                $slider = $el.find( 'ul.products' ),
                dataSettings = $el.data( 'settings' );

            if ( ! dataSettings ) {
                return;
            }

            var options = {
                arrows   : true,
                dots     : false,
                prevArrow: farmart.$iconChevronLeft,
                nextArrow: farmart.$iconChevronRight,
            };

            var data = JSON.stringify( dataSettings );

            $slider.attr( 'data-slick', data );
            $slider.slick( options );
        } );
    };

    farmart.Tabs = function () {
        var $tabs = $('.farmart-tabs');

        $tabs.each(function () {
            var $el = $(this).find('.tabs-nav a'),
                $panels = $(this).find('.tabs-panel');

            $el.filter(':first').addClass('active');
            $(this).find('.tabs-nav').find('li').filter(':first').addClass('active');
            $panels.filter(':first').addClass('active');

            $el.on('click', function (e) {
                if ( $(this).hasClass('view-all') ) {
                    return;
                }

                e.preventDefault();

                var $tab = $(this),
                    index = $tab.parent().index();

                if ($tab.hasClass('active')) {
                    return;
                }

                $tabs.find('.tabs-nav a').removeClass('active');
                $tab.addClass('active');
                $panels.removeClass('active');
                $panels.filter(':eq(' + index + ')').addClass('active');
            });
        });
    };

    /**
     * Handle product reviews
     */
     farmart.reviewProduct = function () {
        setTimeout(function () {
            $('#respond p.stars a').prepend('<span class="farmart-svg-icon"><svg aria-hidden="true" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>');
        }, 100);
    };

    farmart.postFormatGallery = function () {
        var $selector = $('.format-gallery').find('ul.slides');

        var options = {
            prevArrow: farmart.$iconChevronLeft,
            nextArrow: farmart.$iconChevronRight,
        };
        $selector.not('.slick-initialized').slick(options);

    };

    farmart.postRelated = function () {
        var $selector = $('.farmart-post__related').find('.list-post');

        $selector.each(function () {
            var $el = $(this),
                options = {
                    prevArrow: farmart.$iconChevronLeft,
                    nextArrow: farmart.$iconChevronRight,
                };
            $el.slick(options);
        });
    };

    // Filter Ajax
    farmart.blogFilterAjax = function () {

        farmart.$body.find('#farmart-taxs-list').on('click', 'a', function (e) {
            e.preventDefault();
            $(this).addClass('selected');
            var url = $(this).attr('href');
            farmart.$body.trigger('farmart_blog_filter_ajax', url, $(this));
        });

        farmart.$body.on('farmart_blog_filter_ajax', function (e, url) {

            var $container = $('.farmart-post--wrapper'),
                $categories = $('#farmart-taxs-list');

            $container.addClass('show');
            $('.farmart-post-list__loading').addClass('show');

            if ('?' == url.slice(-1)) {
                url = url.slice(0, -1);
            }

            url = url.replace(/%2C/g, ',');

            history.pushState(null, null, url);

            if (farmart.ajaxXHR) {
                farmart.ajaxXHR.abort();
            }

            farmart.ajaxXHR = $.get(url, function (res) {
                setTimeout(function () {
                    $container.replaceWith($(res).find('.farmart-post--wrapper'));
                    $categories.html($(res).find('#farmart-taxs-list').html());
                    farmart.postFormatGallery();
                    $('.farmart-post-list__loading').removeClass('show');
                    $('.farmart-post--wrapper .blog-wrapper').addClass('animated farmartFadeInUp');
                    $container.removeClass('show');
                }, 800);

                farmart.$body.trigger('farmart_ajax_filter_request_success', [res, url]);

            }, 'html');
        });
    };

    farmart.blogLoadingAjax = function () {

        // Blog page
        farmart.$window.on('scroll', function () {
            if (farmart.$body.find('#farmart-posts-load-scroll').is(':in-viewport')) {
                farmart.$body.find('#farmart-posts-load-scroll').closest('a').click();
            }
        }).trigger('scroll');

        farmart.$body.on('click', '#farmart-blog-previous-ajax a', function (e) {
            e.preventDefault();

            if ($(this).data('requestRunning')) {
                return;
            }

            $(this).data('requestRunning', true);

            var $posts = $(this).closest('.site-main'),
                $postList = $posts.find('.farmart-post-list'),
                $pagination = $(this).parents('.load-navigation');

            $pagination.addClass('loading');

            $.get(
                $(this).attr('href'),
                function (response) {
                    var content = $(response).find('.farmart-post-list').children('.blog-wrapper'),
                        $pagination_html = $(response).find('.load-navigation').html();
                    $pagination.addClass('loading');

                    $pagination.html($pagination_html);
                    $postList.append(content);
                    farmart.postFormatGallery();
                    farmart.popupVideo();
                    $pagination.find('a').data('requestRunning', false);
                    content.addClass('animated farmartFadeInUp');
                    $pagination.removeClass('loading');

                    if ( $pagination.find('#farmart-blog-previous-ajax').length < 1 ) {
                        $pagination.remove();
                    }

                }
            );
        });

    };

    farmart.scrollTop = function () {
        var el = $('#scroll-top')
        farmart.$window.scroll(function () {
            if (farmart.$window.scrollTop() > farmart.$window.height()) {
                el.addClass('show');
            } else {
                el.removeClass('show');
            }
        });

        el.on('click', function (event) {
            event.preventDefault();
            $('html, body').stop().animate({
                    scrollTop: 0
                },
                800
            );
        });
    };

    // Toggle Tab content on mobile
    farmart.wooTabToggle = function () {

        if (typeof farmartData.product_collapse_tab === 'undefined') {
            return;
		}

        var $tab = $('.fm-woo-tabs .fm-Tabs-panel');

        $tab.each(function () {
            var $this = $(this),
                id = $this.attr('id'),
                $target = $('#' + id).find('.tab-title');

            if (farmartData.product_collapse_tab.status == 'close') {
                $target.siblings('.tab-content-wrapper').addClass('closed');
            } else {
                $target.addClass('active');
            }

            $target.on('click', function (e) {
                e.preventDefault();
                $(this).siblings('.tab-content-wrapper').toggleClass('opened');
                $(this).toggleClass('active');
            })
        });
    };

    farmart.catalogSorting = function () {
        if (farmart.$window.width() > 767) {
			return;
		}

        var $sortingMobile = $('#fm-catalog-sorting-mobile');

        $('#fm-catalog-toolbar').on('click', '.woocommerce-ordering', function (e) {
            e.preventDefault();
            $sortingMobile.addClass('fm-active');
        });

        $sortingMobile.on('click', 'a', function (e) {
			e.preventDefault();

            $sortingMobile.removeClass('fm-active');
            $sortingMobile.find('a').removeClass('active');
            $(this).addClass('active');
        });

    };

    farmart.goBackToPreviouslyPage = function() {
		var $seleclor = $( '.farmart-go-back' );

		$seleclor.each( function(){
			var $this = $( this );

			$this.on( 'click', 'a', function(e) {
				e.preventDefault();

				window.history.go(-1);
				$(window).on('popstate', function(e){
					window.location.reload(true);
				});
			});
		} );
	};

    /**
     * Document ready
     */
    $(function () {
        farmart.init();
    });

})(jQuery);