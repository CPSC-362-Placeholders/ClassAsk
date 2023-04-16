<?php
    include("connect.php");


    $query = "SELECT class_name FROM classlist";
    $result = mysqli_query($conn, $query);
   
    $classlist = array();

    if ($result!= null){
        while ($row = mysqli_fetch_array($result)){
            array_push($classlist, $row[0]);
        }
    }
    echo json_encode($classlist);               