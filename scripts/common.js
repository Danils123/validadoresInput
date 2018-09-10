"use strict"

requirejs.config({
    baseUrl: "./",
    paths: {
        "jquery": "scripts/lib/jquery-3.3.1.slim.min",
        "popperjs": "scripts/lib/popper",
        "bootstrap": "scripts/lib/bootstrap.min",
        "validador": "scripts/app/validaciones",
        "mensajes": "scripts/app/mensajesImpresion",
        "main": "scripts/app/main"
    },
    shim: {
        "bootstrap": ['jquery', 'popperjs']
            // backbon''e: {
            //     deps: ['jquery', 'underscore'],
            //     exports: 'Backbone'
            // },
            // underscore: {
            //     exports: '_'
            // }
    }
});


require(["main"], function() {
    // $('[data-to"bootstrap"ggle="tooltip"]').tooltip();
    iniciar.onReady();
});