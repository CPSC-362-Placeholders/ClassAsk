<?php
include("connect.php");

    $courseId = $_GET['id'];
    $query = "SELECT title FROM threadposts WHERE course_id='$courseId'";
    $result = mysqli_query($conn, $query);
    $threadPosts = array();

    if ($result!= null){
        while ($row = mysqli_fetch_array($result)){
            array_push($threadPosts, $row[0]);
        }
        echo json_encode($threadPosts);
    }
    else{
        echo "no post has been made";
    }
