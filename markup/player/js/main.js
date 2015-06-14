$(document).ready(function(){
// Trailer List //
	trailerList();
	function trailerList() {
		$('.trailer-container .trailer').on('click' , function(){
			$(this).addClass('active').siblings().removeClass('active');
		});
	}
// Trailer List end //

// Player //
	videoPlayer();
	function videoPlayer() {
		$('body, html').on('click', function(){
			$('.player .right-panel').find('.dropdawn-wrap').removeClass('active');
			$('.player .right-panel').find('.btn').removeClass('opened');
			$('.player .right-panel').find('.nav-dropdawn').slideUp();
		});
		$('.player-nav-bottom').on('click', function() {
			return false
		})
		$('.player .right-panel').find('.btn').on('click' , function(){
			$('.player .right-panel').find('.btn').not(this).removeClass('opened').next().slideUp().parent().removeClass('active');
		  	$(this).toggleClass('opened').parent().toggleClass('active').find('.nav-dropdawn').slideToggle(300);
		});

		$('.player').find('.play').on('click', function(){
			$(this).hide();
	    	var $player =  $(this).closest('.player');
	    	var $video = $(this).parent().find('video')[0];
			hideItems($player);
			$(this).closest('.player').find('.socials, .video-info').addClass('started');
			$(this).closest('.player').find('video').removeClass('paused');
	        $video.play();
		});
	    $('.player').find('.play-nav').click(function() {
	    	var $video = $(this).closest('.player').find('video')[0];
	    	var $player =  $(this).closest('.player');
	    	hideItems($player);
	    	$player.find('.play').toggle();
	        $video.paused ? $video.play() : $video.pause();
	    	$(this).parents('.player').find('video').toggleClass('paused');
	    });
	    $('.player').find('video').on('click', function(){
	    	var $video = $(this).closest('.player').find('video')[0];
	    	var $player =  $(this).closest('.player');
			$player.find('video').addClass('paused');
			$player.find('.play').show();
	        $video.pause();
	    	hideItems($player);
	    });
	    function hideItems(its) {
	    	its.find('.hidden-item').toggle();
	    }
	}
// Player end //
});