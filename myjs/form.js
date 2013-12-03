var SERVO_AMOUNT = 20

var jointpos = 0;

$(function() {
    for (var i = 0; i < SERVO_AMOUNT; i++) {
	$('<div class="slider"></div>')
	    .appendTo('#sidebar');
    }
    $('.slider').slider({
        min:0,
        max:Math.PI,
        step:0.1,
        slide:function(event, ui){
            jointpos = ui.value;
        }
    });
});
