
$(document).ready(function(){

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

	languageNav();
	function languageNav() {
		$('.language').find('.current').on('click' , function(e){
			e.preventDefault();
			$(this).toggleClass('opened').next().slideToggle(300);
		});
	}

// toopltip
	$('.b-icon a').hover(function(){
		$(this).next().stop().toggleClass('show');
	});
//amination
	$(window).mousewheel(function(){
		// var wscrollTop = $(window).scrollTop(),
		// 	s1 = $('.js-height').height(),
		// 	s2 = $('.js-height').height()+ $('.js-height').height()/2,
		// 	s3 = $('.js-height').height()*2+$('.js-height').height()/2,
		// 	wHeight2 = $('.js-height').height()*2,
		// 	wHeight4 = $('.js-height').height()*4,
		// 	wHeight3 = $('.js-height').height()*3;

		// if (wscrollTop > s1/2) {

		// 	var mainLists = $('.b-section__icons .b-icon img')
		// 	var i_main = 0;
		// 	var loop = setInterval(function(){
		// 		mainLists.eq(i_main).addClass('show');
		// 		i_main++
		// 		if( i_main >= mainLists.size()) {
		// 		clearInterval(loop);
		// 		}
		// 	}, 200);
		// 	$('.b-header_fixed .b-login ').css('color' , '#555');
		// 	$('.b-section2').find('.wow').show().addClass('animated')
		// }
		// if($(window).scrollTop() > s2) {


		// 	$('.b-header_fixed .b-login ').css('color' , '#555');
		// 	$('.b-section3').find('.wow').addClass('animated')
		// 	$('.b-section3').find('.wow').show();
		// 	var sliderCircle = $('.slider-circle-item')
		// 	var i_slide = 0;
		// 	var loopSlide = setInterval(function(){
		// 	sliderCircle.eq(i_slide).addClass('show');
		// 	i_slide++
		// 	if( i_slide >= sliderCircle.size()) {
		// 	clearInterval(loopSlide);
		// 	}
		// 	}, 100);
		// }
		// else {

		// }
		// if (wscrollTop > s3) {

		// 	$('.b-header_fixed .b-login ').css('color' , '#555');
		// 	$('.b-section4').find('.wow').show().addClass('animated')
		// }
		// if (wscrollTop > s3) {

		// 	$('.b-header_fixed .b-login ').css('color' , '#555');
		// 	$('.b-section3').find('.wow').show().addClass('animated')
		// }
		// if (wscrollTop > s1/2 && wscrollTop < wHeight2-s1/2 ) {

		// 	$('.b-header_fixed .b-login ').css('color' , '#555');
		// }

		// else {
		// 	$('.b-header_fixed .b-login ').css('color' , '#FFF');
		// }

		// if (wscrollTop > s1/2 && wscrollTop < wHeight2-s1/2 ) {
		// 	$('.b-navigation__link').addClass('gray');
		// }
		// else {
		// 	$('.b-navigation__link').removeClass('gray');
		// }

		// if (wscrollTop > s1-1 && wscrollTop < wHeight2 ) {

		// 	$('.b-header_fixed .b-login ').css('color' , '#555');
		// }
		// else {
		// 	$('.b-header_fixed .b-login ').css('color' , '#FFF');
		// }

		// if(wscrollTop > s1-1 && wscrollTop < wHeight3) {

		// 	$('.b-header_fixed .b-register').css('display' , 'inline-block');
		// }
		// else {
		// 	$('.b-header_fixed .b-register').css('display' , 'none');
		// }

		// if (wscrollTop > wHeight2-1 && wscrollTop < wHeight3 ) {

		// 	$('.b-header_fixed .b-register ').css('color' , '#f2992e')
		// }

		// else {
		// 	$('.b-header_fixed .b-register ').css('color' , '#555')
		// }

		// if(wscrollTop > s1-1 && wscrollTop < wHeight2-1) {
		// 	$('.b-header_fixed .logo ').css('display' , 'block');
		// }

		// else  {
		// 	$('.b-header_fixed .logo ').css('display' , 'none');
		// }


		// if (wscrollTop > wHeight2-1) {
		// 	$('.b-header_fixed .white-logo ').css('display' , 'block');
		// }
		// else {

		// 	$('.b-header_fixed .white-logo').css('display' , 'none');
		// }

	});
});
