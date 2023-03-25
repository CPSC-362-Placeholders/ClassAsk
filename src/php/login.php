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
        $_SESSION['email'] = $email;
        echo var_dump(session_id());
    } else {
        echo "Doesn't exist";
    }
}
