<?php
include("connect.php");
if(isset($_POST['className']) && $_POST['classCode'] && isset($_POST['classNumber'])) {
    $className = $_POST['className'];
    $classCode = $_POST['classCode'];
    $classNumber = $_POST['classNumber'];

    $checkQuery = "SELECT * FROM classlist WHERE class_name='$className' AND class_code='$classCode' AND section_number='$classNumber'";
    $checkResult = mysqli_query($conn, $checkQuery);
    $count = mysqli_num_rows($checkResult);
    
    if ($count != 0) {
        echo "Already created";
        return;
    } else {
        $query = "INSERT INTO classlist (class_name, class_code, section_number, subject_name, semester) VALUES ('$className', '$classCode', '$classNumber', ' ',' ')";
        mysqli_query($conn, $query);
    }
}

