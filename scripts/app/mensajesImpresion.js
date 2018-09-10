let mensajes = (function() {
    let mensaje = {};
    let classAlerts = [
        "alert-primary",
        "alert-secondary",
        "alert-success",
        "alert-danger",
        "alert-info"
    ];

    let mensajesTexto = [
        "Solo se permiten caracteres alfanuméricos",
        "Solo se permiten caracteres numéricos",
        "No se permite dejar campos vacios"
    ];

    mensaje.imprimirMensaje = function(msj, tipo) {
        tipo = tipo < 5 ? tipo : 4;
        msj = msj < 2 ? msj : 0;

        let alert = document.getElementById('alertMsj');
        showMessage(mensajesTexto[msj], tipo, alert);
        setTimeout(() => {
            hideMessage(tipo, alert);
        }, 5000);
    }

    let showMessage = (msj, tipo, alert) => {
        alert.style.display = 'block';
        alert.innerHTML = msj;
        alert.classList.add(classAlerts[tipo]);
    }

    let hideMessage = (tipo, alert) => {
        alert.style.display = 'none';
        alert.innerHTML = '';
        alert.classList.remove(classAlerts[tipo]);
    }

    return mensaje;
})();