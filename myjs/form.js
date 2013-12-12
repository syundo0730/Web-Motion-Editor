var SERVO_AMOUNT = 19;

var sliderpos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

$(function() {
    for (var i = 0; i < SERVO_AMOUNT; i++) {
	$('<div class="slider"></div>')
	    .appendTo('#sidebar');
    }
    $('.slider').draggable({
        cancel:'.ui-slider-handle'
    }).slider({
        min:0,
        max:Math.PI,
        step:0.1,
        slide:function(event, ui){
            var i = $('#sidebar .slider').index(this);
            sliderpos[i] = ui.value;
        }
    });
    
});
