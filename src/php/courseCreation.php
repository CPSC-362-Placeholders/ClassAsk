<?php
include("connect.php");
if(isset($_POST['className']) && $_POST['classCode']) {
    $className = $_POST['className'];
    $classCode = $_POST['classCode'];

    $checkQuery = "SELECT * FROM classlist WHERE class_name='$className' AND class_code='$classCode'";
    $checkResult = mysqli_query($conn, $checkQuery);
    $count = mysqli_num_rows($checkResult);
    
    if ($count != 0) {
        echo "Already created";
        return;
    } else {
        $query = "INSERT INTO classlist (class_name, class_code, section_number, subject_name, semester) VALUES ('$className', '$classCode', null, null, null)";
        $result = mysqli_query($conn, $query);
    }
}

