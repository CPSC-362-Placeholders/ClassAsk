<?php
include("connect.php");   

if(isset($_POST['saveSelect']))
{
    $name = $_POST['name'];
    $section_number = $_GET['section_number'];
    $query = "INSERT INTO subscribedcourses (session, section_number) VALUES ( '$name', '$section_number')";
    //mysqli_query($con, $query);
    if(mysqli_query($con,$query))
        {
            echo alert("course subscribed to successfully");
        }
}