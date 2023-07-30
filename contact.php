<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    if (empty($name) || empty($email) || empty($message)) {
       
        echo "Please fill in all the required fields.";
       
        exit;
    }
    echo '<script type="text/javascript">';
    echo 'alert("Thank you for your message, ' . $name . '! We have received your inquiry and will get back to you soon.");';
    echo 'window.location.href = "apphtml.html";';
    echo '</script>';
    // ini_set('SMTP', "server.com");
    // ini_set('smtp_port', "25");
    // ini_set('sendmail_from', "email@domain.com");
    // mail("2012068@nec.edu.in", "Here is the sample subject line",$message,"From:$email");
//    mail("string $to,
//     string $subject,
//     string $message,
//     array|string $additional_headers = [],
//     string $additional_params = "" ")

   
} else {
  
    echo "Invalid request.";
}
?>
