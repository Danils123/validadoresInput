let iniciar = (function() {

    let email = document.getElementById("ipEmail");;
    let descripcion = document.getElementById("txDescripcion");
    let pass = document.getElementById("ipPass");
    let edad = document.getElementById("ipEdad");
    let submmit = document.getElementById("btnSubmit");
    let form = document.getElementById("formPrincipal");
    let onReady = () => {
        insertarEventos();
    }

    let insertarEventos = () => {
        console.log('Hola mundo');
        require(["validador"], function() {
            email.addEventListener('keyup', () => validador.inputAlfaNumerico(email));
            descripcion.addEventListener('keyup', () => validador.inputAlfaNumerico(descripcion));
            pass.addEventListener('keyup', () => validador.inputAlfaNumerico(pass));
            edad.addEventListener('change', () => validador.inputNumerico(edad));
            edad.addEventListener('change', () => validador.pasoMaximoCaracteres(edad));
            edad.addEventListener('change', () => validador.pasoMinimoCaracteres(edad));
            submmit.addEventListener('click', () => validador.validarInputsForm(form, [email, descripcion, pass, edad]));
        });
    }

    return { onReady };
})();