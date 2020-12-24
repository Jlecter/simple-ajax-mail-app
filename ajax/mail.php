<?php

/**
 * Get user info.
 */
$email = $_POST['email'];
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];

/**
 * Set arguments for mail.
 */
$subject = "=?utf-B?B?" . base64_encode("Message from ZhyDeveloper") . "?=";
$headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";

/**
 * Send message.
 */
$success = mail("fifa.leicester.city@gmail.com", $subject, $message, $headers);

/**
 * Return true / false.
 */
echo $success;