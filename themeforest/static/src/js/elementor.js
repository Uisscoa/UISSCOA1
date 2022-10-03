(function ($) {
	'use strict';

	var $iconChevronLeft = '<span class="slick-prev-arrow farmart-svg-icon"><svg viewBox="0 0 32 32"><path d="M22.4 32c0.205 0 0.409-0.078 0.566-0.234 0.312-0.312 0.312-0.819 0-1.131l-13.834-13.834 13.834-13.834c0.312-0.312 0.312-0.819 0-1.131s-0.819-0.312-1.131 0l-14.4 14.4c-0.312 0.312-0.312 0.819 0 1.131l14.4 14.4c0.156 0.156 0.361 0.234 0.566 0.234z"></path></svg></span>',
		$iconChevronRight = '<span class="slick-next-arrow farmart-svg-icon"><svg viewBox="0 0 32 32"><path d="M8 32c-0.205 0-0.409-0.078-0.566-0.234-0.312-0.312-0.312-0.819 0-1.131l13.834-13.834-13.834-13.834c-0.312-0.312-0.312-0.819 0-1.131s0.819-0.312 1.131 0l14.4 14.4c0.312 0.312 0.312 0.819 0 1.131l-14.4 14.4c-0.156 0.156-0.361 0.234-0.566 0.234z"></path></svg></span>';
    /*
    if(window.location.pathname == '/shop'){
    	console.log("AAAAAAvvvvvvvvvvvvvvvvvvvv")
    	$('body').addClass('archive post-type-archive post-type-archive-product wp-embed-responsive theme-farmart woocommerce-shop woocommerce woocommerce-page woocommerce-js header-v1 hfeed sidebar-content fm-preloader fm-show-qty woocommerce-active catalog-view-grid fm-catalog-page catalog-nav-numeric-short catalog-standard catalog-sidebar-content catalog-ajax-filter farmart-not-login elementor-default elementor-kit-13 dokan-theme-farmart')
    }*/
    $('.flex-control-nav').on('click',"img",function(e){
    	var transo_muti=$(this).parent().data('index')
    	var transorm=(-425-transo_muti) * $(this).parent().data('index')
    	if(transorm == 0){
    		transorm = 12
    	}
    	$('.woocommerce-product-gallery__wrapper').css('transition-duration', '0.5s')
    	$('.woocommerce-product-gallery__wrapper').css('transform','translate3d('+transorm+'px, 0px, 0px)')
    })

    //MagicZoom.start('Zoom-1');
    $(document).on("click",".increase",function(e) {
    	var old_qty=$(this).parent().find('.qty').val()
    	$(this).parent().find('.qty').val(parseInt(old_qty) + 1)
    })
    $(document).on("click",".decrease",function(e) {
    	var old_qty=$(this).parent().find('.qty').val()
    	if(old_qty > 1){
    		$(this).parent().find('.qty').val(parseInt(old_qty) - 1)
    	}
    })

    $('.cat-item').click(function (e) {
    	var ch = $(this).find('.children')
    	if(ch.length){
    		if($(this).hasClass('opened')){
    			$(this).removeClass('opened')
    			ch.css('display','none')
    		}else{
    			$(this).addClass('opened')
    			ch.css('display','block')
    		}
    	}
    })
	$('.slick-arrow').click(function (e) {
		if(! $('.second_slide').hasClass('slick-active')){
			var div_t='<div class="elementor-repeater-item-6273942 item-slider slick-slide slick-current slick-active second_slide" data-slick-index="1" aria-hidden="false" style="width: 816px; position: relative; left: -816px; top: 0px; z-index: 999; opacity: 1;" tabindex="0" role="tabpanel" id="slick-slide01" aria-describedby="slick-slide-control01"><div class="slick-slide-bg"></div><div class="slick-slide-inner"><div class="farmart-slide-content"><div class="farmart-slide-heading">Farmart<br class="hidden-xs">Food Takeaway</div><div class="farmart-slide-description">New arrivals with naturre fruits, juice<br class="hidden-xs">milks, essential for summer</div><a href="https://demo4.drfuri.com/farmart2/shop/" class="farmart-button farmart-slide-button" tabindex="0">Shop Now</a></div></div></div>'
			$('.second_slide').replaceWith(div_t)
			$('.slick-arrow').removeClass('slick-disabled')
			$(this).addClass('slick-disabled')
		}else{
			var div_t='<div class="elementor-repeater-item-6273942 item-slider slick-slide second_slide" data-slick-index="1" aria-hidden="true" style="width: 816px; position: relative; left: -816px; top: 0px; z-index: 998; opacity: 0;" tabindex="-1" role="tabpanel" id="slick-slide01" aria-describedby="slick-slide-control01"><div class="slick-slide-bg"></div><div class="slick-slide-inner"><div class="farmart-slide-content"><div class="farmart-slide-heading">Farmart<br class="hidden-xs">Food Takeaway</div><div class="farmart-slide-description">New arrivals with naturre fruits, juice<br class="hidden-xs">milks, essential for summer</div><a href="https://demo4.drfuri.com/farmart2/shop/" class="farmart-button farmart-slide-button" tabindex="-1">Shop Now</a></div></div></div>'
			$('.second_slide').replaceWith(div_t)
			$('.slick-arrow').removeClass('slick-disabled')
			$(this).addClass('slick-disabled')
		}
		/*$('.second_click').addClass('slick-current slick-active')
		$('.second_click').empty()
		$('.second_click').append()*/
	})

	var slideCarousel = function ($scope, $) {
		//$scope=$(document)
		$scope.find('.farmart-slides-wrapper').each(function () {
			var $selector = $(this).find('.farmart-slides'),
				elementSettings = $selector.data('slider_options'),
				$arrow_wrapper = $(this).find('.arrows-inner'),
				slidesToShow = parseInt(elementSettings.slidesToShow);

			$selector.not('.slick-initialized').slick({
				rtl: $('body').hasClass('rtl'),
				slidesToShow: slidesToShow,
				arrows: elementSettings.arrows,
				appendArrows: $arrow_wrapper,
				dots: elementSettings.dots,
				infinite: elementSettings.infinite,
				prevArrow: $iconChevronLeft,
				nextArrow: $iconChevronRight,
				autoplay: elementSettings.autoplay,
				autoplaySpeed: parseInt(elementSettings.autoplaySpeed),
				speed: parseInt(elementSettings.speed),
				fade: elementSettings.fade,
				cssEase: elementSettings.fade ? 'linear' : '',
				pauseOnHover: elementSettings.pauseOnHover,
				responsive: []
			});

			var animation = $selector.data('animation');
			if (animation) {
				$selector
					.on('beforeChange', function () {
						var $sliderContent = $selector.find('.farmart-slide-content'),
							$sliderPriceBox = $selector.find('.farmart-slide-price-box');

						$sliderContent.removeClass('animated' + ' ' + animation).fadeTo(100, 0);

					})
					.on('afterChange', function (event, slick, currentSlide) {
						 $(slick.$slides.get(currentSlide)).find('.farmart-slide-content').fadeTo(0, 1).addClass('animated' + ' ' + animation);
					});
			}
		});


	};

	slideCarousel($(document),jQuery);
	var blogCarousel = function ($scope, $) {

		$scope.find('.farmart-blog-shortcode').each(function () {
			var $el = $(this),
				options = {
					prevArrow: $iconChevronLeft,
					nextArrow: $iconChevronRight
				};

			$el.find('.list-post').not('.slick-initialized').slick(options);
		});

		$scope.find('.format-gallery').each(function () {
			var $selector = $(this).find('ul.slides'),
				options = {
					prevArrow: $iconChevronLeft,
					nextArrow: $iconChevronRight
				};

			$selector.not('.slick-initialized').slick(options);
		});
	};

	var svboxCarousel = function ($scope, $) {

		$scope.find('.farmart-service-box').each(function () {
			var $el = $(this),
				options = {
					prevArrow: $iconChevronLeft,
					nextArrow: $iconChevronRight
				};
			$el.find('.farmart-service-box__wrapper').not('.slick-initialized').slick(options);
		});
	};

	var testiCarousel = function ($scope, $) {

		$scope.find('.farmart-testimonial').each(function () {
			var $el = $(this),
				dataSlick = $el.data('show'),
				$posts = $el.find('.farmart-testimonial__list').children().length,
				options = {
					prevArrow: $el.find('.slick-prev-arrow'),
					nextArrow: $el.find('.slick-next-arrow'),
					appendDots: $el.find('.box-dots'),
				};

			if ($posts >= dataSlick) {
				$el.find('.farmart-testimonial__list').not('.slick-initialized').slick(options);

				$(window).on('resize', function () {
					var width = $el.find('.slick-list').width(),
						wWidth = $('#content').width();

					if (wWidth > 1170) {
						$el.find('.slick-slider').css('margin-right', (wWidth - width + 30) * -0.5);
						$el.find('.slick-slider').css('margin-left', (wWidth - width + 30) * -0.5);
						$el.find('.slick-list').css('padding-right', (wWidth - width) * 0.5);
						$el.find('.slick-list').css('padding-left', (wWidth - width) * 0.5);
					} else {
						$el.find('.slick-slider').removeAttr('style');
						$el.find('.slick-list').removeAttr('style');
					}
				}).trigger('resize');
			} else {
				$el.addClass('view-grid');
			}
		});
	};

	var testi2Carousel = function ($scope, $) {

		$scope.find('.farmart-testimonial-2, .farmart-testimonial-3').each(function () {
			var $el = $(this),
				dataSlick = $el.data('show'),
				$posts = $el.find('.farmart-testimonial-2__list, .farmart-testimonial-3__list').children().length,
				options = {
					prevArrow: $iconChevronLeft,
					nextArrow: $iconChevronRight
				};

			if ($posts >= dataSlick) {

				$el.find('.farmart-testimonial-2__list, .farmart-testimonial-3__list').not('.slick-initialized').slick(options);
			} else {
				$el.addClass('view-grid');
			}
		});
	};

	var testibannerCarousel = function ($scope, $) {

		$scope.find('.farmart-testimonial-banner').each(function () {
			var $el = $(this),
				dataSlick = $el.data('show'),
				$posts = $el.find('.farmart-testimonial-banner__list').children().length,
				options = {
					prevArrow: $el.find('.slick-prev-arrow'),
					nextArrow: $el.find('.slick-next-arrow'),
				};

			if ($posts >= dataSlick) {
				$el.find('.farmart-testimonial-banner__list').not('.slick-initialized').slick(options);
			} else {
				$el.addClass('view-grid');
			}
		});
	};

	var teamCarousel = function ($scope, $) {

		$scope.find('.farmart-team-carousel').each(function () {
			var $el = $(this),
				options = {
					prevArrow: $iconChevronLeft,
					nextArrow: $iconChevronRight
				};

			$el.find('.farmart-team-carousel--wrapper').not('.slick-initialized').slick(options);
		});
	};

	var counterHandler = function ($scope, $) {
		$scope.find('.farmart-counter').each(function () {
			var $selector = $(this);
			$selector.find('.value').counterUp({
				delay: 20,
				time: 800
			});

		});
	};

	/**
	 * Tab
	 * @param $scope
	 * @param $
	 */
	var tab = function ($scope, $) {
		$scope.find('.farmart-tab-list').each(function () {
			var $selector = $(this);

			tabHanler($selector);
		})
	};

	/**
	 * Faq
	 * @param $scope
	 * @param $
	 */
	var faq = function ($scope, $) {
		$scope.find('.farmart-faq').each(function () {
			var $selector = $(this),
				els = $selector.find('.box-content');

			els.not(':first-child').find('.desc').slideUp();
			els.first().addClass('active');

			els.click(function () {
				var item = $(this),
					siblings = item.siblings(item);

				if (els.hasClass('.active')) {
					return;
				}

				siblings.removeClass('active');
				item.addClass('active');
				siblings.find('.desc').slideUp();
				item.find('.desc').slideDown();

			});

		})
	};

	function tabHanler(selector) {
		var tabMnu = selector.find('.box-nav'),
			tabContent = selector.find('.box-content');

		tabMnu.first().addClass('active');
		tabContent.first().addClass('active');

		tabMnu.each(function (i) {
			$(this).attr('data-tab', 'tab' + i);
		});
		tabContent.each(function (i) {
			$(this).attr('data-tab', 'tab' + i);
		});

		tabMnu.click(function () {
			var item = $(this),
				siblings = item.siblings(item),
				tabData = item.data('tab'),
				contentFilter = tabContent.filter('[data-tab=' + tabData + ']');

			if (tabMnu.hasClass('.active')) {
				return;
			}

			siblings.removeClass('active');
			item.addClass('active');
			tabMnu.find(tabContent).removeClass('active');
			contentFilter.addClass('active');

		});
	}

	var imageCarousel = function ($scope, $) {

		$scope.find('.farmart-image-carousel,.fm-banner-carousel').each(function () {
			var $el = $(this),
				options = {
					prevArrow: $iconChevronLeft,
					nextArrow: $iconChevronRight
				};

			$el.find('.content-image').not('.slick-initialized').slick(options);
		});
	};

	var catCarousel = function ($scope, $) {

		$scope.find('.farmart-product-categories-carousel,.fm-product-categories-carousel-2').each(function () {
			var $el = $(this),
				options = {
					prevArrow: $iconChevronLeft,
					nextArrow: $iconChevronRight
				};

			$el.find('.product-cats').not('.slick-initialized').slick(options);
		});
	};

	var mutilcatCarousel = function ($scope, $) {

		$scope.find('.farmart-product-mutil-categories-carousel').each(function () {
			var $el = $(this),
				options = {
					prevArrow: $iconChevronLeft,
					nextArrow: $iconChevronRight
				};

			$el.find('.categories-box').not('.slick-initialized').slick(options);

			elsVisiblyLoading($el);
		});
	};

	var effectBannerMedium = function ($scope, $) {

		$scope.find('.farmart-banner-medium').each(function () {
			var $el = $(this);

			elsVisiblyLoading($el);
		});
	};

	function elsVisiblyLoading(selector) {

		$(window).scroll(function () {
			if (selector.hasClass('visible')) {
				return;
			}

			if (!selector.hasClass('has-effect')) {
				return;
			}

			var top_of_el = selector.offset().top,
				bottom_of_el = selector.offset().top + selector.outerHeight(),
				bottom_of_scr = $(window).scrollTop() + $(window).innerHeight(),
				top_of_scr = $(window).scrollTop();

			if ((bottom_of_scr > top_of_el) && (top_of_scr < bottom_of_el)) {
				selector.addClass('visible-effect visible');

				setTimeout(function () {
					selector.addClass('show');
				}, 500);

			}
		}).trigger('load');

	}

	// Product carousel
	function getProductCarousel($els, extendOptions = {}) {
		var $selector = $els,
			$slider = $selector.find('ul.products,ul.product-list'),
			dataSettings = $selector.data('settings');

		var data = JSON.stringify(dataSettings);

		var options = {
			prevArrow: $iconChevronLeft,
			nextArrow: $iconChevronRight
		};

		if($selector.data('type') == 'grid') {
			return;
		}

		$.extend(true, options, extendOptions);

		$slider.attr('data-slick', data);

		$slider.not('.slick-initialized').slick(options);

	};

	var productsCarousel = function ($scope, $) {
		$scope.find('.fm-elementor-product-carousel').each(function () {
			var $el = $(this);

			getProductCarousel($el);

			elsVisiblyLoading($el);

		});
	};

	/**
	 * Get Product AJAX
	 */
	function getProductsAJAXHandler($el, $tabs) {

		var tab = $el.data('href'),
			$content = $tabs.find('.tabs-' + tab);

		if ($content.hasClass('tab-loaded')) {
			return;
		}

		var data = {},
			elementSettings = $content.data('settings'),
			ajax_url = farmartData.ajax_url.toString().replace('%%endpoint%%', 'fm_elementor_load_products');

		if (ajax_url == '') {
			return;
		}

		$.each(elementSettings, function (key, value) {
			data[key] = value;
		});

		$.post(
			ajax_url,
			data,
			function (response) {
				if (!response) {
					return;
				}

				$content.html(response.data);

				var $selector = $content.closest('.fm-elementor-product-carousel'),
					option = {};

				if ( $selector.hasClass( 'fm-product-tab-carousel-2' ) ) {
					$content.append('<div class="slick-dots-wrapper"></div>');
					var $dotWrapper = $content.find('.slick-dots-wrapper');

					if ( typeof $dotWrapper !== 'undefined' ) {
						option.appendDots = $dotWrapper;
					}
				}

				getProductCarousel($selector, option);

				$content.addClass('tab-loaded');
				addToCartAjax();
			}
		);
	};

	/**
	 * Get Product Deals AJAX
	 */
	function getProductsDealsAJAXHandler($el, $tabs) {

		var tab = $el.data('key'),
			$content = $tabs.find('.' + tab);

		if ($content.hasClass('tab-loaded')) {
			return;
		}

		var dataSettings = $content.data('settings'),
			data = {
				product_deal: dataSettings,
				text: dataSettings.load_more_text,
				product_type: dataSettings.product_type,
				pagination: dataSettings.pagination,
				page: dataSettings.page,
			},
			ajax_url = farmartData.ajax_url.toString().replace('%%endpoint%%', 'fm_elementor_load_products_deals');

		$.post(
			ajax_url,
			data,
			function (response) {
				if (!response) {
					return;
				}

				$content.html(response.data).fadeIn();

				$content.addClass('tab-loaded');
				addToCartAjax();

			}
		);
	};

	/**
	 * Load Products Deals AJAX
	 */
	var loadProductsDeals = function ($scope, $) {
		$scope.find('.fm-product-deals-grid .tabs-panel').each(function () {
			var $this = $(this);

			// Load products
			$this.on('click', 'a.ajax-load-products', function (e) {
				e.preventDefault();

				var $el = $(this);

				if ($el.hasClass('loading')) {
					return;
				}

				$el.addClass('loading');

				var data = {
						page: $el.data('page'),
						product_deal: $el.data('settings'),
						product_type: $el.data('product_type'),
						pagination: $el.data('load_more'),
						text: $el.data('text'),
						nonce: $el.data('nonce')
					},
					ajax_url = farmartData.ajax_url.toString().replace('%%endpoint%%', 'fm_elementor_load_products_deals');

				$.post(
					ajax_url,
					data,
					function (response) {
						if (!response) {
							return;
						}

						var $data = $(response.data),
							$products = $data.find('ul.products > li'),
							$button = $data.find('.ajax-load-products'),
							$container = $el.closest('.tabs-panel'),
							$grid = $container.find('ul.products');

						// If has products
						if ($products.length) {
							// Add classes before append products to grid
							$products.addClass('product');

							for (var index = 0; index < $products.length; index++) {
								$($products[index]).css('animation-delay', index * 100 + 100 + 'ms');
							}
							$products.addClass('farmartFadeInUp');
							$grid.append($products);

							if ($button.length) {
								$el.replaceWith($button);
							} else {
								$el.slideUp();
								$el.closest('.load-more').addClass('loaded');
							}
							addToCartAjax();
						}
					}
				);
			});
		});
	};

	function addToCartAjax() {
		var found = false;
		$(document.body).find('form.cart').on('click', '.single_add_to_cart_button', function (e) {
			var $el = $(this),
				$cartForm = $el.closest('form.cart');

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

					found = false;

				}
			});

		});

	}

	var productTabsActive = function ($selector) {
		var $el     = $selector.find( '.tabs-nav a' ),
			$panels = $selector.find( '.tabs-panel' );

			$el.filter( ':first' ).addClass( 'active' );
			$panels.filter( ':first' ).addClass( 'active' );

		$selector.find('.tabs-nav').on('click', 'a', function (e) {
			if ( $(this).hasClass('view-all') ) {
				return;
			}

			e.preventDefault();
			var $this = $(this),
				currentTab = $this.data('href');

			if ($this.hasClass('active')) {
				return;
			}

			$selector.find('.tabs-nav a').removeClass('active');
			$this.addClass('active');
			$selector.find('.tabs-panel').removeClass('active');
			$selector.find('.tabs-' + currentTab).addClass('active');

			$selector.find('.slick-slider').slick('setPosition');
		});
	};

	function getTabs($selector) {

		$selector.each(function () {
			var $el = $(this),
				$btn = $el.find('.tabs-nav li > a'),
				$panels = $el.find('.tabs-panel'),
				parentBtnAll = $el.find('.tabs-nav li');

			$btn.filter(':first').addClass('active');
			parentBtnAll.filter(':first').addClass('active');
			$panels.filter(':first').addClass('active');

			$btn.on('click', function (e) {
				e.preventDefault();

				var $tab = $(this),
					tabPrivate = $tab.data('key'),
					parentAc = $tab.parent(),
					contentFilter = $panels.filter('.' + tabPrivate + ' ');

				parentBtnAll.removeClass('active');
				parentAc.addClass('active');
				$panels.removeClass('active');
				contentFilter.addClass('active');
			});
		});
	};

	/**
	 * Product Tabs
	 */
	var productTabslHandler = function ($scope, $) {
		var tab = $scope.find('.fm-product-deals-grid');

		tab.each(function () {
			var $this = $(this);

			$this.find('.tabs-nav').on('click', 'a', function (e) {
				e.preventDefault();

				getProductsDealsAJAXHandler($(this), $this);

			});

			getTabs($this);
		});
	};

	function loadAjaxRecently($selector) {


		var $recently = $selector.find('.recently-has-products'),
			elementSettings = $selector.data('number');

		var data = {
				numbers: elementSettings.numbers,
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

	var recentlyViewedProducts = function ($scope, $) {
		$scope.find('.fm-header-recently-viewed').each(function () {
			var $el = $(this),
				body = $(document.body),
				found = true;

			$el.hover( function () {
				if (found) {
					loadAjaxRecently($el);
					found = false;
				}

			});
		});

		$scope.find('.fm-content-recently-viewed').each(function () {
			var $el = $(this);

			$(this).addClass('loaded');
			loadAjaxRecently($el);
		});

		$scope.find('.fm-footer-recently-viewed').each(function () {
			var $el = $(this),
				found = true,
				$content = $el.find('.recently-viewed-inner'),
				$layer = $el.find('.overlay');

			$el.find('.recently-title').on('click', function (e) {
				e.preventDefault();

				$layer.toggleClass('opened');
				if (found) {
					loadAjaxRecently($el);
					found = false;
				}
				$content.slideToggle(400);

				$(this).toggleClass('active');
			});

			$layer.on('click', function () {
				$(this).removeClass('opened');
				$content.slideUp(400);
				$el.find('.recently-title').removeClass('active');
			});
		});

	};

	var effectMenu = function ( $scope, $ ) {

		$scope.find( '.fm-main-menu--has-effect' ).each( function () {
			var $el, leftPos, childWidth, newWidth, $origWidth, itemWidth, newItemWidth, childWidths,
				$mainNav = $(this).find('.fm-nav-menu');

			$mainNav.find('li:first-child').addClass('first-child');
			$mainNav.append('<li id="fm-active-menu" class="fm-active-menu"></li>');
			var $magicLine = $('.fm-active-menu'),
				space;

			$origWidth = 0;

			if ($mainNav.children('li.current-menu-item, li.current-menu-ancestor, li.current-menu-parent').length > 0) {

				itemWidth = $mainNav.children('li.current-menu-item, li.current-menu-ancestor, li.current-menu-parent').outerWidth();

				childWidths = $mainNav.children('li.current-menu-item, li.current-menu-ancestor, li.current-menu-parent').width();

				childWidth = $mainNav.children('li.current-menu-item, li.current-menu-ancestor, li.current-menu-parent').children('a').width();

				space = (itemWidth - childWidths) / 2;

				$magicLine
					.width(childWidth)
					.css('left', $mainNav.children('li.current-menu-item, li.current-menu-ancestor, li.current-menu-parent').position().left + space)
					.data('origLeft', $magicLine.position().left)
					.data('origWidth', $magicLine.width());

				$origWidth = $magicLine.data('origWidth');
			}

			$mainNav.children('li').hover(function () {
				$el = $(this);

				newItemWidth = $el.outerWidth(true);

				newWidth = $el.children('a').width();

				space = (newItemWidth - newWidth) / 2;

				if ($el.hasClass('first-child')){
					space = 0;
				}

				leftPos = $el.position().left + space;
				$magicLine.stop().animate({
					left: leftPos,
					width: newWidth
				});

			}, function () {
				$magicLine.stop().animate({
					left: $magicLine.data('origLeft'),
					width: $origWidth
				});
			});
		} );
	};

	var megaMenu = function ($scope, $) {
		if ($scope.find('.farmart-main-menu').hasClass('fm-main-menu--has-effect')) {
			return;
		}

		$scope.find('.farmart-main-menu .fm-nav-menu > li.dropdown').each(function () {

			var megaMenu = $(this),
				body = $(document.body),
				wsubWidth = megaMenu.children('.dropdown-submenu').width(),
				parentWidth = $(this).closest('.elementor-widget-farmart-main-menu').width(),
				parentparentWidth = $(this).closest('.elementor-widget-farmart-main-menu').parent().width(),
				wWidth = megaMenu.outerWidth(),
				offsetLeft = megaMenu.position().left + (wWidth / 2),
				offsetRight = (parentWidth - megaMenu.position().left) + (wWidth / 2),
				left = offsetLeft - (wsubWidth / 2),
				right = offsetRight - (wsubWidth / 2),

				check = parentparentWidth - parentWidth;

			if (right < 0 && check < wsubWidth / 2) {
				megaMenu.addClass('align-right');
			} else if (left < 0) {
				megaMenu.addClass('align-left');
			} else if (offsetLeft + wWidth > parentWidth / 2 && (wsubWidth / 2) > (parentparentWidth - wsubWidth) / 2) {
				megaMenu.addClass('align-center');
			} else {
				megaMenu.addClass('align-inherit');
			}

			// if (megaMenu.hasClass('is-mega-menu')) {
				 megaMenu.on('hover', function () {
					body.find('.overlay-mega-menu-viewed').toggleClass('active');
					body.toggleClass('overlay-mega-menu-viewed--active');
				});
			// }
		});

	};

	var menuClick = function ($scope, $) {
		$scope.find('.farmart-menu-department.menu-click').each(function () {

			var el = $(this),
				found = true;

			el.on('click', function () {
				$(this).toggleClass('active');
				if (found) {
					$(this).append('<div class="overlay-department-menu"></div>');
					found = false;
				}
				$(this).find('.overlay-department-menu').toggleClass('active');
			});

			var $layer = $(this).find('.overlay-department-menu');

			$layer.on('click', function () {
				$(this).removeClass('active');
				el.removeClass('active');
			});

		});

	};

	var menuDepartmentHover = function ($scope, $) {
		$scope.find('.farmart-menu-department.menu-hover').each(function () {

			var $el = $(this),
				body = $(document.body);

			$el.on('hover', function () {
				body.find('.overlay-mega-menu-viewed').toggleClass('active');
				body.toggleClass('overlay-mega-menu-viewed--active');
			});

		});

	};

	/**
	 * CountDown
	 */
	var countDownHandler = function ($scope, $) {
		$scope.find('.farmart-countdown').mf_countdown();
	};

	var verticalTab = function () {
		if ( $(window).width() < 1200 ) {
			return;
		}

		var defaults = {
			selector: $( '.fm-product-with-category' ),
			offSet  : 30,
			tab     : $('#fm-vertical-tab')
		};

		var $selector = defaults.selector,
			list = [];

		$selector.each( function() {
			var $this = $(this),
				$item = $this.siblings('.vertical-tab-content').html();

			if ( typeof $item !== 'undefined' ) {
				list.push($item);
			}
		});

		var $tab = defaults.tab,
			$ul = $tab.append('<ul></ul>').find('ul');

		$.each( list, function( index, value ){
			$ul.append('<li>' + value + '</li>');
		});

		var offSet = defaults.offSet,
			$wpAdminBar = $( '#wpadminbar' ),
			adminBarHeight = 0;

		if ($wpAdminBar.length && 'fixed' === $wpAdminBar.css('position')) {
			adminBarHeight = $wpAdminBar.height();
			offSet += adminBarHeight;
		}

		// Scroll to target
		$ul.on( 'click', 'a', function(e){
			e.preventDefault();

			var target = $(this.hash);

			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - offSet + 1
				}, 800);
				return false;
			}
		});

		// Tab fixed
		var total = $selector.length,
			top,
			bottom;

		$(window).on('scroll', function () {
			$selector.each(function ( index, value ) {
				var $el = $(this),
					id = $el.attr('id'),
					elHeight = $el.outerHeight(true),
					verticalOffset = $el.offset().top,
					horizontalOffset = $el.offset().left;

				var elTop = verticalOffset - offSet,
					elBottom = verticalOffset + elHeight - adminBarHeight;

				if ( index === 0 ) {
					top = elTop;
				}

				if ( index === total - 1 ) {
					bottom = elBottom;
				}

				if ( $(window).scrollTop() < elTop || $(window).scrollTop() > elBottom ) {
					$tab.find('.' + id).removeClass('active');
				} else {
					$tab.find('.' + id).addClass('active');
				}

				$tab.css({
					'left' : horizontalOffset > 65 ? horizontalOffset - 65 : 0
				});
			});

			// Toggle Vertical Tab
			if ( $(window).scrollTop() < top || $(window).scrollTop() > bottom ) {
				$tab.fadeOut();
			} else {
				$tab.fadeIn();
			}

		}).trigger('scroll');
	};

	var dealCarousel2 = function ($scope, $) {

		var $els = $scope.find('ul.products li.product'),
			$countdown = $scope.find('.header-countdown').html();

		$els.each(function () {
			$(this).find('.product-thumbnail').append($countdown);
			$(this).find('.farmart-countdown').mf_countdown();
		});

		$scope.find('.fm-elementor-product-deals-carousel-3').each(function () {
			var $selector = $(this),
				$slider = $selector.find('ul.products'),
				$nav = $selector.find('.box-nav'),
				dataSettings = $selector.data('settings');

			var data = JSON.stringify(dataSettings);

			var options = {
				prevArrow: $nav.find('.prev-arrow'),
				nextArrow: $nav.find('.next-arrow')
			};

			$slider.attr('data-slick', data);
			$slider.not('.slick-initialized').slick(options);

			elsVisiblyLoading($selector);

		});
	};

	var searchIconTogglePanel = function ($scope, $) {
		$scope.find('.fm-search-icon').each(function () {
			var $selector = $(this);

			$selector.on('click', 'a', function (e) {
				e.preventDefault();

				var $this = $(this);
				$this.siblings('.box-search-wrapper').fadeIn( function () {
					$( this ).addClass('open')
				} );
			});

			$selector.on('click', '.close-top-search-results', function (e) {
				e.preventDefault();

				var $this = $(this);
				$this.closest('.box-search-wrapper').fadeOut( function () {
					$( this ).removeClass('open')
				} );
			});
		});
	};

	var tabFaqs = function ($scope, $) {
		$scope.find('.farmart-faqs').each(function () {
			var $selector = $(this);

			getTabs($selector)
		});

	};

	 var brandsCarousel = function ($scope, $) {

		$scope.find('.farmart-brands-carousel').each(function () {
			var $el = $(this),
				options = {
					prevArrow: $iconChevronLeft,
					nextArrow: $iconChevronRight
				};

			$el.find('.list-brands').not('.slick-initialized').slick(options);
		});
	};

	/**
	 *    Load Brands
	 */
	var loadBrands = function ($scope, $) {
		$scope.find('.fm-products-brands').each(function () {
			var $this = $(this),
				 text = $this.data('text');

			$this.find('.load-more a').html('<span class="button-text">' + text + '</span>' + '<span class="farmart-loading"></span><span class="farmart-svg-icon "><svg aria-hidden="true" role="img" focusable="false" viewBox="0 0 32 32"><path d="M0 9.6c0-0.205 0.078-0.409 0.234-0.566 0.312-0.312 0.819-0.312 1.131 0l13.834 13.834 13.834-13.834c0.312-0.312 0.819-0.312 1.131 0s0.312 0.819 0 1.131l-14.4 14.4c-0.312 0.312-0.819 0.312-1.131 0l-14.4-14.4c-0.156-0.156-0.234-0.361-0.234-0.566z"></path></svg></span>');

			$this.on('click', '.load-more a', function (e) {
				e.preventDefault();

				var $el = $(this),
					elementId = $el.closest('.elementor-element').data('id');

				if ($el.data('requestRunning')) {
					return;
				}

				$el.data('requestRunning', true);

				var $pagination = $el.closest('.load-more'),
					$products = $pagination.prev('.product-brands');

				$el.addClass('loading');

				$.get(
					$el.attr('href'),
					function (response) {
						var $wrapper = $(response).find('.elementor-element[data-id="' + elementId.toString() + '"]'),
							content = $wrapper.find('.product-brands').children('.brand-item-wrapper'),
							$pagination_html = $wrapper.find('.load-more').html();

						$pagination.html($pagination_html);

						for (var index = 0; index < content.length; index++) {
							$(content[index]).css({
								'animation-delay': index * 100 + 100 + 'ms'
							});
						}

						content.addClass('farmartFadeInUp');

						$products.append(content);

						$pagination.find('a')
							.data('requestRunning', false)
							.html('<span class="button-text">' + text + '</span>' + '<span class="farmart-loading"></span><span class="farmart-svg-icon "><svg aria-hidden="true" role="img" focusable="false" viewBox="0 0 32 32"><path d="M0 9.6c0-0.205 0.078-0.409 0.234-0.566 0.312-0.312 0.819-0.312 1.131 0l13.834 13.834 13.834-13.834c0.312-0.312 0.819-0.312 1.131 0s0.312 0.819 0 1.131l-14.4 14.4c-0.312 0.312-0.819 0.312-1.131 0l-14.4-14.4c-0.156-0.156-0.234-0.361-0.234-0.566z"></path></svg></span>');

						$el.removeClass('loading');

						if (!$pagination_html) {
							$pagination.addClass('loaded');
						}
					}
				);
			});
		});
	};

	var bannerVideo = function ($scope, $) {

		$scope.find('.fm-banner-video').each(function () {
			$(this).find('.banner-icon a').magnificPopup({
				type: 'iframe',
				mainClass: 'mfp-fade',
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
		});
	};

	var trendingSearchCarousel = function ($scope, $) {
		$scope.find('.farmart-elementor-trending-search-carousel').each(function () {
			var $selector = $(this),
				options = {
					prevArrow: $iconChevronLeft,
					nextArrow: $iconChevronRight
				};

			if ( $selector.hasClass('fm-trending-search-carousel') ) {
				options.appendArrows = $selector.find('.slick-arrows-wrapper');
			}

			$selector.find('.collection-list').not('.slick-initialized').slick(options);
		});
	};

	var collapseEffect = function($scope, $) {
		var $seleclor = $scope.find( '.farmart-list-links' ),
			data = $seleclor.data( 'effect' );

		if ( typeof data === 'undefined' || data.collapse_effect !== 'yes' ) {
			return;
		}

		var currentDeviceMode = elementorFrontend.getCurrentDeviceMode(),
			activeDevices = data.collapse_effect_on,
			status = data.content_status;

		if (-1 !== activeDevices.indexOf(currentDeviceMode)) {
			active($seleclor);
		} else {
			deactive($seleclor);
		}

		function active( $seleclor ) {
			$seleclor.find( '.title' ).css({
				'cursor' : 'pointer'
			});

			if ( status !== 'yes' ) {
				$seleclor.find( '.inner-content' ).hide();
			} else {
				$seleclor.find( '.title' ).addClass( 'open' );
				$seleclor.find( '.inner-content' ).addClass( 'open' );
			}

			$seleclor.on( 'click', '.title', function(e){
				e.preventDefault();

				var $this = $(this);

				$this.toggleClass( 'open' );
				$this.siblings( '.inner-content' ).slideToggle().toggleClass( 'open' );
			} );
		}

		function deactive( $seleclor ) {
			$seleclor.find( '.title .fm-icon' ).html('');
		}
	}

	/**
	 * Ajax Handle
	 */
	var productsCarouselAjaxHandle = function ($scope, $) {
		var $selector = $scope.find('.fm-products-carousel'),
			extendOptions = {};



		extendOptions.appendDots = $selector.find('.slick-dots-wrapper');

		if (!$selector.hasClass('no-infinite')) {
			productCarouselInfinite($selector);
		} else {
			getProductCarousel($selector,extendOptions);
		}

		function productCarouselInfinite($selector) {

			$(window).on('scroll', function () {

				if ($selector.hasClass('no-infinite')) {
					return;
				}

				var offSet = 0;

				if ($selector.is(':in-viewport(' + offSet + ')')) {
					getProductCarouselAjax($selector);
					$selector.addClass('no-infinite');
				}

			}).trigger('scroll');
		}

		function getProductCarouselAjax($selector) {

			if (typeof fm_elementor_data === 'undefined') {
				return;
			}

			var dataSettings = $selector.find('.fm-product-carousel-loading').data('settings'),
				ajax_url = fm_elementor_data.ajax_url.toString().replace('%%endpoint%%', 'fm_elementor_get_elements');

			$.ajax({
				url: ajax_url,
				dataType: 'json',
				method: 'post',
				data: {
					params: JSON.stringify(dataSettings),
					element: 'productsCarousel'
				},
				success: function (response) {
					var $selector = $scope.find('.fm-products-carousel'),
						options = {};

					$selector.html(response.data);

					options.appendDots = $selector.find('.slick-dots-wrapper');
					getProductCarousel($selector,options);

					$(document.body).trigger('farmart_get_products_ajax_success');
				}
			});
		}
	};

	var productsCarousel2AjaxHandle = function ($scope, $) {
		var $selector = $scope.find('.fm-products-carousel-2');



		if (!$selector.hasClass('no-infinite')) {
			productCarouselInfinite($selector);
		} else {
			getProductCarousel($selector);
		}

		function productCarouselInfinite($selector) {

			$(window).on('scroll', function () {

				if ($selector.hasClass('no-infinite')) {
					return;
				}

				var offSet = 0;

				if ($selector.is(':in-viewport(' + offSet + ')')) {
					getProductCarouselAjax($selector);
					$selector.addClass('no-infinite');
				}

			}).trigger('scroll');
		}

		function getProductCarouselAjax($selector) {

			if (typeof fm_elementor_data === 'undefined') {
				return;
			}

			var dataSettings = $selector.find('.fm-product-carousel-2-loading').data('settings'),
				ajax_url = fm_elementor_data.ajax_url.toString().replace('%%endpoint%%', 'fm_elementor_get_elements');

			$.ajax({
				url: ajax_url,
				dataType: 'json',
				method: 'post',
				data: {
					params: JSON.stringify(dataSettings),
					element: 'productsCarousel'
				},
				success: function (response) {
					$selector.html(response.data);
					getProductCarousel($selector);
					$(document.body).trigger('farmart_get_products_ajax_success');
				}
			});
		}
	};

	var productsListCarouselAjaxHandle = function ($scope, $) {
		var $selector = $scope.find('.fm-products-list-carousel'),
			extendOptions = {};

		extendOptions.appendArrows = $selector.find('.slick-arrows-wrapper');

		if (!$selector.hasClass('no-infinite')) {
			productCarouselInfinite($selector);
		} else {
			getProductCarousel($selector,extendOptions);
		}

		function productCarouselInfinite($selector) {

			$(window).on('scroll', function () {

				if ($selector.hasClass('no-infinite')) {
					return;
				}

				var offSet = 0;

				if ($selector.is(':in-viewport(' + offSet + ')')) {
					getProductCarouselAjax($selector);
					$selector.addClass('no-infinite');
				}

			}).trigger('scroll');
		}

		function getProductCarouselAjax($selector) {

			if (typeof fm_elementor_data === 'undefined') {
				return;
			}

			var dataSettings = $selector.find('.fm-products-list-carousel-loading').data('settings'),
				ajax_url = fm_elementor_data.ajax_url.toString().replace('%%endpoint%%', 'fm_elementor_get_elements');

			$.ajax({
				url: ajax_url,
				dataType: 'json',
				method: 'post',
				data: {
					params: JSON.stringify(dataSettings),
					element: 'productsListCarousel'
				},
				success: function (response) {
					var $selector = $scope.find('.fm-products-list-carousel'),
						options = {};

					$selector.html(response.data);
					options.appendArrows = $selector.find('.slick-arrows-wrapper');
					getProductCarousel($selector,options);

					$(document.body).trigger('farmart_get_products_ajax_success');
				}
			});
		}
	};

	var productsTabCarouselAjaxHandle = function ($scope, $) {
		var $selector = $scope.find('.fm-product-tab-carousel');

		if (!$selector.hasClass('no-infinite')) {
			productCarouselInfinite($selector);
		} else {
			getProductCarousel($selector);
			productTabsActive($selector);
			$selector.find('.tabs-nav').on('click', 'a.tab-item', function (e) {
				getProductsAJAXHandler($(this), $selector);
			});
		}

		function productCarouselInfinite($selector) {

			$(window).on('scroll', function () {

				if ($selector.hasClass('no-infinite')) {
					return;
				}

				var offSet = 0;

				if ($selector.is(':in-viewport(' + offSet + ')')) {
					getProductAjax($selector);
					$selector.addClass('no-infinite');
				}

			}).trigger('scroll');
		}

		function getProductAjax($selector) {

			if (typeof fm_elementor_data === 'undefined') {
				return;
			}

			var dataSettings = $selector.find('.fm-product-tab-carousel-loading').data('settings'),
				ajax_url = fm_elementor_data.ajax_url.toString().replace('%%endpoint%%', 'fm_elementor_get_elements');

			$.ajax({
				url: ajax_url,
				dataType: 'json',
				method: 'post',
				data: {
					params: JSON.stringify(dataSettings),
					element: 'productsTabCarousel'
				},
				success: function (response) {
					$selector.html(response.data);
					getProductCarousel($selector);
					productTabsActive($selector);
					$(document.body).trigger('farmart_get_products_ajax_success');
				}
			});

			$( document.body ).on( 'farmart_get_products_ajax_success', function () {
				$selector.find('.slick-slider').slick('setPosition');
			});
		}
	};

	var productsTabCarousel2AjaxHandle = function ($scope, $) {
		var $selector = $scope.find('.fm-product-tab-carousel-2');

		if (!$selector.hasClass('no-infinite')) {
			productCarouselInfinite($selector);
		} else {
			getProductsTabCarousel($selector);
			productTabsActive($selector);
			$selector.find('.tabs-nav').on('click', 'a.tab-item', function (e) {
				getProductsAJAXHandler($(this), $selector);
			});
		}

		function productCarouselInfinite($selector) {

			$(window).on('scroll', function () {

				if ($selector.hasClass('no-infinite')) {
					return;
				}

				var offSet = 0;

				if ($selector.is(':in-viewport(' + offSet + ')')) {
					getProductAjax($selector);
					$selector.addClass('no-infinite');
				}

			}).trigger('scroll');
		}

		function getProductAjax($selector) {

			if (typeof fm_elementor_data === 'undefined') {
				return;
			}

			var dataSettings = $selector.find('.fm-product-tab-carousel-2-loading').data('settings'),
				ajax_url = fm_elementor_data.ajax_url.toString().replace('%%endpoint%%', 'fm_elementor_get_elements');

			$.ajax({
				url: ajax_url,
				dataType: 'json',
				method: 'post',
				data: {
					params: JSON.stringify(dataSettings),
					element: 'productsTabCarousel2'
				},
				success: function (response) {
					$selector.html(response.data);
					getProductsTabCarousel($selector);
					productTabsActive($selector);
					$(document.body).trigger('farmart_get_products_ajax_success');
				}
			});

			$( document.body ).on( 'farmart_get_products_ajax_success', function () {
				$selector.find('.slick-slider').slick('setPosition');
			});
		}

		function getProductsTabCarousel($selector) {
			var $tabsPanel   = $selector.find('.tabs-panel'),
				dataSettings = $selector.data('settings'),
				data         = JSON.stringify(dataSettings);

				if($selector.data('type') == 'grid') {
					return;
				}

			$tabsPanel.each( function() {
				var $tab        = $( this ),
					$slider     = $tab.find('ul.products'),
					$dotWrapper = $tab.find('.slick-dots-wrapper');

				var options = {
					prevArrow: $iconChevronLeft,
					nextArrow: $iconChevronRight,
					appendDots: $dotWrapper
				};

				$slider.attr('data-slick', data);

				$slider.not('.slick-initialized')
				.slick(options)
				.on('setPosition', function (event, slick) {
					slick.$slides.css('height', slick.$slideTrack.height() + 'px');
				});
			});
		};
	};

	var productsTabCarousel3AjaxHandle = function ($scope, $) {
		var $selector = $scope.find('.fm-product-tab-carousel-3');

		if (!$selector.hasClass('no-infinite')) {
			productCarouselInfinite($selector);
		} else {
			getProductCarousel($selector);
			productTabsActive($selector);
			$selector.find('.tabs-nav').on('click', 'a.tab-item', function (e) {
				getProductsAJAXHandler($(this), $selector);
			});
		}

		function productCarouselInfinite($selector) {

			$(window).on('scroll', function () {

				if ($selector.hasClass('no-infinite')) {
					return;
				}

				var offSet = 0;

				if ($selector.is(':in-viewport(' + offSet + ')')) {
					getProductAjax($selector);
					$selector.addClass('no-infinite');
				}

			}).trigger('scroll');
		}

		function getProductAjax($selector) {

			if (typeof fm_elementor_data === 'undefined') {
				return;
			}

			var dataSettings = $selector.find('.fm-product-tab-carousel-3-loading').data('settings'),
				ajax_url = fm_elementor_data.ajax_url.toString().replace('%%endpoint%%', 'fm_elementor_get_elements');

			$.ajax({
				url: ajax_url,
				dataType: 'json',
				method: 'post',
				data: {
					params: JSON.stringify(dataSettings),
					element: 'productsTabCarousel3'
				},
				success: function (response) {
					$selector.html(response.data);
					getProductCarousel($selector);
					productTabsActive($selector);
					$(document.body).trigger('farmart_get_products_ajax_success');
				}
			});

			$( document.body ).on( 'farmart_get_products_ajax_success', function () {
				$selector.find('.slick-slider').slick('setPosition');
			});
		}
	};

	var productsCarouselWithCatAjaxHandle = function ($scope, $) {
		var $selector = $scope.find('.fm-products-carousel-with-category');

		if (!$selector.hasClass('no-infinite')) {
			productCarouselInfinite($selector);
		} else {
			getProductCarousel($selector);
		}

		function productCarouselInfinite($selector) {

			$(window).on('scroll', function () {

				if ($selector.hasClass('no-infinite')) {
					return;
				}

				var offSet = 0;

				if ($selector.is(':in-viewport(' + offSet + ')')) {
					getProductCarouselAjax($selector);
					$selector.addClass('no-infinite');
				}

			}).trigger('scroll');
		}

		function getProductCarouselAjax($selector) {

			if (typeof fm_elementor_data === 'undefined') {
				return;
			}

			var dataSettings = $selector.find('.fm-products-carousel-with-category-loading').data('settings'),
				ajax_url = fm_elementor_data.ajax_url.toString().replace('%%endpoint%%', 'fm_elementor_get_elements');

			$.ajax({
				url: ajax_url,
				dataType: 'json',
				method: 'post',
				data: {
					params: JSON.stringify(dataSettings),
					element: 'productsCarouselWithCat'
				},
				success: function (response) {
					$selector.html(response.data);
					getProductCarousel($selector);
					$(document.body).trigger('farmart_get_products_ajax_success');
				}
			});
		}
	};

	var productsWithCategoryAjaxHandle = function ($scope, $) {
		var $selector = $scope.find('.fm-product-with-category');

		if (!$selector.hasClass('no-infinite')) {
			productCarouselInfinite($selector);
		} else {
			bannerCarousel($selector);
		}

		function productCarouselInfinite($selector) {

			$(window).on('scroll', function () {

				if ($selector.hasClass('no-infinite')) {
					return;
				}

				var offSet = 0;

				if ($selector.is(':in-viewport(' + offSet + ')')) {
					getProductAjax($selector);
					$selector.addClass('no-infinite');
				}

			}).trigger('scroll');
		}

		function getProductAjax($selector) {

			if (typeof fm_elementor_data === 'undefined') {
				return;
			}

			var dataSettings = $selector.find('.fm-product-with-category-loading').data('settings'),
				ajax_url = fm_elementor_data.ajax_url.toString().replace('%%endpoint%%', 'fm_elementor_get_elements');


			$.ajax({
				url: ajax_url,
				dataType: 'json',
				method: 'post',
				data: {
					params: JSON.stringify(dataSettings),
					element: 'productsWithCat'
				},
				success: function (response) {
					$selector.html(response.data);
					bannerCarousel($selector);
					$(document.body).trigger('farmart_get_products_ajax_success');
				}
			});
		}

		function bannerCarousel( $selector ) {
			var $slider = $selector.find('.images-list');

			var options = {
				prevArrow: $iconChevronLeft,
				nextArrow: $iconChevronRight
			};

			$slider.not('.slick-initialized').slick(options);
		}
	};

	var map = function ($scope, $) {
		$scope.find('.farmart-map').each(function () {
			var el = $(this),
				elsMap = el.data('map'),
				wrapper = $(this).attr('id');

			mapboxgl.accessToken = elsMap.token;

			var mapboxClient = mapboxSdk( { accessToken: mapboxgl.accessToken } ),
				local = elsMap.local;

			mapboxClient.geocoding.forwardGeocode( {
				query       : local,
				autocomplete: false,
				limit       : 1
			} )
				.send()
				.then( function ( response ) {
					if ( response && response.body && response.body.features && response.body.features.length ) {
						var feature = response.body.features[0];

						var map = new mapboxgl.Map( {
							container: wrapper,
							style    : 'mapbox://styles/mapbox/'+ elsMap.mode +'-v10',
							center   : feature.center,
							zoom     : elsMap.zom
						} );
						map.on( 'load', function () {
							map.loadImage( elsMap.marker, function ( error, image ) {
								if ( error ) throw error;
								map.addImage( 'marker', image );
								map.addLayer( {
									"id"    : "points",
									"type"  : "symbol",
									"source": {
										"type": "geojson",
										"data": {
											"type"    : "FeatureCollection",
											"features": [{
												"type"    : "Feature",
												"geometry": {
													"type"       : "Point",
													"coordinates": feature.center
												}
											}]
										}
									},
									"layout": {
										"icon-image": "marker",
										"icon-size" : 1
									}
								} );
							} );
						} );

						// disable map zoom when using scroll
						map.scrollZoom.disable();

						var geocoder = new MapboxGeocoder( {
							accessToken: mapboxgl.accessToken
						} );

						map.addControl( geocoder );

						// After the map style has loaded on the page, add a source layer and default
						// styling for a single point.
						map.on( 'load', function () {
							map.addSource( 'single-point', {
								"type": "geojson",
								"data": {
									"type"    : "FeatureCollection",
									"features": []
								}
							} );

							map.addLayer( {
								"id"    : "point",
								"source": "single-point",
								"type"  : "circle",
								"paint" : {
									"circle-radius": 10,
									"circle-color" : "#007cbf"
								}
							} );

							map.setPaintProperty( 'water', 'fill-color', elsMap.color_1 );
							map.setPaintProperty( 'building', 'fill-color', elsMap.color_2 );

							map.addControl( new mapboxgl.NavigationControl() );
							// Listen for the `result` event from the MapboxGeocoder that is triggered when a user
							// makes a selection and add a symbol that matches the result.
							geocoder.on( 'result', function ( ev ) {
								map.getSource( 'single-point' ).setData( ev.result.geometry );
							} );
						} );
					}
				} );
		});
	};

	/**
	 * Elementor JS Hooks
	 */
	$(window).on("elementor/frontend/init", function () {
		// Menu
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/farmart-main-menu.default",
			megaMenu
		);

		elementorFrontend.hooks.addAction(
			"frontend/element_ready/farmart-menu-department.default",
			menuClick
		);

		elementorFrontend.hooks.addAction(
			"frontend/element_ready/farmart-menu-department.default",
			menuDepartmentHover
		);

		// Slider
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/farmart-slides.default",
			slideCarousel
		);

		// Blog
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/farmart-blog-shortcode.default",
			blogCarousel
		);

		// Services Box
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/farmart-service-box.default",
			svboxCarousel
		);

		// Testimonial
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/farmart-testimonial.default",
			testiCarousel
		);

		// Testimonial 2
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/farmart-testimonial-2.default",
			testi2Carousel
		);

		// Testimonial 2
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/farmart-testimonial-3.default",
			testi2Carousel
		);

		// Testimonial banner
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/farmart-testimonial-banner.default",
			testibannerCarousel
		);

		// Team Carousel
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/farmart-team-carousel.default",
			teamCarousel
		);

		// Counter
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/farmart-counter.default",
			counterHandler
		);

		// Tab
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/farmart-tab-list.default",
			tab
		);

		// FAQ
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/farmart-faq.default",
			faq
		);

		// countdown
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/farmart-countdown.default",
			countDownHandler
		);

		// img carousel
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/farmart-image-carousel.default",
			imageCarousel
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/farmart-banner-carousel.default",
			imageCarousel
		);

		// cat pro carousel
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/farmart-product-categories-carousel.default",
			catCarousel
		);

		elementorFrontend.hooks.addAction(
			"frontend/element_ready/fm-product-categories-carousel-2.default",
			catCarousel
		);

		// cat mutil pro carousel
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/farmart-product-mutil-categories-carousel.default",
			mutilcatCarousel
		);

		// effect banner
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/farmart-banner-medium.default",
			effectBannerMedium
		);

		// effect menu
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/farmart-main-menu.default",
			effectMenu
		);

		// Products Carousel
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/farmart-products-carousel.default",
			productsCarouselAjaxHandle
		);

		elementorFrontend.hooks.addAction(
			"frontend/element_ready/farmart-products-carousel-2.default",
			productsCarousel2AjaxHandle
		);

		elementorFrontend.hooks.addAction(
			"frontend/element_ready/farmart-products-list-carousel.default",
			productsListCarouselAjaxHandle
		);

		// Products Tab Carousel
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/farmart-product-tab-carousel.default",
			productsTabCarouselAjaxHandle
		);

		elementorFrontend.hooks.addAction(
			"frontend/element_ready/farmart-product-tab-carousel-2.default",
			productsTabCarousel2AjaxHandle
		);

		elementorFrontend.hooks.addAction(
			"frontend/element_ready/farmart-product-tab-carousel-3.default",
			productsTabCarousel3AjaxHandle
		);

		// Search icon
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/fm-search-icon.default",
			searchIconTogglePanel
		);

		// Recently View Products
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/fm-recently-viewed-products.default",
			recentlyViewedProducts
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/fm-content-recently-viewed.default",
			recentlyViewedProducts
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/fm-footer-viewed-products.default",
			recentlyViewedProducts
		);

		// Product Deals Carousel
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/fm-product-deals-carousel.default",
			productsCarousel
		);

		elementorFrontend.hooks.addAction(
			"frontend/element_ready/fm-product-deals-carousel-2.default",
			productsCarousel
		);

		elementorFrontend.hooks.addAction(
			"frontend/element_ready/fm-product-deals-carousel.default",
			countDownHandler
		);

		elementorFrontend.hooks.addAction(
			"frontend/element_ready/fm-product-deals-carousel-2.default",
			countDownHandler
		);

		// Product Deals Tab
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/fm-product-deals-grid.default",
			productTabslHandler
		);

		elementorFrontend.hooks.addAction(
			"frontend/element_ready/fm-product-deals-grid.default",
			loadProductsDeals
		);

		elementorFrontend.hooks.addAction(
			"frontend/element_ready/fm-product-deals-grid.default",
			countDownHandler
		);

		elementorFrontend.hooks.addAction(
			"frontend/element_ready/fm-product-deals-carousel-3.default",
			dealCarousel2
		);

		// Tab FAQs
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/farmart-faqs.default",
			tabFaqs
		);

		// Brand
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/farmart-brands-carousel.default",
			brandsCarousel
		);

		// Product Brand
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/fm-products-brands.default",
			loadBrands
		);

		// Banner Video
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/fm-banner-video.default",
			bannerVideo
		);

		// products carousel with cat
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/farmart-products-carousel-with-category.default",
			productsCarouselWithCatAjaxHandle
		);

		// products with cat
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/farmart-product-with-category.default",
			productsWithCategoryAjaxHandle
		);

		// Trending Carousel
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/farmart-trending-search-carousel.default",
			trendingSearchCarousel
		);

		// List Link Collapes Effect
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/farmart-list-links.default",
			collapseEffect
		);

		// map
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/farmart-map.default",
			map
		);

		// Vertical Tab
		verticalTab();
	});
})
(jQuery);