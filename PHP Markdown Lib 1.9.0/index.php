<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
	<?php
use Michelf\Markdown;
$my_text = "## hola";

$my_html = Markdown::defaultTransform($my_text);

echo $my_html;
?>
</body>
</html>
