<?php
//from homepage
include("connect.php");

// need to check if the database has entries from a specific course id and only spit those ones out

if (isset($_GET['titles'])) { 
    $titles = $_GET['titles'];
    $decoded_titles = json_decode($titles);
    $threadPosts = array();

    foreach ($decoded_titles as $titles) {
        $query = "SELECT title FROM threadposts WHERE course_id='$courseId'
        $result = mysqli_query($conn, $query);";//WHERE course_id='$courseId'??
        array_push($threadPosts, mysqli_fetch_array($result)[0]);
    }
    echo json_encode($threadPosts);

} else {
    echo 'no posts have been made yet';
}
