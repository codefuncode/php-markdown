<?php
// $pathtofile = 'user/012.md';
$pathtofile = 'user/' . $_POST['nombre'] . '.md';

if ((file_exists($pathtofile))) {
    echo 'existe';
} else {

    $file = fopen($pathtofile, "w");
    echo fwrite($file, " ");
    fclose($file);
    clearstatcache();
    echo 'exito';
}
