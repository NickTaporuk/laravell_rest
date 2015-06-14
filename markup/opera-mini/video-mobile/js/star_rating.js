StarManipulator = {
manipulate : function (startClass, endClass, medClass,ajax) {
		$('.' + startClass).on('mouseover', function(e) {
			var star = $(this).closest('.b-star__menu').find('.' + startClass);
			
			if($(this).hasClass(startClass)) {
				var current = $(this).data('number')- 1,
                    med = 4 - current;
                console.log(current);
				star.removeClass(endClass);
				for(i = current; i >= 0; i--) {
					$(star[i]).addClass(endClass);
				}

                if(medClass) {
                    for(i = current + 1; i <= 4; i++) {
                        $(star[i]).addClass(medClass);
                    }
                }
			}
		});
		
		$('.' + startClass).on('mouseout', function(e) {
			var star = $(this).closest('.b-star__menu').find('.' + startClass);
			if($(this).hasClass(startClass)) {
                if(!star.hasClass('active')) {
                    star.removeClass(medClass);
                }
				for(i = 4; i >= 0; i--) {
					if(!$(star[i]).hasClass('active')) {
						$(star[i]).removeClass(endClass);
					} else {
						$(star[i]).addClass(endClass);
					}
				}
			}
		});
		
		$('.' + startClass).on('click', function(e) {
			var star = $(this).closest('.b-star__menu').find('.' + startClass);
			
			if($(this).hasClass(startClass)) {
				var current = $(e.target).data('number')- 1,
                    med = 5 - current;
                star.removeClass('active');
				for(i = current; i >= 0; i--) {
					$(star[i]).addClass('active');
				}

                if(medClass) {
                    for(i = current + 1; i <= 4; i++) {
                        $(star[i]).addClass(medClass);
                    }
                }
			}
			
			if(ajax) {
				var filmId = $('#some-id').data('item');
                console.log(filmId); return false;

				$.ajax({
					url: '/films/addRating',
					method: 'post',
					data: {id : filmId, rating : current+1},
					success: function(data) {
						console.log(current);
					}
				});
			}
		});
	}
};