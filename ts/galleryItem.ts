export class GalleryItem {


    constructor( public url:string, public title:string, public date:string ){

    }

    

    html = `
    <div class="col-md-4">
        <div class="gallery-item">
            <img src="${ this.url }" alt="">
            <div class="gallery-item-info">
                <h4>${ this.title }</h4>
                <p>${ this.date }</p>
            </div>
        </div>
    </div>
    `

}