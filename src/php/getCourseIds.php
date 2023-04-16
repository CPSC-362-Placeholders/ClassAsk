<?php
include "connect.php";

if (isset($_GET['courses'])) {
    $courses = $_GET['courses'];
    $decoded_courses = json_decode($courses);
    $courseIds = array();

    foreach ($decoded_courses as $course) {
        $query = "SELECT section_number FROM classlist WHERE class_name='$course'";
        $result = mysqli_query($conn, $query);
        array_push($courseIds, mysqli_fetch_array($result)[0]);
    }
    echo json_encode($courseIds);

} else {
    echo 'courses not found';
}


