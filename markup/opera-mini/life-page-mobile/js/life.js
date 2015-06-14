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
	// var navPosTop = $('.b-container__nav').offset().top;
	// var navHeight = $('.b-container__nav').height();
	// $(window).scroll(function(){
	// 	if($(window).scrollTop() > navPosTop){
	// 		$('.b-container__nav').addClass("js-nav");
	// 		$('.b-container__nav').next().css('padding-top' , navHeight);
	// 	} else {
	// 		$('.b-container__nav').removeClass("js-nav");
	// 		$('.b-container__nav').next().css('padding-top' , 0);
	// 	}
	// });
//* Upstair *//
$(document).scroll(function(){
	if ($(window).width() < 768) {
		return $('.btn-upstair').fadeOut();
	} else {
		if ($(document).scrollTop() > $(window).height()) {
		    $('.btn-upstair').fadeIn();
		} else {
			$('.btn-upstair').fadeOut();
		}
	}
});
  $('.btn-upstair').on('click', function(){
    $('html,body').animate({scrollTop: 0}, 500);
  });
//* Upstair *//
});