<?php
include 'connect.php';

$courseId = $_POST['id'];
$query = "SELECT class_name FROM classlist WHERE class_code='$courseId'";
$result = mysqli_query($conn, $query);

if($result) {
    echo mysqli_fetch_array($result)[0];
}
