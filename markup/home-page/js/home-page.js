$(document).ready(function(){
	
//count
$('.count').each(function () {
	$(this).prop('Counter',0).animate({
		Counter: $(this).text()
	}, {
		duration: 4000,
		easing: 'swing',
		step: function (now) {
			//console.log('now this:',now);
			$(this).text(Math.ceil(now));
		}
	});
});
/* left icons */
leftBtns();
function leftBtns() {
	var leftBtn = $('.left-btns .animate-item');
	var i = 0;
	setTimeout(function(){
		var loopBtns = setInterval(function(){
			if ($(window).width() < 1023) {
				return
			}
			$(window).resize(function(){
				if ($(window).width() < 1023) {
					return
				}
			});
			leftBtn.eq(i).addClass('show');
			i++;
			if( i >= mainLists.size()) {
				clearInterval(loopBtns);
			}
		}, 500);
	}, 3000);
		$('.left-btns .sp-question').animate({'top' : '0','opacity' : '1'}, 500, function(){
			$(this).addClass('show-first');
		});
}
/* left icons end */

// Main Menu
var mainLists = $('.main-menu li');
var i = 0;
var loop = setInterval(function(){
	mainLists.eq(i).addClass('show');
	i++
	if( i >= mainLists.size()) {
		clearInterval(loop);
	}
}, 500);
// timer 
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
	$("#countdown").countdown({
		date: "1 September 2015 00:00:00", // Change this to your desired date to countdown to
		format: "on"
	});
	$(".sidebar-countdown").countdown({
		date: "29 May 2015 6:00:00", // Change this to your desired date to countdown to
		format: "on"
	});
});