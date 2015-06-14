$(document).ready(function(){


	// left Filter hover //
	filterHover();
	function filterHover() {
		$('.left-filter .list-item').find('.hover-text').each(function(){
			var hoverW = $(this).width();
			$(this).parent().width(hoverW).css('left' , -hoverW);
			$(this).parent().mouseover(function(){
				$(this).stop().animate({
					'left' : 0
				}, 200);
			});
			$(this).parent().mouseleave(function(){
				$(this).stop().animate({
					'left' : -hoverW
				}, 200);
			});
		});
	}
	// left Filter hover end //

	// PlayList //
	  playList();
	  function playList() {
	    $('.song-icon').on('click' , function(){
	      $('.play-list .song').find('.song-icon').not(this).removeClass('played');
	      $(this).toggleClass('played');
	      $(this).parents('.song').addClass('active').siblings().removeClass('active');
	      var songW = $(this).parents('.song').width();
	      var songinfoW = $(this).parents('.song').find('.song-info').outerWidth();
	      var songrigthbtnsW = $(this).parents('.song').find('.right-btns').outerWidth();
	      var graphW = songW - (songinfoW + songrigthbtnsW);
	      $(this).parents('.song').find('.graph').css('width' , graphW-0.2);
	    });
	  }
  	// PlayList end //
	// Tabs Movie //
		tabsCard();
		function tabsCard(){
			$('.tabs-movie').find('.tabs-list').hide();
			$('.tabs-movie').find('.tabs-nav').click(function(e){
				e.stopPropagation()
			});
			$('body').on('click' ,function(){
				$('.tabs-movie').find('.tabs-list').slideUp();
			});
			$('.tabs-movie').find('.tabs-nav').prepend('<div class="tab-list-open"></div>');
			var activeItemText = $('.tabs-movie').find('.tab-item.active').html();
			$('.tab-list-open').html(activeItemText);
			$('.tab-list-open').click(function(e){
				$(this).next().slideToggle(300);
				e.preventDefault();
			});
			$('.tabs-movie').find('.tab-item').on('click' , function(e){
				e.preventDefault();
				var thisIndex = $(this).index();
				var thisText = $(this).html();
				$(this).parent().slideUp(300);
				$('.tab-list-open').html(thisText);
				$(this).addClass('active').siblings().removeClass('active');
				$('.tabs-movie').find('.tab-section').eq(thisIndex).fadeIn(300).addClass('visible').siblings().removeClass('visible').hide();
			});
		}
	// Tabs Movie //
	// Description list //
	    descriptionList();
	    function descriptionList() {
	      $('.tabs-movie').find('.info').each(function(){
	        $(this).find('.link-btn:gt(1)').addClass("hidden").hide();
	        if ($(this).find('.link-btn').size() > 2) {
	          $(this).append('<a href="#" class="link-btn more-items">...</a>')
	        };
	        $(this).find('.more-items').on('click' , function(e){
	        	e.preventDefault();
	          $(this).hide().parent().find('.hidden').removeClass("hidden").show();

	        });
	      });
	    }
	// Description list //
	$('input,textarea').focus(function(){
	    $(this).data('placeholder',$(this).attr('placeholder'))
	    $(this).attr('placeholder','');
	});
	  	$('input,textarea').blur(function(){
	    $(this).attr('placeholder',$(this).data('placeholder'));
	});

	// Trailer List //
	trailerList();
	function trailerList() {
		$('.trailer-container .trailer').on('click' , function(){
			$(this).addClass('active').siblings().removeClass('active');
		});
	}
	// Trailer List end //

	// Player end //
	videoPlayer();
	function videoPlayer() {
	    $('#player .play').on('click' , function(){
	      $(this).hide().parents('#player').find('.hidden-item').hide();
	      $(this).parents('#player').find('.video-bg').hide();
	    });
		$('#player .right-panel').find('.btn').on('click' , function(){
			$('#player .right-panel').find('.btn').not(this).removeClass('opened').next().slideUp().parent().removeClass('active');
		  	$(this).toggleClass('opened').parent().toggleClass('active').find('.nav-dropdawn').slideToggle(300);
		});
		$('#player .right-panel').find('.format-item').on('click' , function(e){
			e.preventDefault();
			$(this).addClass('active').siblings().removeClass('active');
		});
		$('#player .right-panel').find('.series-item').on('click' , function(e){
			e.preventDefault();
			$('#player .right-panel').find('.series-item').not(this).removeClass('active');
			$(this).addClass('active');
		});
		$('#player .right-panel').find('.translition-item').on('click' , function(e){
			e.preventDefault();
			$('#player .right-panel').find('.translition-item').not(this).removeClass('active');
			$(this).addClass('active');
		});
 	}
    // Player end //

    //starMedium();
    //function starMedium() {
    //	$('.rating-medium').find('.star-btn').on('click' , function(){
    //		$(this).toggleClass('add del');
    //	});
    //}
    dropDowns();
    function dropDowns() {
    	$('.dropdown-open').on('click', function(e){
    		$(this).toggleClass('opened').parent().find('.nav-dropdown').slideToggle(300);
    	});
    }
    searchForm();
    function searchForm() {
    	$('.main-nav').find('.search-form_btn').on('click' , function(e){
    		var thisPos = $(this).offset().top;
    		$('body').animate({scrollTop: thisPos-10}, 300)
    	});
    }

    //$('.show-all-genres').find('a').on('click', function(e){
    //    e.preventDefault();
    //    $(this).toggleClass('shows');
    //
    //    if($('.gender').css('display') == 'none') {
    //        $('.gender').css({
    //            'display' : 'inline-block'
    //        });
    //    } else {
    //        $('.gender').css({
    //            'display' : 'none'
    //        });
    //    }
    //    $('.genres-list').toggleClass('show-all_genres');
    //});

    $('.show-all-genres').find('a').on('click', function(e) {

        e.preventDefault();
        $(this).toggleClass('shows');

        if ($('.gender').css('display') == 'none') {
            $('.genres-list li').css({
                'display': 'inline-block'
            });
        } else {
            $('.genres-list li').removeAttr('style');
            $('.gender').css({
                'display' : 'none'
            });


        }
    });
});