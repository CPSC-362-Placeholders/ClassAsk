<?php
include("connect.php");   

    $className = $_POST['name'];
    $email = $_POST['email'];
    $query = "INSERT INTO subscribedcourses (email, section_number) VALUES ( '$email', '$className')";
    if(mysqli_query($conn,$query))
        {
            echo "subscribed successfully";
        }
