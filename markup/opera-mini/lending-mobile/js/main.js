
$(document).ready(function(){
	languageNav();
	function languageNav() {
		$('.language').find('.current').on('click' , function(e){
			e.preventDefault();
			$(this).toggleClass('opened').next().slideToggle(300);
		});
	}
});
