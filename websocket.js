var socket;

function sendval(val) {
    socket.send(val);
}

$(function() {
    
    socket = new WebSocket("ws://localhost:8800/echo");

    socket.onopen = function(e){
	//alert("open websocket!");
	$('#msg').text("open websocket");
    }

    socket.onmessage = function(e){
	$('#msg').text("送られたメッセージ：" + e.data);
    }

    socket.onerror = function(e){
	alert("error!!");
    }

    socket.onclose = function(e){
	alert("close websocket.");
    }

});