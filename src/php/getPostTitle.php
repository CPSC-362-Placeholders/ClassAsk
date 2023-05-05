<?php
include("connect.php");

$courseId = $_GET['id'];
$query = "SELECT title FROM threadposts WHERE post_id='$courseId'";
$result = mysqli_query($conn, $query);

if ($result != null) {
    echo mysqli_fetch_array($result)[0];
} else {
    echo "no post has been made";
}
