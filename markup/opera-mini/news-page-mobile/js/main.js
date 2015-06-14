$(document).ready(function(){
// News Filter //
	searchForm();
    function searchForm() {
    	$('.news-category_filter').find('.search-form_btn').on('click' , function(e){
    		e.preventDefault();
    		$(this).parent().addClass('show-search').animate({'left' : '0'}, 300);
    		$(this).prev().focus();
    	});
    	$('body').click(function(){
    		$('.news-category_filter').find('.search-form').removeClass('show-search').animate({'left' : '-135px'}, 300);
    	});
    	$('.news-category_filter').find('.search-form').on('click' , function(e){
    		e.stopPropagation();
    	});
    }
	$('.news-category_filter').find('.main-filter_btn').on('click' , function(e){
		e.stopPropagation();
	});
	$('html').on('click' , function(){
		$('.news-category_filter').find('.nav-dropdown').slideUp();
		$('.news-category_filter').find('.opened').removeClass('opened');
	});
	$('.news-category_filter').find('.main-filter_btn').on('click' , function(){
		$(this).toggleClass('opened').next().slideToggle(300);
	});
	var activeData = $('.main-filter_item.active').children().data('target');
	$('.'+activeData).addClass('show-filter').show();
	//$('.main-filter_item.active').find('.under-filter').addClass('show-filter');
	$('.main-filter_link').on('click', function(e){
		//e.preventDefault();
		var thisDataName = $(this).data('target');
		$('.under-filter').removeClass('show-filter').hide();
		$('.'+thisDataName).addClass('show-filter').show();
		$(this).parent().addClass('active').siblings().removeClass('active');
		variableWidth();
	});
	//$('.under-filter_link').on('click', function(e){
	//	e.preventDefault();
	//	$(this).parent().addClass('active').siblings().removeClass('active');
	//});
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
	searchForm();
    function searchForm() {
    	$('.search-form').find('.search-form_btn').on('click' , function(e){
    		var thisPos = $(this).offset().top;
    		$('body').animate({scrollTop: thisPos-10}, 300)
    	});
    }
});