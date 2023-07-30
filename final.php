<?php

$server = 'localhost';
$database = 'foodapp';
$username = 'root';
$password = '';

$conn = new mysqli($server, $username, $password, $database);

if ($conn->connect_error) {
 die("Connection failed: " . $conn->connect_error);
}

$fullname = $_POST['fullname'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$dob=$_POST['dob'];
$addresss=$_POST['addresss'];
$username=$_POST['username'];
$passwords=$_POST['passwords'];
$confirmpassword=$_POST['confirmpassword'];
$dietarypreference=$_POST['dietarypreference'];
$count=$_POST['count'];
$deliveryaddress=$_POST['deliveryaddress'];
$deliverytime=$_POST['deliverytime'];
$orders=$_POST['orders'];
$payment=$_POST['payment'];



$sql = "INSERT INTO food (fullname, email, phone,dob,addresss,username,passwords,confirmpassword,dietarypreference,count,deliveryaddress,deliverytime,orders,payment) 
VALUES ('$fullname','$email','$phone','$dob','$addresss','$username','$passwords','$confirmpassword','$dietarypreference','$count',
'$deliveryaddress','$deliverytime','$orders','$payment')";

if ($conn->query($sql) === TRUE) { 
    header('Location:thankyou.html');
} else {
 echo "Error";
}

$conn->close();
?>