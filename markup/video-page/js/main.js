$(document).ready(function(){

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
			$('.tabs-movie').find('.tab-item').on('click' , function(e){
				e.preventDefault();
				if ($(this).hasClass('disable')) {
					return
				};
				var thisIndex = $(this).index();
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