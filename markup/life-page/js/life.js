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
	
// likes -+ //
	Likes();
	function Likes() {
		$('.reviews-container').find('.value').each(function(){
			var likes = $(this).text();
			var iLikes = likes
			if ($(this).text() < 0) {
				$(this).addClass('red-load');
			} else if ($(this).text() > 0) {
				$(this).addClass('green-load addplus');
			};
			$(this).prev().click(function(){
				if (iLikes < likes) {
					return
				};
				--iLikes
				if (iLikes < likes) {
					$(this).addClass('disable');
				};
				if ($(this).next().text() <= 1) {
					$(this).next().removeClass('addplus');
				};
				$(this).next().addClass('red').removeClass('green').text(iLikes);
				if (likes == iLikes) {
					$(this).parent().find('.plus').removeClass('disable');
					$(this).parent().find('.value').removeClass('red green');
				};
			});
			$(this).next().click(function(){
				if (iLikes > likes) {
					return
				}
				++iLikes
				if (iLikes > likes) {
					$(this).addClass('disable');
				}
				if ($(this).prev().text() >= 0) {
					$(this).prev().addClass('addplus');
				};
				$(this).prev().addClass('green').removeClass('red').text(iLikes);

				if (likes == iLikes) {
					$(this).parent().find('.minus').removeClass('disable');
					$(this).parent().find('.value').removeClass('red green');
				};
			});
		});
	}
// likes -+ end //
//* Upstair *//
  $(document).scroll(function(){
    ($(document).scrollTop() > $(window).height()) ? $('.btn-upstair').fadeIn() : $('.btn-upstair').fadeOut();
  });
  $('.btn-upstair').on('click', function(){
    $('html,body').animate({scrollTop: 0}, 500);
  });
//* Upstair *//
});