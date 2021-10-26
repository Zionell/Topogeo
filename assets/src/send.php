<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// Переменные, которые отправляет пользователь
$title = $_POST['type'];
$name = $_POST['name'];
$tel = $_POST['tel'];
$email = $_POST['email'];
$comment = $_POST['comment'];
$quiz= $_POST['quiz'];

$placeType1= $_POST['place-type1'];
$placeType2= $_POST['place-type2'];
$placeType3= $_POST['place-type3'];
$placeType4= $_POST['place-type4'];
$placeType5= $_POST['place-type5'];

$quizQuest1= $_POST['quiz-quest1'];
$quizQuest2= $_POST['quiz-quest2'];
$quizQuest3= $_POST['quiz-quest3'];
$quizQuest4= $_POST['quiz-quest4'];
$quizQuest5= $_POST['quiz-quest5'];
$quizQuest6= $_POST['quiz-quest6'];

$paramsType1= $_POST['params-type1'];
$paramsType2= $_POST['params-type2'];
$paramsType3= $_POST['params-type3'];

$square= $_POST['square'];
$coordinates= $_POST['coordinates'];

$resolutionType1= $_POST['resolution-type1'];
$resolutionType2= $_POST['resolution-type2'];
$resolutionType3= $_POST['resolution-type3'];


if($title=="Квиз"){
   $body =  "<b>".$quizQuest1."</b>
            ".$placeType1."; ".$placeType2."; ".$placeType3."; ".$placeType4."; ".$placeType5."<br>
            <b>".$quizQuest2."</b>
            ".$square."<br>
            <b>".$quizQuest3."</b>
            ".$paramsType1."; ".$paramsType2."; ".$paramsType3."<br>
            <b>".$quizQuest4."</b>
            ".$resolutionType1."; ".$resolutionType2."; ".$resolutionType3."<br>
            <b>".$quizQuest5."</b>
            ".$coordinates."<br>";
}

// Формирование самого письма
if(trim(!empty($_POST['type']))){
   $title = $_POST['type'];
}
if(trim(!empty($_POST['name']))){
   $name = $_POST['name'];
   $body.= "<b>Имя:</b>". $name."<br>";
}
if(trim(!empty($_POST['tel']))){
   $tel = $_POST['tel'];
   $body.= "<b>Телефон:</b>". $tel."<br>";
}
if(trim(!empty($_POST['email']))){
   $email = $_POST['email'];
   $body.= "<b>Почта:</b>". $email."<br>";
}
if(trim(!empty($_POST['comment']))){
   $comment = $_POST['comment'];
   $body.= "<b>Сообщение:</b>". $comment."<br>";
}

// Настройки PHPMailer
$mail = new PHPMailer(true);

try {
      $mail->isSMTP();   
      $mail->CharSet = "UTF-8";
      $mail->SMTPAuth   = true;
      $mail->Host = 'ssl://smtp.beget.com';
      $mail->Username = 'topogeo@topogeo.ru';
      $mail->Password = '3L3T8KPM*JKKbNC';
      $mail->SMTPSecure = 'ssl';
      $mail->Port       = 465;

   //  $mail->SMTPDebug = true;
   //  $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

      $mail->addAddress('topogeo@topogeo.ru', 'Topogeo'); 


// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}
header("Content-type: application/json");

// Отображение результата
echo json_encode(["result" => $result, "status" => $status]);