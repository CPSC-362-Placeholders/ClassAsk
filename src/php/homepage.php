<?php
    include("connect.php");

    $query = "SELECT * FROM subscribedcourses";
    $result = mysqli_query($conn, $query);
    
    $email = $_GET['email'];
    $subscribedcourses = array();

    if ($result!= null){
        while ($row = mysqli_fetch_array($result)){
            if($row[0] == $email){
                array_push($subscribedcourses, $row[1]);
            }
            
        }
    }
    else{
        echo "Doesn't exist";
    }
    echo json_encode($subscribedcourses);               