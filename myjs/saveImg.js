$(function(){
    $('#saveImageButton').button().click(
        function() {
            //var png = document.getElementsByTagName('canvas')[0].toDataURL('image/png');
            var canvas = $('canvas').get(0);
            var context = canvas.getContext("experimental-webgl", {preserveDrawingBuffer: true});
            var img = canvas.toDataURL('image/png');
            window.open(img, 'save');
        }
    )
});
