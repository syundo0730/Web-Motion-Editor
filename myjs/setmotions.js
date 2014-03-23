poseid = 0;

$(function(){
    
    $('#setPoseButton')
        .button()
        .click(function(event) {
            $.ajax({
                type:'POST', 
                url:'myphp/set.php',
                data: {
                    'motionid':selected_motion_idx,
                    'poseid':pose_num[selected_motion_idx],
                    'slpos':sliderpos
                },
                success: function(data){
                    var content = "<tr>";
                    content += "<td>Pose("+pose_num[selected_motion_idx]+"):</td>";
                    for (var i = 0; i < SERVO_AMOUNT; i++) {
                        content += "<td>"+sliderpos[i]+"</td>";
                    }
                    content += "</tr>";
                    $('#motionData').append(content);
                    pose_num[selected_motion_idx]++;
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) 
                {
                    //エラーメッセージの表示
                    alert('Error : ' + errorThrown);
                }
            });
        });
});


// var motionData  = 
// //返ってきたデータの表示
//                 var content = "";
                
//                 for (var i =0; i<data.length; i++) {
//                     content += "<tr>";
//                     var mid = data[i].motionid,
//                     pid = data[i].poseid;
//                     content += "<td>Pose("+pid+"):</td>";
//                     for (var j = 0; j < SERVO_AMOUNT; j++) {
//                         content += "<td>"+data[i].pose[j]+"</td>";
//                     }
//                     
//                 }
//                 content += "</tr>"
                
//                 motionData.html(content);
