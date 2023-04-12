<?php
include("connect.php");   

    if(isset($_POST['submit']))
    {
        $name = $_GET['firstName'];
        $section_number = $_GET['section_number'];
         $query = "INSERT INTO subscribedcourses (session, section_number) VALUES ( '$name', '$section_number')";
          if(mysqli_query($con,$query))
        {
            echo '<script>alert("course subscribed to successfully")</script>';
        }
    }              