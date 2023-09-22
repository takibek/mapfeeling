<?php
$location="localhost";
$username="id20060549_map";
$password="f!-vw02Jua5jtvqV";
$database_name="id20060549_bilal";
    $connection=mysqli_connect($location,$username,$password,$database_name);
    if(mysqli_connect_errno()){
        die("there is a connection problem".mysqli_connect_error());
    }else{
      //  echo"connection good";
        
    }
    ?>