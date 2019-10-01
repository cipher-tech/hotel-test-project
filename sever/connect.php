<?php 
require_once "config.php";

$connect = mysqli_connect("localhost", "root", "", "hotel");

if (!$connect){
    die("connection failed:". mysqli_connect_error());
}else{
    echo " ";
}
?> 