import { getUsers } from "./user";

export default function(){

    if( localStorage.username ){

        document.getElementById('loginModalButtonContainer')!.innerHTML = `<span>Hola, ${getUsers()[0].username}</span>`;


        document.getElementById('addGalleryItemButtonContainer')!.innerHTML = `<button class="btn btn-primary btn-block">Agregar foto</button>
        <button id="closeSessionButton" class="btn btn-danger btn-block">Cerrar sesión</button>`;

        $('#closeSessionButton').on('click', function(e:any){
            e.preventDefault();
            // Limpiar User
            localStorage.clear();
            //Recargar ventana
            window.location.reload();
            
        });
    }

}