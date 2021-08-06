import { getUsers } from './user';
import {GalleryItem} from './galleryItem';

export default function(){

    if( localStorage.username ){

        document.getElementById('loginModalButtonContainer')!.innerHTML = `<span>Hola, ${getUsers()[0].username}</span>`;


        document.getElementById('addGalleryItemButtonContainer')!.innerHTML = `<button data-toggle="modal" data-target="#addGalleryItemModal" class="btn btn-primary btn-block">Agregar foto</button>
                                                                                <button id="closeSessionButton" class="btn btn-danger btn-block">Cerrar sesión</button>
                                                                                `;



        $('#closeSessionButton').on('click', function(e){
            e.preventDefault();

            localStorage.clear();

            window.location.reload();
        });



        $('#addGalleryItemButton').on('click', function(){

            let imageUrl = (<string>$('#imageUrl').val());
            let title = (<string>$('#title').val());
            let date = (<string>$('#date').val());

            if(!imageUrl || !title || !date){
                return
            }

            let newGalleryItem = new GalleryItem(imageUrl, title, date);


            $('#galleryItemsRow').append(newGalleryItem.html)

        })


    }

}