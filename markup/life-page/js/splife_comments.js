$(function(){
    var step = 20;
    var sort_comment = 'desc';
    $('.send').on('click', function (e){
        e.preventDefault();
        var message = $('#splife-message-send').val().trim(),
            id_splife  = $('#splife-some-id').data('item');

        if(message.length < 3) {
            return false;
        }

        $.ajax({
            url: '/splife/add_comment',
            method: 'post',
            data: {id_splife : id_splife, message : message},
            success: function(data) {
                data = JSON.parse(data)
                if(data.status == 0){
                    alert(data.content);
                }else{
                    $('.reviews-wrap').prepend(data.content);
                    $('.review-comments_count').html(parseInt($('.review-comments_count').html())+1);
                }
                $('#splife-message-send').val('');

            }
        });
    });

    $('.review-leave_comment').on('click',function(e){
        e.preventDefault();
        var id_splife  = $('#splife-some-id').data('item');
        sort_comment = (sort_comment == 'desc')?'asc':'desc';
        $.ajax({
            url: '/splife/get_comment',
            method: 'post',
            data: {id_splife: id_splife, sort: sort_comment,ajax:1},
            success: function(data) {
                $('.reviews-wrap').html(data);
            }
        });
    });

    //$('.show-other a.show').on('click',function(){
    //    $.ajax({
    //        url: '/news/addComment',
    //        method: 'post',
    //        data: {id_news : id_news, message : message},
    //        success: function(data) {
    //            alert(data);
    //            $('#news-message-send').val('');
    //        }
    //    });
    //});

});
