<?php

if ((isset($_POST['name'])) && (strlen(trim($_POST['name'])) > 0)) {
	$name = stripslashes(strip_tags($_POST['name']));
} else {$name = 'Поле ИМЯ пустое';}
if ((isset($_POST['email'])) && (strlen(trim($_POST['email'])) > 0)) {
	$email = stripslashes(strip_tags($_POST['email']));
} else {$email = 'No email entered';}
if ((isset($_POST['phone'])) && (strlen(trim($_POST['phone'])) > 0)) {
	$phone = stripslashes(strip_tags($_POST['phone']));
} else {$phone = 'Поле ТЕЛЕФОН пустое';}
if ((isset($_POST['text'])) && (strlen(trim($_POST['text'])) > 0)) {
	$text = stripslashes(strip_tags($_POST['text']));
} else {$text = 'Поле ТЕКСТ пустое';}
ob_start();


  $to      = '518151@list.ru, info@bzcekh.ru, makarovt_t@mail.ru';//
  $subject = 'Новая заявка с сайта «Здоровье Семьи»';
  $valid = false;
  $headers = 'From: info@bzcekh.ru' . "\r\n" .
      'Reply-To: info@bzcekh.ru' . "\r\n" .
      'Content-type: text/html' . "\r\n" .
      'X-Mailer: PHP/' . phpversion();

  $valid = true;
  $message = 'Имя: '. $name .'<br>Телефон: '. $phone .'<br>Сообщение: '. $text ;
  mail($to, $subject, $message, $headers);
  exit;

?>
