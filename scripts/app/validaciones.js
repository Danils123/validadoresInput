let validador = (function() {
    let validar = {};

    validar.inputNumerico = (input) => {
        const regex = /^[0-9]*$/gm;
        return expresionRegular(regex, input);
    };
    validar.inputTexto = (input) => {
        const regex = /^[ A-Za-z0-9_@.ñ+-]*$/gm;
        return expresionRegular(regex, input);
    };;
    validar.inputAlfaNumerico = (input) => {
        const regex = /^[ A-Za-z0-9_@.ñ]*$/gm;
        return expresionRegular(regex, input);
    };
    validar.estaVacio = (input) => {
        let respuesta = false;

        require(['mensajes'], function() {
            if (input.value === '' || input.value === null) {
                input.classList.add("is-invalid");
                respuesta = true;
            } else {
                input.classList.remove("is-invalid");
            }
        });
        return respuesta;
    };;
    validar.pasoMaximoCaracteres = (input) => {
        let max = input.getAttribute('maxlength');
        input.value = input.value > max ? max : input.value;
    };

    validar.pasoMinimoCaracteres = (input) => {
        let min = input.getAttribute('minlength');
        input.value = input.value < min ? min : input.value;
    };
    validar.fecha = (input) => {
        console.log("Hola mundo");
    };;
    validar.email = (input) => {
        console.log("Hola mundo");
    };;

    validar.imprimir = function(msj) {
        console.log(msj);
    };

    validar.validarInputsForm = (form, inputs) => {
        // form.classList.add('was-validated');
        let valido = true;
        for (let index = 0; index < inputs.length; index++) {
            inputs[index]
            if (!inputs[index].classList.contains("is-invalid")) {
                if (validar.estaVacio(inputs[index])) {
                    valido = false;
                }
            }
        }
        require(['mensajes'], function() {
            if (valido) {
                mensajes.imprimirMensaje(2, 3);
            }
        });
    }

    function expresionRegular(expresion, input) {
        let respuesta = false;
        require(['mensajes'], function() {
            if (expresion.test(input.value)) {
                input.classList.remove("is-invalid");
                respuesta = true;
            } else {
                input.classList.add("is-invalid");

                mensajes.imprimirMensaje(0, 3);
            }
        });
        return respuesta
    }

    return validar;
})();