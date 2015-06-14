$(document).ready(function(){
// Description list //
    descriptionList();
    function descriptionList() {
      $('.description').find('.info').each(function(){
        $(this).find('.link-btn:gt(2)').addClass("hidden").hide();
        if ($(this).find('.link-btn').size() > 3) {
          $(this).append('<a href="#" class="link-btn more-items">...</a>')
        };
        $(this).find('.more-items').on('click' , function(e){
        	e.preventDefault();
          $(this).hide().parent().find('.hidden').removeClass("hidden").show();

        });
      });
    }
	// Description list //

	// var navPosTop = $('.b-container__nav').offset().top;
	// var navHeight = $('.b-container__nav').height();
	// $(window).scroll(function(){
	// 	if($(window).scrollTop() > navPosTop){
	// 		$('.b-container__nav').addClass("js-nav");
	// 		$('.b-nav').addClass("js-nav");
	// 		$('.b-container__nav').next().css('padding-top' , navHeight);
	// 	} else {
	// 		$('.b-container__nav').removeClass("js-nav");
	// 		$('.b-nav').removeClass("js-nav");
	// 		$('.b-container__nav').next().css('padding-top' , 0);
	// 	}
	// });
// likes -+ //
//	Likes();
//	function Likes() {
//		$('.reviews-container').find('.value').each(function(){
//			var likes = $(this).text();
//			var iLikes = likes
//			if ($(this).text() < 0) {
//				$(this).addClass('red-load');
//			} else if ($(this).text() > 0) {
//				$(this).addClass('green-load addplus');
//			};
//			$(this).prev().click(function(){
//				if (iLikes < likes) {
//					return
//				};
//				--iLikes
//				if (iLikes < likes) {
//					$(this).addClass('disable');
//				};
//				if ($(this).next().text() <= 1) {
//					$(this).next().removeClass('addplus');
//				};
//				$(this).next().addClass('red').removeClass('green').text(iLikes);
//				if (likes == iLikes) {
//					$(this).parent().find('.plus').removeClass('disable');
//					$(this).parent().find('.value').removeClass('red green');
//				};
//			});
//			$(this).next().click(function(){
//				if (iLikes > likes) {
//					return
//				}
//				++iLikes;
//				if (iLikes > likes) {
//					$(this).addClass('disable');
//				}
//				if ($(this).prev().text() >= 0) {
//					$(this).prev().addClass('addplus');
//				};
//				$(this).prev().addClass('green').removeClass('red').text(iLikes);
//
//				if (likes == iLikes) {
//					$(this).parent().find('.minus').removeClass('disable');
//					$(this).parent().find('.value').removeClass('red green');
//				};
//			});
//		});
//	}
// likes -+ end //
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
	      $(this).hide().parents('#player').find('.hidden-items').hide();
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
    $('.show-all-genres').find('a').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('shows');

        if($('.gender').css('display') == 'none') {
            $('.gender').css({
                'display' : 'inline-block'
            });
        } else {
            $('.gender').css({
                'display' : 'none'
            });
        }
      	$('.genres-list').toggleClass('show-all_genres');
    });
// Set btn //
    $('.set-aside').click(function(){
      if ($(this).hasClass('checked')) {
        return
      };
      var thisSet = $(this).data('set');
      console.log(thisSet);
      $(this).val(thisSet).addClass('checked');
    });
// Set btn //
});