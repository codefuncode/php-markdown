jQuery(document).ready(function($) {

    var
        entradaTexto =
        document.querySelectorAll('.entradaTexto'),

        pantalla =
        document.getElementById('pantalla')
    ficheros =
        document.getElementById('ficheros');

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

});