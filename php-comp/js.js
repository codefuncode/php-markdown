jQuery(document).ready(function($) {

    // ==============================================
    //  Variables 
    var
        entradaTexto =
        document.querySelectorAll('.entradaTexto'),
        pantalla =
        document.getElementById('pantalla'),
        ficheros =
        document.getElementById('ficheros'),
        nuevo =
        document.getElementById('nuevo');
    // ==============================================

    // ==============================================
    //  Estado inicial
    entradaTexto[0].value = '';

    console.log(entradaTexto[0]);

    entradaTexto[0].style.height = '500px';

    var listado = {
        listado: "listado"
    }

    $.post(
        "accion.php",
        listado,
        function(data, status) {
            var obj = JSON.parse(data);
            let cadena = "";

            if (obj.length >= 0) {
                for (var i = 0; i < obj.length; i++) {
                    cadena += "<li>" + obj[i] + "</li>";

                    console.log(obj[i]);
                }
            }
            ficheros.innerHTML = cadena;
        });
    // ==============================================
    //  Conversion a markdown peticion al servidor
    entradaTexto[0].addEventListener('input', function(argument) {
        var cadena = {
            texto: entradaTexto[0].value
        }

        $.post(
            "convert.php",
            cadena,
            function(data, status) {
                pantalla.innerHTML = data;
                console.log(data);

            });
    });

    function crearfichero(argument) {
        var div = document.createElement("div");
        var slider = document.createElement("input");

        slider.type = "text";
        slider.height = "100%";

        div.appendChild(slider);
        swal({
            content: div,
            buttons: ["Cancelar", "Aceptar"],

        });

        var botones = document.querySelectorAll('.swal-modal button');
        for (var i = 0; i < botones.length; i++) {
            console.log(botones[i]);
        }

        botones[1].addEventListener("click", function(argument) {
            console.log(slider.value);
        });
    }

    nuevo.addEventListener("click", crearfichero);

});