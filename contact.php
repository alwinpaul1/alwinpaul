<?php
//get data from form  
$name = $_POST['name'];
$email= $_POST['email'];
$subject=$_POST['subject']
$message= $_POST['message'];
$to = "alwinpaul4040@mail.com";
$subject = "Mail From website";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $message;
$headers = "From: noreply@alwinpaul.me" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:index.html");
?>