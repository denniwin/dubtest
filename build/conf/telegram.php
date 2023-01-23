<?php

/* https://api.telegram.org/bot5546941826:AAF-xuOpCeHepRsfCEnn6ExCuqoos8XUgrM/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$phone = $_POST['phone'];
$token = "5546941826:AAF-xuOpCeHepRsfCEnn6ExCuqoos8XUgrM";
$chat_id = "-1001686101709";

if (isset($name)) {

$arr = array(
  'Имя: ' => $name,
  'Телефон: ' => $phone,
);

$sendValue = '';

foreach($arr as $key => $value) {
  $sendValue = $sendValue."<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$sendValue}","r");

if ($sendToTelegram) {
  echo "ok";
} else {
  echo "Error!";
}
} else {

  echo "Error";
}
?>