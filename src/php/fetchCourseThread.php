<?php
include 'connect.php';

$courseId = $_POST['id'];
$query = "SELECT class_name FROM classlist WHERE section_number='$courseId'";
$result = mysqli_query($conn, $query);

if($result) {
    echo mysqli_fetch_array($result)[0];
}
