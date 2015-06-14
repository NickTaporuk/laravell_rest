StarManipulator = {
manipulate : function (startClass, endClass, medClass,ajax) {
		$("body").on('mouseover', '.' + startClass, function(e) {
			var star = $(this).closest('.b-star__menu').find('.' + startClass);
			
			if($(this).hasClass(startClass)) {
				var current = $(this).data('number')- 1,
                    med = 4 - current;
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
		
		$("body").on('mouseout' ,'.' + startClass, function(e) {
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
		
		$("body").on('click', '.' + startClass, function(e) {
			var star = $(this).closest('.b-star__menu').find('.' + startClass);
            var that = $(this);
			
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
                var filmId = $(this).closest('.some-id').data('item');
				$.ajax({
					url: '/films/addRating',
					method: 'post',
					data: {id : filmId, rating : current+1},
					success: function(data) {
                        if(that.closest('.check').hasClass('b-box__movie')) {
                            if(!that.closest('.check').hasClass('b-box__movie-active'))
                            that.closest('.b-box__movie').addClass('b-box__movie-active');
                        } else if(that.closest('.check').hasClass('b-movie')) {
                            if(!that.closest('.check').hasClass('b-movie-active')) {
                                that.closest('.check').addClass('b-movie-active');
                            }
                        }
                        $('.b-nav-menu__link-number').html(parseInt($('.b-nav-menu__link-number').html()) + parseInt(data));
                        $('.menu-link_quantity').html(parseInt($('.menu-link_quantity').html()) + parseInt(data));
					}
				});
			}
		});
	}
};