<?php
include("connect.php");
if(isset($_POST['email']) && $_POST['password'] && isset($_POST['firstName']) && isset($_POST['lastName'])) {
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $query = "INSERT INTO userdata (email, password, first_name, last_name) VALUES ('$email', '$password', '$firstName', '$lastName')";
    mysqli_query($conn, $query);
    echo "done";
}
