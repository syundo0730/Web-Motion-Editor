<?php
 
//Ajax通信ではなく、直接URLを叩かれた場合はエラーメッセージを表示
if (
        !(isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest') 
        && (!empty($_SERVER['SCRIPT_FILENAME']) && 'get.php' === basename($_SERVER['SCRIPT_FILENAME']))
        ) 
{
        die ('このページは直接ロードしないでください。');
}
 
//接続文字列
$dsn = 'mysql:dbname=robotdb;host=localhost;charset=utf8';
//ユーザ名
$user = 'root';
//パスワード
$password = '';
 
try
{
        //nullで初期化
        $data = null;
        //DBに接続
        $dbh = new PDO($dsn, $user, $password);
        //'poses' テーブルのデータをすべて取得する
        $stmt = $dbh->query('select * from poses');

        //ポーズの数のカウンタ
        $pose_num = 0;
     
        //取得したデータを配列に格納

        while ($row = $stmt->fetchObject())
        {
                $data[] = array(
                        'motionid'=> $row->motionid,//モーション番号
                        'poseid'=> $row->poseid,//ポーズ番号
                        'pose'=> explode(',', $row->pose)//ポーズデータをカンマ区切りでパースして配列にする
                        );
                $pose_num++;
        }
        $data['pose_num']  = $pose_num;
     
        //JSON形式で出力する
        header('Content-Type: application/json');
        echo json_encode( $data );
        exit;
}
catch (PDOException $e)
{
        //例外処理
        die('Error:' . $e->getMessage());
}