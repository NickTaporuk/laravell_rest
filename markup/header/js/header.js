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
		});
	}
	/* Header Dropdawns end */
    sidebarOpen();
	function sidebarOpen() {
		$('.home-sidebar').on('click' , function(e){
			e.stopPropagation();
		});
		$('body').css('position' , 'relative');
		$('a.sidebar-open-link').click(function(){
			var thisData = $(this).data('target');
			console.log(thisData);
			$('.'+thisData).addClass('opened-sidebar').animate({'right' : '0'},300);
			$('body').css('overflow' , 'hidden').animate({'left' : -500},300);
			$('.sidebar-wrapper').fadeIn(100).addClass('opened');
		});
		$('.sidebar-close').on('click' , function(){
			$(this).parents('.home-sidebar').removeClass('opened-sidebar').animate({'right' : -500},300);
			$('body').css('overflow' , 'auto').animate({'left' : 0},300,function(){
				$('.sidebar-wrapper').fadeOut(100).removeClass('opened');
			});
		});

		$('#use-agreement-link').on('click' , function(){
			$('.nav-dropdawn').css({display:'none'});
			$(this).parents('.home-sidebar').removeClass('opened-sidebar').animate({'right' : -500},300);
			$('body').css('overflow' , 'auto').animate({'left' : 0},300,function(){
				$('.sidebar-wrapper').fadeOut(100).removeClass('opened');
			});
		});
		$('.sidebar-wrapper').on('click' , function(){
			$('body').css('overflow' , 'auto').animate({'left' : 0},300);
			$('.opened-sidebar').removeClass('opened-sidebar').animate({'right' : -500},300,function(){
				$('.sidebar-wrapper').fadeOut(100).removeClass('opened');
			});
		});
	}
	$('.b-popup-content').on('click', function(e){
		e.stopPropagation();
	})

	$('.my-glory').on('mouseover', function(){
	 	$(".section3_popup").stop().fadeIn(300);
	});
	$('.my-glory').on('mouseleave', function(){
	 	$(".section3_popup").stop().fadeOut(300);
	});
	$('.logo').on('mouseover', function(){
		$('.b-section2_container').stop().fadeIn(300);
	});
	$('.logo').on('mouseleave', function(){
		$('.b-section2_container').stop().fadeOut(300);
	});
	$('.b-icon a').hover(function(){
		$(this).next().stop().toggleClass('show');
		
	});
});