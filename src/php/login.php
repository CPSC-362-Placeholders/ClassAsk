<?php

include("connect.php");

if(isset($_GET['email']) && $_GET['password']) {
    $email = $_GET['email'];
    $password = $_GET['password'];
    $query = "SELECT * FROM userdata WHERE email = '$email' AND password = '$password'";
    $result = mysqli_query($conn, $query);
    $count = mysqli_num_rows($result);

    if($count == 1) {
        echo "'$email' and '$password' found in database!";
    } else {
        echo "Doesn't exist";
    }
}
