var SERVO_AMOUNT = 20

$(function() {
    
    for (var i = 0; i < SERVO_AMOUNT; i++) {
	$('<div class="slider"></div>')
	    .html('<input type="range" value="50" min="0" max="100"/>')
	    .appendTo('.ui-block-a')
	    .trigger('create');
    }
});