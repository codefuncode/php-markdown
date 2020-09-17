<?php

$myfile = fopen($_POST['fichero'], "w");
$txt    = $_POST['texto'];
fwrite($myfile, $txt);
fclose($myfile);
