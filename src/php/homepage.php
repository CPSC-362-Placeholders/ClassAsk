<?php
    include("connect.php");

    $email = $_GET['email'];
    $query = "SELECT * FROM subscribedcourses WHERE email = '$email'";
    $result = mysqli_query($conn, $query);

    $subscribedcourses = array();

    if ($result!= null){
        while ($row = mysqli_fetch_array($result)){
            array_push($subscribedcourses, $row[1]);
        }
        echo json_encode($subscribedcourses);
    }
    else{
        echo "Doesn't exist";
    }
