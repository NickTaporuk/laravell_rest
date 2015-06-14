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
	// $(window).scroll(function(){
	// 	if($(window).scrollTop() > 157){
	// 		console.log($(window).scrollTop());
	// 		$('.b-container__nav').addClass("js-nav");
	// 	}
	// 		else {
	// 			$('.b-container__nav').removeClass("js-nav");
	// 		}
	// });
	// Tabs Movie //
		tabsCard();
		function tabsCard(){
			$('.tabs').find('.tabs__controls_item').on('click' , function(e){
				e.preventDefault();
				var thisIndex = $(this).index();
				console.log(thisIndex);
				$(this).addClass('tab-active').siblings().removeClass('tab-active');

				$('.b-tab-sections').find('.b-tab__section').eq(thisIndex).show().addClass('tab-active').siblings().removeClass('tab-active').hide();

			});
		}
	// Tabs Movie //
});