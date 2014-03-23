<?php
 
//Ajax通信ではなく、直接URLを叩かれた場合はエラーメッセージを表示
if (
        !(isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest') 
        && (!empty($_SERVER['SCRIPT_FILENAME']) && 'set.php' === basename($_SERVER['SCRIPT_FILENAME']))
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
        $users = null;
        //DBに接続
        $pdo = new PDO($dsn, $user, $password);
        $st = $pdo->prepare("INSERT INTO poses VALUES(?, ?, ?)");
        $motionid = $_POST['motionid'];//モーションID
        $poseid = $_POST['poseid'];//ポーズID
        $slpos = implode(',', $_POST['slpos']);//スライダーの値の配列をカンマ区切り文字に結合する

        $data = array($motionid, $poseid, $slpos);//データベースに追加するデータ

        //'poses' テーブルへ挿入する
        $st->execute($data);
}
catch (PDOException $e)
{
        //例外処理
        die('Error:' . $e->getMessage());
}