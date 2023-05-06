<?php
include("connect.php");

if (isset($_POST['reply']) && isset($_POST['replyToId']) && isset($_POST['baseThreadId'])) {
    $reply = $_POST['reply'];
    $replyToId = $_POST['replyToId'];
    $baseThreadId = $_POST['baseThreadId'];
    $replyId = generateRandomId(10);

    $checkIdQuery = "SELECT * FROM threadreplies WHERE reply_id='$replyId'";
    $checkIdResult = mysqli_query($conn, $checkIdQuery);

    while (mysqli_num_rows($checkIdResult) != 0) {
        $replyId = generateRandomId();
        $checkIdResult = mysqli_query($conn, $checkIdQuery);
    }

    $newReplyQuery = "INSERT INTO threadreplies VALUES ('$reply', '$replyToId', '$replyId', '$baseThreadId')";
    $newReplyResult = mysqli_query($conn, $newReplyQuery);
    echo 'done!';
}

function generateRandomId($length = 10)
{
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $string = '';
    for ($i = 0; $i < $length; $i++) {
        $string .= $characters[rand(0, strlen($characters) - 1)];
    }
    return $string;
}