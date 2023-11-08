<?php
// Fetch form data
$name = $_POST['firstname'];
$name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$surname = $_POST['secondname'];
$surname = htmlspecialchars($surname, ENT_QUOTES, 'UTF-8');
$email = $_POST['email'];
$email = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$phoneNumber = $_POST['tele'];
$phoneNumber = htmlspecialchars($phoneNumber, ENT_QUOTES, 'UTF-8');
$dateArrival = $_POST['dateArrival'];
if (isset($_POST['halfStay'])) {
  // Checkbox is checked
  $halfStay = $_POST['halfStay'];
  $dateDeparture ="";
} else {
  // Checkbox is not checked
  $halfStay = "";
  $dateDeparture = $_POST['dateDeparture'];

}

$roomType = $_POST['roomType'];
$message = $_POST['userMessage'];
$message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

// Set the recipient email address
$recipient = 'anittahoar440@gmail.com';

// Set the email subject
$subject = 'Room Reservation';

// Compose the email body
$body = "Имя: $name\n";
$body .= "Фамилия: $surname\n";
$body .= "Email: $email\n";
$body .= "Телефон: $phoneNumber\n";
$body .= "Дата приезда: $dateArrival\n";
if (!empty($halfStay)) {
  $body .= "$halfStay\n";
} 
if (!empty($stayTime)) {
  $body .= "Дата отъезда: $stayTime\n";
} 
$body .= "Тип номера: $roomType\n";
if (!empty($message)) {
  $body .= "Дополнительная информация: $message\n";
} 

// Set the email headers
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";

// Send the email
$mailSent = mail($recipient, $subject, $body, $headers);

// Check if the email was sent successfully
if ($mailSent) {
  echo 'success';
} else {
  echo 'error';
}
?>
