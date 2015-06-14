$(document).ready(function(){
	$('.news-carousel_list').each(function(){
		var carouselSize = $(this).children().size();
		var carouselWidth = $(this).children().width();
		$(this).width(carouselSize*carouselWidth);
	});
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
// News Filter //
	var activeData = $('.main-filter_item.active').children().data('target');
	if ($('.main-filter_item.active').children().data('target') == undefined) {
		//$('.current-page').removeClass('filter_all');
		//$('.news-category_filter').removeClass('category-filter_all');
	} else {
		$('.'+activeData).addClass('show-filter');
		$('.current-page').addClass('filter_all');
		$('.news-category_filter').addClass('category-filter_all');
	};
	$('.main-filter_item.active').find('.under-filter').addClass('show-filter');
	$('.main-filter_link').on('click', function(e){

		var thisDataName = $(this).data('target');
		$('.under-filter').removeClass('show-filter');
		$('.'+thisDataName).addClass('show-filter');
		$(this).parent().addClass('active').siblings().removeClass('active');
		if (thisDataName == undefined) {
			$('.current-page').removeClass('filter_all');
			$('.news-category_filter').removeClass('category-filter_all');
		} else {
			$('.current-page').addClass('filter_all');
			$('.news-category_filter').addClass('category-filter_all');
		};
	});

	var underFilterW = $(window).width()-$('.main-news_filter').width();
	//$('.under-filter_link').on('click', function(e){
		//e.preventDefault();
		//$(this).parent().addClass('active').siblings().removeClass('active');
	//});
	$('.under-filter_link').each(function(){
		var thisW = $(this).width()+40;
		$(this).width(thisW);
	});
	$('.under-filter').each(function(){
		$(this).append('<div class="filter-arrows_group"><button class="filter-prev filter-arrow filter-disable"></button><button class=" filter-arrow filter-next"></button></div>')
		var filterItemsW = 0;
		$(this).find('.under-filter_item').each(function(){
			filterItemsW = filterItemsW + $(this).width();
			$(this).parent().width(filterItemsW);
		});
		var filterListW = $(this).find('.under-filter_list').width();
		if (underFilterW < filterListW) {
			$(this).find('.filter-arrows_group').show();
		} else {
			$(this).find('.filter-arrows_group').hide();
		};
	});
	$('.filter-arrows_group').find('.filter-next').on('click' , function(){
		$(this).prev().removeClass('filter-disable');
		$(this).addClass('filter-disable').parents('.under-filter').find('.under-filter_inner').css({
			'left': 'auto'
		}).animate({
			'right': '60px'
		})
	});
	$('.filter-arrows_group').find('.filter-prev').on('click' , function(){
		$(this).next().removeClass('filter-disable');
		$(this).addClass('filter-disable').parents('.under-filter').find('.under-filter_inner').animate({
			'right': '0'
		}).animate({
			'left': '0'
		});
	});
	$('.under-filter').outerWidth(underFilterW)
	$(window).resize(function(){
		var underFilterW = $(window).width()-$('.main-news_filter').width();
		if ($(window).width() < 1024) {
			return
		};
		$('.under-filter').outerWidth(underFilterW);
		$('.under-filter').each(function(){
			var filterListW = $(this).find('.under-filter_list').width();
			if (underFilterW < filterListW) {
				$(this).find('.filter-arrows_group').show();
			} else {
				$(this).find('.filter-arrows_group').hide();
				$(this).find('.under-filter_inner').css({
					'left': '0',
					'right': 'auto'
				});
			};
		});
	});
// News Filter end //
// News Carousel //
// News Carousel End //
	$('input,textarea').focus(function(){
	    $(this).data('placeholder',$(this).attr('placeholder'))
	    $(this).attr('placeholder','');
	});
	  	$('input,textarea').blur(function(){
	    $(this).attr('placeholder',$(this).data('placeholder'));
	});

	var offsetTopFilter = $('.news-category_filter').offset().top;
	$(window).scroll(function(){
		console.log(offsetTopFilter);
		if (offsetTopFilter < $(window).scrollTop()) {
			$('.news-category_filter').css({
				'position': 'fixed',
				'margin-top': '0'
			});
			$('.news-category_filter').addClass('category-filter_fixed');
		} else {
			$('.news-category_filter').removeAttr('style').css({
				'position': 'absolute'
			});
			$('.news-category_filter').removeClass('category-filter_fixed');
		}
	});
});