<?php
include("connect.php");

$postId = $_GET['id'];
$query = "SELECT content FROM threadreplies WHERE base_thread_id='$postId'";
$result = mysqli_query($conn, $query);
$replies = array();

if ($result != null) {
    while ($row = mysqli_fetch_array($result)) {
        array_push($replies, $row[0]);
    }
    echo json_encode($replies);
} else {
    echo "no post has been made";
}
