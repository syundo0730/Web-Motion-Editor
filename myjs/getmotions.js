$(document).ready(
    function(){
        /**
         * Ajax通信メソッド
         * @param type      : HTTP通信の種類
         * @param url       : リクエスト送信先のURL
         * @param dataType  : データの種類
         */
        $.ajax({
            type: "POST",
            url: "myphp/get.php",
            dataType: "json",
            // 成功した場合
            success: function(data, dataType) {
                //結果が0件の場合
                if(data == null) alert('データが0件でした');

                pose_num[selected_motion_idx] = data['pose_num'];

                var num = pose_num[selected_motion_idx];

                var motionData  = $('#motionData');
                //返ってきたデータの表示
                var content = "";
                
                for (var i = 0; i<num; i++) {
                    content += "<tr>";
                    var mid = data[i].motionid,
                    pid = data[i].poseid;
                    content += "<td>Pose("+pid+"):</td>";
                    for (var j = 0; j < SERVO_AMOUNT; j++) {
                        content += "<td>"+data[i].pose[j]+"</td>";
                    }
                    content += "</tr>";
                }
                
                motionData.html(content);
            },
            //失敗した場合
            error: function(XMLHttpRequest, textStatus, errorThrown) 
            {
                //エラーメッセージの表示
                alert('Error : ' + errorThrown);
            }
        });
    }
);
