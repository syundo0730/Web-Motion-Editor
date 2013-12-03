function setFileUrl(id, fname, content) {
    console.log("window.File=" + window.File);
    console.log("window.requestFileSystem=" + window.requestFileSystem);
    console.log("window.webkitRequestFileSystem=" + window.webkitRequestFileSystem);

    window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;

    window.requestFileSystem(TEMPORARY, 1024*1024, function(fileSystem){
        // ファイル新規作成（上書き)
        fileSystem.root.getFile(fname, {create: true, exclusive: false}, function(fileEntry){
            // ファイル書き込み
            fileEntry.createWriter(function(fileWriter){
                var blob = new Blob([ content ], { "type" : "text/plain" });
                fileWriter.write(blob);
                // ファイル書き込み成功イベント
                fileWriter.onwriteend = function(e){
                    console.log("ファイル書き込み成功");
                };
                // ファイル書き込み失敗イベント
                fileWriter.onerror = function(e){
                    console.log("ファイル書き込み失敗");
                };
            });
            
            // リンクへ紐付ける
            $("#" + id).attr("href", fileEntry.toURL());

        }, function(error){
            console.log("error.code=" + error.code);
        });
    });
}

function setBlobUrl(id, content) {
    // 指定されたデータを保持するBlobを作成する。
    var blob = new Blob([ content ], { "type" : "text/plain" });

    // Aタグのhref属性にBlobオブジェクトを設定する。
    window.URL = window.URL || window.webkitURL;
    $("#" + id).attr("href", window.URL.createObjectURL(blob));
}

function makeMotionString(mot) {
    var data = "";
    for (i = 0; i < mot.length; ++i) {
	for (j = 0; j < mot[i].length; ++j) {
	    var line = mot[i][j];
	    line += "\n";
	    data += line;
	}
    }
    return data;
}

function setMotionFileUrl() {
    //setFileUrl("download", $("#fname").val(), $("#content").val());
    //var line = motion.toString();
    
    //var line = 'hello';
    var line = makeMotionString(motion);
    //setBlobUrl("download", line);
    setFileUrl("download", "motion.csv", line);
}

$(function() {
    // setSampleFileUrl();

    // $("#fname").keyup(function(){
    // 	setSampleFileUrl();
    // });

    // $("#content").keyup(function(){
    // 	setSampleFileUrl();
    // });
    $('#dbtn')
	.live('click',
	      function() {
		  setMotionFileUrl();
	      });
});