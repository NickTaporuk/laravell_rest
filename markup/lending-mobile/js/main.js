
$(document).ready(function(){
	animateScroll();
	languageNav();
	$(document).scroll(function(){
		headerScroll();
	});
//timer
$('.count').each(function () {
	$(this).prop('Counter',0).animate({
		Counter: $(this).text()
	}, {
		duration: 4000,
		easing: 'swing',
		step: function (now) {
			$(this).text(Math.ceil(now));
		}
	});
});
// toopltip
	$('.b-icon a').hover(function(){
		$(this).next().stop().toggleClass('show');
	});

	function headerScroll() {
		var logoH = $('.b-section1 .big-logo-wrap').height();
		if ($(document).scrollTop() > logoH) {
			if ($('.b-header_fixed').hasClass('next-section')) {
				return	
			};
			$('.b-header_fixed').addClass('next-section').removeClass('back-section').css('top', '-60px').animate({
				'top': 0
			}, 500);
		} else {
			if ($('.b-header_fixed').hasClass('back-section')) {
				return
			};
			$('.b-header_fixed').addClass('back-section').animate({
				'top': '-60px'
			}, 500, function(){
				$('.b-header_fixed').css('top', '0').removeClass('next-section')
			});
		}
	}

	function animateScroll() {
		var section1 = $('#nav1').height(),
			section2 = $('#nav2').height(),
			section3 = $('#nav3').height(),
			section4 = $('#nav5').height();
			section4 = $('#nav4').height();
			
			$(document).scroll(function(){
				$('.language').find('.current').removeClass('opened').next().slideUp(300);
				if ($(document).scrollTop() > section1/2) {
					$('.b-section2 .animated').css('opacity' , '1');
					$('.b-section2').find('.wowFadeLeft').addClass('fadeInLeft');
					$('.b-section2').find('.wowBounce').addClass('bounceIn');
					$('.b-section2').find('.wowFadeUp').addClass('fadeInUp');
				};
				if ($(document).scrollTop() > section1 + section2/4) {
					$('.b-section3 .animated').css('opacity' , '1');
					$('.b-section3').find('.wowFadeUp').addClass('fadeInUp');
					$('.b-section3').find('.wowBounce').addClass('bounceIn');
					$('.b-section3 .slider-circle').find('.animated').css('opacity' , '0');

				}
				if ($(document).scrollTop() > section1 + section2/1.5) {
					$('.b-section3 .list-one').find('.wowFadeLeft').addClass('fadeInLeft');
				}
				if ($(document).scrollTop() > section1 + section2 + section3/3) {
					$('.b-section3 .list-two').find('.wowFadeLeft').addClass('fadeInLeft');
				}
				if ($(document).scrollTop() > section1 + section2 + section3/1.4) {
					$('.b-section5 .animated').css('opacity' , '1');
					$('.b-section5').find('.wowFadeUp').addClass('fadeInUp');
					$('.b-section5').find('.wowBounce').addClass('bounceIn');
				}
				if ($(document).scrollTop() > section1 + section2 + section3+section4/6) {
					$('.b-section4 .animated').css('opacity' , '1');
					$('.b-section4').find('.wowFadeUp').addClass('fadeInUp');
					$('.b-section4').find('.wowBounce').addClass('bounceIn');
				}
			});
	}

	function languageNav() {
		$('.language').find('.current').on('click' , function(e){
			e.preventDefault();
			$(this).toggleClass('opened').next().slideToggle(300);
		});
	}
	firstSectionH();
	function firstSectionH() {
		var firstSectionH = $('.js-height').find('.b-section__main').outerHeight(),
			windowH = $(window).height();
		if(windowH <= firstSectionH) {
			return
		}
		$('.js-height').height(windowH);
	}
	$(window).resize(function(){
		firstSectionH();
	});
});
