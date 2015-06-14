$(document).ready(function(){

	/* Header Dropdawns */
	headerDropdawn();
	function headerDropdawn() {
		$('.header').on('click' , function(e){
			e.stopPropagation();
		});
		$('html').on('click' , function(){
			$('.header').find('.nav-dropdawn').slideUp();
			$('.header').find('.opened').removeClass('opened');
		});


		$('.header').find('.open-nav').on('click' , function(){
		$('.open-nav').not(this).removeClass('opened').next().slideUp();
	  	$(this).toggleClass('opened').parent().find('.nav-dropdawn').slideToggle(300);
	  	// Main Menu
			var mainLists = $('.header-nav-main li')
			var i = 0;
			var loop = setInterval(function(){
			  mainLists.eq(i).addClass('show');
			  i++
			  if( i >= mainLists.size()) {
			    clearInterval(loop);
			}
			}, 200);
		});
	}
	/* Header Dropdawns end */
    sidebarOpen();
	function sidebarOpen() {
		var homesidebarW = $('.home-sidebar').outerWidth();
		$('.home-sidebar').on('click' , function(e){
			e.stopPropagation();
		});
		$('body').css('position' , 'relative');
		$('a.sidebar-open-link').click(function(){
			var thisData = $(this).data('target');
			$('.open-nav').removeClass('opened');
			$('.nav-dropdawn').slideUp(300);
			$('.'+thisData).addClass('opened-sidebar').animate({'right' : '0'},300);
			$('body').css('overflow' , 'hidden').animate({'left' : -homesidebarW},300);
			$('.sidebar-wrapper').fadeIn(100).addClass('opened');
		});
		$('.sidebar-close').on('click' , function(){
			$(this).parents('.home-sidebar').removeClass('opened-sidebar').animate({'right' : -homesidebarW},300);
			$('body').css('overflow' , 'auto').animate({'left' : 0},300,function(){
				$('.sidebar-wrapper').fadeOut(100).removeClass('opened');
			});
		});
		$('.sidebar-wrapper').on('click' , function(){
			$('body').css('overflow' , 'auto').animate({'left' : 0},300);
			$('.opened-sidebar').removeClass('opened-sidebar').animate({'right' : -homesidebarW},300,function(){
				$('.sidebar-wrapper').fadeOut(100).removeClass('opened');
			});
		});
	};
});