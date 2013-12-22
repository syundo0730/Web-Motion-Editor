var SERVO_AMOUNT = 19;

var sliderpos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

$(function() {
    for (var i = 0; i < SERVO_AMOUNT; i++) {
	$('<div class="slidebox"><label>'+(i+1)+'</label><input type="text" class="amount"><div class="slider"></div></div>')
	    .appendTo('#sidebar');
    }
    $('.slidebox').draggable();
    $('.slider').slider({
        min:0,
        max:Math.PI,
        step:0.1,
        slide:function(event, ui){
            var i = $('#sidebar .slider').index(this);
            sliderpos[i] = ui.value;
            $(this).prev('.amount').val(ui.value);
        }
    });
    
});
