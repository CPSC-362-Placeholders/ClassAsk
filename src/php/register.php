<?php
include("connect.php");
if(isset($_GET['email']) && $_GET['password']) {
    $email = $_GET['email'];
    $password = $_GET['password'];
    $query = "INSERT INTO userdata (email, password) VALUES ('$email', '$password')";
    mysqli_query($conn, $query);
}
