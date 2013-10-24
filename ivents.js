$(function() {
    
    // $('.slider')
    // 	.live('change',
    // 	      function() {
    // 		  var sval = $(this).children().val();
    // 		  //sendval(sval)
    // 		  sendserial(sval);
    // 	      }
    // 	     );

    $('#home')
	.live('taphold',
	      function () {
		  $('#msg').text($(this).attr('id') + "を長押ししたぞ！");
	      }
	     );

});