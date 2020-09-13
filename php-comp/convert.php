<?php
include_once "php.php";

use Michelf\Markdown;

$prueba = $_POST['texto'];

echo Markdown::defaultTransform($prueba);

// ============================================================
//  Codigos usados en las pruebas

// $prueba = '{"1":" This is a h1.\r\n========================== \r\n \r\n  > This is a blockquote.\r\n \r\n > This is a **blockquote.**\r\n \r\n > This is a blockquote.\r\n \r\n Este es un h2\r\n----------------------\r\n \r\n"}';

// $my_text = json_decode($prueba);
// $matriz  = [];
// foreach ($my_text as $value) {

//     $value1 = Markdown::defaultTransform($value);
//     // echo $value1;
//     // $matriz[0] = htmlentities($value1);
//     // echo $matriz[0];
//     // echo json_encode($matriz[0]);
// }
// echo html_entity_decode($matriz[0]);
// $myJSON = json_encode(html_entity_decode($matriz[0]));

// echo $myJSON;

// if ($_POST['text']) {

//     use Michelf\Markdown;

//     $my_text = json_decode($_POST['text']);

//     $my_html = Markdown::defaultTransform($my_text);

//     echo $my_html;

// } else {

// }
