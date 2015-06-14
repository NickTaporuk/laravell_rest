$(document).ready(function(){
	count();
	userNav();
	iconAnimate();
	sexChoise();
	scrolling();
	//languageNav();

$('.sidebar-close').click(function(){
	$(this).parent().animate({'right' : '-320px'});
});
//count
	function count() {
		$('.count').each(function () {
			$(this).prop('Counter',0).animate({
				Counter: $(this).text()
			}, {
				duration: 4000,
				easing: 'swing',
				step: function (now) {
					$(this).text(Math.ceil(now));
				}
			});
		});
	}
	function userNav() {
		$('.user').find('.name').on('click' , function(){
			$(this).toggleClass('opened').next().slideToggle(300);
		});
	}
	function sexChoise() {
		$('.personal-info').find('.radio-label').on('click' , function(){
			$('.personal-info').find('.radio-label').removeClass('checked');
			$(this).addClass('checked')
		});
	}
	function iconAnimate() {
		//var leftBtn = $('.left-btns .left-btn');
		//var i_btns = 0;
		//var loopleftBtns = setInterval(function(){
		//	leftBtn.eq(i_btns).addClass('show');
		//	i_btns++;
		//	if( i_btns >= leftBtn.size()) {
		//		clearInterval(loopleftBtns);
		//	}
		//}, 300);
	// Main Menu
		var mainLists = $('.main-menu li');
		var i = 0;
		var loop = setInterval(function(){
			mainLists.eq(i).addClass('show');
			i++;
			if( i >= mainLists.size()) {
				clearInterval(loop);
			}
		}, 300);
	}

	function scrolling() {
		$(document).scroll(function(){
			if ($(document).scrollTop() > 50) {
				$('.header-bottom').css('position' , 'fixed');
			} else {
				$('.header-bottom').css('position' , 'static')
			}
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
			console.log(thisData);
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
	(function (e) {
	e.fn.countdown = function (t, n) {
	function i() {
		eventDate = Date.parse(r.date) / 1e3;
		currentDate = Math.floor(e.now() / 1e3);
		if (eventDate <= currentDate) {
			n.call(this);
			clearInterval(interval)
		}
		seconds = eventDate - currentDate;
		days = Math.floor(seconds / 86400);
		seconds -= days * 60 * 60 * 24;
		hours = Math.floor(seconds / 3600);
		seconds -= hours * 60 * 60;
		minutes = Math.floor(seconds / 60);
		seconds -= minutes * 60;
		days == 1 ? thisEl.find(".timeRefDays") : thisEl.find(".timeRefDays");
		hours == 1 ? thisEl.find(".timeRefHours") : thisEl.find(".timeRefHours");
		minutes == 1 ? thisEl.find(".timeRefMinutes") : thisEl.find(".timeRefMinutes");
		seconds == 1 ? thisEl.find(".timeRefSeconds") : thisEl.find(".timeRefSeconds");
		if (r["format"] == "on") {
			days = String(days).length >= 2 ? days : "0" + days;
			hours = String(hours).length >= 2 ? hours : "0" + hours;
			minutes = String(minutes).length >= 2 ? minutes : "0" + minutes;
			seconds = String(seconds).length >= 2 ? seconds : "0" + seconds
		}
		if (!isNaN(eventDate)) {
			thisEl.find(".days").text(days);
			thisEl.find(".hours").text(hours);
			thisEl.find(".minutes").text(minutes);
			thisEl.find(".seconds").text(seconds)
		}
	}
	var thisEl = e(this);
	var r = {
		date: null,
		format: null
	};
	t && e.extend(r, t);
	i();
	interval = setInterval(i, 1e3)
	}
})(jQuery);

	function e() {
		var e = new Date;
		e.setDate(e.getDate() + 60);
		dd = e.getDate();
		mm = e.getMonth() + 1;
		y = e.getFullYear();
		futureFormattedDate = mm + "/" + dd + "/" + y;
		return futureFormattedDate
	}
	$(".sidebar-countdown").countdown({
		date: "29 May 2015 6:00:00", // Change this to your desired date to countdown to
		format: "on"
	});
});