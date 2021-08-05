"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("./user");
function default_1() {
    if (localStorage.username) {
        document.getElementById('loginModalButtonContainer').innerHTML = "<span>Hola, " + user_1.getUsers()[0].username + "</span>";
        document.getElementById('addGalleryItemButtonContainer').innerHTML = "<button class=\"btn btn-primary btn-block\">Agregar foto</button>\n        <button id=\"closeSessionButton\" class=\"btn btn-danger btn-block\">Cerrar sesi\u00F3n</button>";
        $('#closeSessionButton').on('click', function (e) {
            e.preventDefault();
            // Limpiar User
            localStorage.clear();
            //Recargar ventana
            window.location.reload();
        });
    }
}
exports.default = default_1;
