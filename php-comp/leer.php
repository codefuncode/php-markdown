<?php

$file = fopen($_POST['filename'], "r");
$a    = array();
//Output lines until EOF is reached
while (!feof($file)) {
    $line = fgets($file);
    array_push($a, $line);

}

fclose($file);
echo json_encode($a);
