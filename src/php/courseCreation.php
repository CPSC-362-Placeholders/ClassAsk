<?php
include("connect.php");
if(isset($_POST['className']) && $_POST['classCode'] && isset($_POST['classNumber'])) {
    $className = $_POST['className'];
    $classCode = $_POST['classCode'];
    $classNumber = $_POST['classNumber'];

    $query = "INSERT INTO classlist (class_name, class_code, section_number, subject_name, semester) VALUES ('$className', '$classCode', '$classNumber', ' ',' ')";
    mysqli_query($conn, $query);
    echo "done";
}

