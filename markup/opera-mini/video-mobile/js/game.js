$(function() {
	$('.b-icon__plus').on('click', function(e) {
		var that = $(this);
		
		$(this).closest('.b-selection_full').find('.b-icon__box').animate({
			'opacity':0
		}, 100);
		
		$(this).closest('.b-selection_full').find('.b-selection__header').animate({
			'opacity':0
		}, 100);
		
		$(this).closest('.b-selection_full').slideUp('slow');
		$(this).closest('.b-box__selection').find('.b-selection').slideDown('slow');

	});
	
	$('.b-icon__close').on('click', function(e) {
		$(this).closest('.b-box__selection').slideUp('slow');
	});
	
	
	$('.b-selection').on('click', function(e) {
		$(this).hide();
		
		$(this).closest('.b-box__selection').find('.b-selection_full').slideDown('slow',function() {
			$(this).closest('.b-selection_full').find('.b-icon__box').animate({
			'opacity':1
			}, 100);
			$(this).closest('.b-selection_full').find('.b-selection__header').animate({
			'opacity':1
			}, 100);
		});
	
	});
});