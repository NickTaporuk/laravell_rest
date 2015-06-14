$(document).ready(function(){
// likes -+ end //
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
	$('.event-settings_close').on('click', function(){
		$(this).parent().slideUp();
	});
});