<?php
include("connect.php");

$className = $_POST['name'];
$email = $_POST['email'];

$checkQuery = "SELECT * FROM subscribedcourses WHERE email='$email' AND section_number='$className'";
$checkResult = mysqli_query($conn, $checkQuery);
$count = mysqli_num_rows($checkResult);

if ($count != 0) {
    $query = "DELETE FROM subscribedcourses WHERE email='$email' AND section_number='$className'";
    mysqli_query($conn, $query);
    echo "remove executed";
}
else{
    echo "not subbed";
}



