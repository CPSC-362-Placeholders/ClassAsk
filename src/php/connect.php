<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Credentials: true");
$host = 'localhost:3306';
$user = 'root';
$pass = '';
$db = 'classask';

$conn = mysqli_connect($host, $user, $pass, $db);

if($conn -> connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


