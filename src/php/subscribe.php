<?php
include("connect.php");   

        $name = {name};//can i do that lol
        $section_number = $_GET['section_number'];
         $query = "INSERT INTO subscribedcourses (session, section_number) VALUES ( '$name', '$section_number')";
        
         if(mysqli_query($con,$query))
        {
            echo alert("course subscribed to successfully");
        }