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
        document.getElementById('nuevo'),

        guardar =
        document.getElementById('guardar'),

        eliminar =
        document.getElementById('eliminar'),

        editar =
        document.getElementById('editar'),

        listadodeficheros,
        ficheroselecionado,
        editando = false;

    // ==============================================

    // ==============================================
    //  Estado inicial
    entradaTexto[0].readOnly = true;
    entradaTexto[0].value = '';

    console.log(entradaTexto[0]);

    entradaTexto[0].style.height = '500px';

    function verficheros(argument) {
        let listado = {
            listado: "listado"
        }
        $.post(
            "verficheros.php",
            listado,
        ).always(function(data, status) {
            var obj = JSON.parse(data);
            let cadena = '';
            if (obj.length >= 0) {

                for (var i = 0; i < obj.length; i++) {

                    cadena += "<li>" + obj[i] + "</li>";

                }

                ficheros.innerHTML = cadena;
                listadodeficheros =
                    document.querySelectorAll('#ficheros li');
            }

            for (var i = 0; i < listadodeficheros.length; i++) {

                console.log(listadodeficheros[i]);

                listadodeficheros[i].addEventListener(
                    'click', selecionar)
            }
        });

    }

    function selecionar(argument) {

        // console.log(listadodeficheros.length);

        // console.log(listadodeficheros[0] == this);

        for (var i = 0; i < listadodeficheros.length; i++) {

            if (listadodeficheros[i] == this) {

                listadodeficheros[i].style.backgroundColor = 'green';
                listadodeficheros[i].style.color = 'white';
                listadodeficheros[i].style.borderRadius = "10px";

            } else {

                listadodeficheros[i].style.backgroundColor = '#f1f1f1';
                listadodeficheros[i].style.color = 'black';
                listadodeficheros[i].style.borderRadius = "initial";
            }

        }
        console.log(this.textContent);
        let datos = {
            filename: this.textContent
        }
        ficheroselecionado = this.textContent;
        $.post(
            "leer.php",
            datos).always(function(data, status) {
            var obj = JSON.parse(data);

            let cadena = '';
            for (var i = 0; i < obj.length; i++) {
                cadena += obj[i];
            }
            entradaTexto[0].value = cadena;
            convertir();
        });

        console.log(' el fichero seleccionado es ' + ficheroselecionado);

    }

    function seleccionalista(argument) {
        var items = document.querySelectorAll("li");
        console.log(items);

        for (var i = 0; i < items.length; i++) {
            console.log(items[i]);
        }

    }

    verficheros();
    // seleccionalista();

    // ==============================================
    //  Conversion a markdown peticion al servidor
    entradaTexto[0].addEventListener('input', convertir);

    function convertir(argument) {
        let datos = {
            texto: entradaTexto[0].value
        }

        $.post(
            "convert.php",
            datos,
            function(data, status) {
                pantalla.innerHTML = data;
                console.log(data);

            });
    }
    // ==============================================
    //  Eventos 
    nuevo.addEventListener("click", crearfichero);
    eliminar.addEventListener("click", eliminafichero);
    guardar.addEventListener("click", guardarfichero);
    editar.addEventListener("click", puedeeditar);

    // =============================================
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

        botones[1].addEventListener("click", function(argument) {
            let datos = {
                nombre: slider.value
            }

            $.post(
                "create.php",
                datos,
                function(data, status) {

                    console.log(data);

                    if (data == "existe") {
                        swal({
                            text: "El fichero ya existe",
                            icon: "warning",
                        });
                    }
                    verficheros();
                });

            editando = true;
            estadoedicion();
        });

    }

    function existeelfichero(argument) {

    }

    function eliminafichero(argument) {
        console.log('Eliminar');
        let datos = {
            fichero: ficheroselecionado
        }
        $.post(
            "delete.php",
            datos).always(function() {

            verficheros();
            pantalla.innerHTML = "";
            entradaTexto[0].value = "";
            ficheroselecionado = "";
            editando = true;
            estadoedicion();
        });

    }

    function guardarfichero(argument) {

        let datos = {
            fichero: ficheroselecionado,
            texto: entradaTexto[0].value
        }
        $.post(
            "save.php",
            datos).always(function() {
            verficheros();
            editando = true;
            estadoedicion();
            swal({
                text: "Guardo con exito",
                icon: "success",
            });
        });
    }

    function puedeeditar(argument) {
        editando = false;

        estadoedicion();

        swal({
            text: "Estado de edicion activado",
            icon: "success",
        });
    }

    function estadoedicion(argument) {

        entradaTexto[0].readOnly = editando;

    }
});