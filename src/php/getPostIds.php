<?php
include("connect.php");

$courseId = $_GET['id'];
$query = "SELECT post_id FROM threadposts WHERE course_id='$courseId'";
$result = mysqli_query($conn, $query);
$ids = array();

if ($result != null) {
    while ($row = mysqli_fetch_array($result)) {
        array_push($ids, $row[0]);
    }
    echo json_encode($ids);
} else {
    echo "no post has been made";
}
