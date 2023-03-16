<?php
header("Access-Control-Allow-Origin: *");
$host = 'localhost:3306';
$user = 'ismailhasan';
$pass = 'Stripes12';
$db = 'classask';

$conn = mysqli_connect($host, $user, $pass, $db);

if($conn -> connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if(isset($_GET['email']) && $_GET['password']) {
    $email = $_GET['email'];
    $password = $_GET['password'];
    $query = "INSERT INTO userdata (email, password) VALUES ('$email', '$password')";
    mysqli_query($conn, $query);
}
