var connectionId;

$(function() {

    var onGetPorts = function(ports) {
	for (var i=0; i<ports.length; i++) {
	    console.log(ports[i]);
	}
    }

    var onOpen = function(connectionInfo) {
	// The serial port has been opened. Save its id to use later.
	connectionId = connectionInfo.connectionId;
	// Do whatever you need to do with the opened port.
    }

    var writeSerial = function(str) {
	chrome.serial.write(connectionId, str2ab(str), function() {});
    }

    // Convert string to ArrayBuffer
    var str2ab = function(str) {
	var buf = new ArrayBuffer(str.length);
	var bufView = new Uint8Array(buf);
	for (var i = 0; i < str.length; ++i) {
	    bufView[i] = str.charCodeAt(i);
	}
	return buf;
    }

    //chrome.serial.getPorts(onGetPorts);
    
    // Open the serial port /dev/ttyS01
    chrome.serial.open("COM8", {bitrate: 9800}, onOpen);

    $('.slider')
	.live('change',
	      function() {
		  var sval = $(this).children().val();
		  writeSerial(sval+"\r");
	      }
	     );
});