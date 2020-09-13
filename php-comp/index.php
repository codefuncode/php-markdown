<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <link href="https://www.w3schools.com/w3css/4/w3.css" rel="stylesheet"/>
    <link href="css.css" rel="stylesheet" type="text/css"/>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js">
    </script>
    <title>
      Document
    </title>
  </head>
  <body>
    <?php require 'php.php';?>
    <div class="w3-bar w3-light-grey" style="margin-bottom: 20px;">
      <a class="w3-bar-item w3-button" href="#">
        Editor Markdown
      </a>
      <div class="w3-dropdown-hover">
        <button class="w3-button">
          Menu
        </button>
        <div class="w3-dropdown-content w3-bar-block w3-card-4">
          <a class="w3-bar-item w3-button" href="#">
            Nuevo
          </a>
          <a class="w3-bar-item w3-button" href="#">
            Guardar
          </a>
          <a class="w3-bar-item w3-button" href="#">
            Editar
          </a>
          <a class="w3-bar-item w3-button" href="#">
            Eliminar
          </a>
        </div>
      </div>
    </div>
    <div class="w3-row-padding">
      <div class="w3-col s2">
        <div class="w3-light-grey">
          <p>
            Ficheros
          </p>
        </div>
        <div class="w3-light-grey" style="height: 420px;">
          <ul class="w3-ul" id="ficheros">
          </ul>
        </div>
      </div>
      <div class="w3-col s5">
        <textarea class="w3-input w3-border entradaTexto" id="entradaTexto" placeholder="Escriba Markdown aqui...">
        </textarea>
      </div>
      <div class="w3-col s5 vistaPrevia ">
        <div id="pantalla">
        </div>
      </div>
    </div>
    <script src="js.js" type="text/javascript">
    </script>
  </body>
</html>
