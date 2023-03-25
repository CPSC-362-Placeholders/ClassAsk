<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
session_start();
echo $_SESSION['email'];

