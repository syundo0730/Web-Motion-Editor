$(function(){
    for (var i = 0; i < SERVO_AMOUNT; i++) {
        var cookie_top = $.cookie('slider_'+i+'_top');//スライダーの位置を保存したクッキーを読み込む
        var cookie_left = $.cookie('slider_'+i+'_left');
        if ( (cookie_top != null) && (cookie_left != null) ) {//クッキーが存在すればスライダーの位置を動かす
            $('#sidebar .slidebox').eq(i).css({top: cookie_top, left: cookie_left});
        }
    }
    $('.slidebox').hover(
        function() {
            var top = $(this).css('top');//スライダーの位置を取得
            var left = $(this).css('left');
            var idx = $('#sidebar .slidebox').index(this);//選択されたスライダーの番号取得
            $.cookie('slider_'+idx+'_top', top, { expires: 30 });//有効期限付きでクッキーに保存
            $.cookie('slider_'+idx+'_left', left, { expires: 30 });
            console.log("yeah");
        }
    )
});
