<?php
include("connect.php");

if(ISSET($_POST['courseId']) && ISSET($_POST['title']) && ISSET($_POST['description'])) {
    $courseId = $_POST['courseId'];
    $title = $_POST['title'];
    $description = $_POST['description'];
    $postId = generateRandomId();

    $checkIdQuery = "SELECT * FROM threadposts WHERE post_id='$postId'";
    $checkIdResult = mysqli_query($conn, $checkIdQuery);

    while(mysqli_num_rows($checkIdResult) != 0) {
        $postId = generateRandomId();
        $checkIdResult = mysqli_query($conn, $checkIdQuery);
    }

    $newPostQuery = "INSERT INTO threadposts VALUES ('$courseId', '$title', '$description', '$postId')";
    $newPostResult = mysqli_query($conn, $newPostQuery);
    echo 'done';

}

function generateRandomId($length = 10) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $string = '';
    for ($i = 0; $i < $length; $i++) {
        $string .= $characters[rand(0, strlen($characters) - 1)];
    }
    return $string;
}