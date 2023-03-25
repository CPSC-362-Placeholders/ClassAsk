<?php
session_start();
include("connect.php");

if(isset($_GET['email']) && $_GET['password']) {
    $email = $_GET['email'];
    $password = $_GET['password'];
    $query = "SELECT * FROM userdata WHERE email = '$email' AND password = '$password'";
    $result = mysqli_query($conn, $query);
    $count = mysqli_num_rows($result);

    if($count == 1) {
        $array = mysqli_fetch_array($result);
        $_SESSION['email'] = $array[0];
        $_SESSION['first_name'] = $array[2];
        $_SESSION['last_name'] = $array[3];
        echo json_encode($_SESSION);
    } else {
        echo "Doesn't exist";
    }
}
