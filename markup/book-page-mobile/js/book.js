$(document).ready(function(){
//фон по ширине и высоте екрана
	 $(window).load(function(){
	 	var windowH = $(window).height();
		$(".js-height").css('min-height' , windowH);
	});
	$(window).resize(function(){
		var windowH = $(window).height();
		$(".js-height").css('min-height' , windowH);
	// 	if($('body').width() < 1600) {
	// 		$('.b-sectionSecond__layers').css('display','none');
	// 	}
	// 	else $('.b-sectionSecond__layers').css('display','block');
	});
//появление поплавка
//	var navPosTop = $('.b-container__nav').offset().top;
//	var navHeight = $('.b-container__nav').height();
//	$(window).scroll(function(){
//		if($(window).scrollTop() > navPosTop){
//			$('.b-container__nav').addClass("js-nav");
//			$('.b-container__nav').next().css('padding-top' , navHeight);
//		} else {
//			$('.b-container__nav').removeClass("js-nav");
//			$('.b-container__nav').next().css('padding-top' , 0);
//		}
//	});
	// Tabs Books //
		tabsCard();
		function tabsCard(){
			$('#b-tabs, .tabs .tabs__controls_item, .b-tab-sections .b-tab__section').on('click' , function(e){
				e.stopPropagation();
			});
			$('body').on('click' , function(){
				$('#tabs').find('.tabs__controls_item').removeClass('tab-active');
				$('.b-tab-sections').find('.b-tab__section').hide().removeClass('tab-active');
			});
			$('.tabs').find('.tabs__controls_item').on('click' , function(e){
				e.preventDefault();
				var thisIndex = $(this).index();
				$(this).addClass('tab-active').siblings().removeClass('tab-active');
				$('.b-tab-sections').find('.b-tab__section').eq(thisIndex).show().addClass('tab-active').siblings().removeClass('tab-active').hide();
			});
		}
	// Tabs Books //

	// left Filter hover //
	filterHover();
	function filterHover() {
		$(window).resize(function(){
			$('.left-filter').height($(window).height());
		});
		$('.left-filter').height($(window).height());
		$('.left-filter .list-item').find('.hover-text').each(function(){
			var hoverW = $(this).width()+15;
			$(this).parent().width(hoverW).css('left' , -hoverW);
			$(this).parent().mouseover(function(){
				$(this).stop().animate({
					'left' : 0
				}, 200);
			});
			$(this).parent().mouseleave(function(){
				$(this).stop().animate({
					'left' : -hoverW
				}, 200);
			});
		});
	}
	// left Filter hover end //
	
    dropDowns();
    function dropDowns() {
    	$('.dropdown-open').on('click', function(e){
    		$(this).toggleClass('opened').parent().find('.nav-dropdown').slideToggle(300);
    	});
    }
    searchForm();
    function searchForm() {
    	$('.main-nav').find('.search-form_btn').on('click' , function(e){
    		var thisPos = $(this).offset().top;
    		$('body').animate({scrollTop: thisPos-10}, 300)
    	});
    }
});