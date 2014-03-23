var motion = [];//モーションデータ
var pose_num = [];//モーション番号ごとのポーズ数
var speed = [];

var motion_num = 0;

var selected_motion_idx = 0;//編集中のモーション番号
var selected_pose_idx = null;//編集中のモーションの中の編集中のポーズ番号

// var home = [20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20];//ホームポジション
// var def_speed = 50;

// function init() {
//     pushmotion();
    
// }

// //新しいモーションを追加するときのデータ処理
// //ホームポジションを含んだモーションを作成する
// function pushmotion() {
//     pose_num.push(1);
//     speed[motion_num] = new Array();
//     speed[motion_num].push(def_speed);
//     motion[motion_num] = new Array();
//     motion[motion_num].push(home);
//     ++motion_num;
// }

// //motion_idx番目のモーションに新しくポジションを追加
// function pushpose(motion_idx, pose) {
//     ++pose_num[motion_idx];
//     speed[motion_idx].push(def_speed);
//     motion[motion_idx].push(pose);
// }

// //指定の番号のポーズデータを書き換える
// function setpose(motion_idx, pose_idx, pose) {
//     motion[motion_idx][pose_idx] = pose;
// }

// // speed
// function setspeed(motion_idx, pose_idx, spd) {
//     speed[motion_idx][pose_idx] = spd;
// }

// //ポーズ番号よりmotionデータのインデックスを引っ張ってくる
// //.index()がうまく使えればこんなの要らないと思うのだが......
// function getposeindex(motion_idx, _pose_idx) {
//     var shift = 0;
//     for(var i = 0; i < motion_idx; ++i) {
// 	shift += pose_num[i];
//     }
//     var pose_idx = _pose_idx - shift;
//     return pose_idx;
// }

// function showpose(motion_idx, pose_idx) {
//     //ポーズ編集エリアの値を変える
    
//     for(var i = 0; i < SERVO_AMOUNT; ++i) {
//     	$('div.slider').eq(i).children().val(motion[motion_idx][pose_idx][i]);
//     }
//     $('.slider input[type=number]').slider('refresh');
//     $('#speed').text('speed:'+ speed[motion_idx][pose_idx])
// }

// function getslider() {
//     //ポーズ編集エリアの値を得る
//     var pose = [];
//     for(var i = 0; i < SERVO_AMOUNT; ++i) {
// 	var val = $('div.slider').eq(i).children().val();
// 	val = Number(val);
// 	pose.push(val);
//     }
//     //$('#msg').text(pose[19]);
//     return pose;
// }

// function pushmotionUI(name) {
//     $('<div class="motion" data-role="collapsible" data-content-theme="c"></div>')
// 	.html('<h3>'+name+'</h3><div class="poselist"><div class="pose"><input type="range" value="50" min="0" max="100"/></div></div>')
// 	.appendTo('.motionlist')
// 	.parent().trigger('create');
// }

// function pushposeUI(motion_idx) {
//     var pose = $('<div class="pose"></div>').html('<input type="range" value="50" min="0" max="100"/>')
//     $('.poselist').eq(motion_idx).append(pose).trigger('create');
// }

// $(function() {
//     init();

//     $('#addmotion')
// 	.live('click',
// 	      function() {
// 		  var name = "Motion0";
// 		  pushmotionUI(name);
// 		  pushmotion();
// 	      });

//     $('#addpose')
// 	.live('click',
// 	      function() {
// 		  if(selected_motion_idx != null) {
// 		      var pose = getslider();
// 		      pushposeUI(selected_motion_idx)
// 		      pushpose(selected_motion_idx, pose);
// 		  } else {
// 		      $('#msg').text('モーションを選択してください');
// 		  }
// 	      });

//     $('#setpose')
// 	.live('click',
// 	      function() {
// 		  if(selected_pose_idx != null) {
// 		      var pose = getslider();
// 		      setpose(selected_motion_idx, selected_pose_idx, pose);
// 		  } else {
// 		      $('#msg').text('ポーズを選択してください');
// 		  }
// 	      });
    
//     $('.motion')
//     	.live('expand', function () {
//     	    selected_motion_idx = $('div .motion').index(this);
// 	    $('#msg').text('モーションID:'+selected_motion_idx);
//     	})
// 	.live('collapse', function () {
// 	    selected_motion_idx = null;
// 	    selected_pose_idx = null;
// 	    $('#msg').text('モーションID:'+selected_motion_idx+',ポーズID:'+selected_pose_idx);
// 	});

//     $('div.pose')
//     	.live('click change', function () {
//     	    var pose_idx = $('div .pose').index(this);
// 	    selected_pose_idx = getposeindex(selected_motion_idx, pose_idx);

// 	    var spd = Number( $(this).children().val() );
// 	    setspeed(selected_motion_idx, selected_pose_idx, spd);
// 	    showpose(selected_motion_idx, selected_pose_idx);
// 	    //$('#msg').text('モーションID:'+selected_motion_idx+',ポーズID:'+selected_pose_idx+'natural id:'+pose_idx);
// 	    //$(this).removeClass("ui-body-b").addClass("ui-body-a").attr('data-theme', 'a');
//     	});

// });

$(function(){
   $(function() {
       $('#motionData tr').click(function(){
           console.log('hello');
       });
   });
});
