"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryItem = void 0;
var GalleryItem = /** @class */ (function () {
    function GalleryItem(url, title, date) {
        this.url = url;
        this.title = title;
        this.date = date;
        this.html = "\n    <div class=\"col-md-4\">\n        <div class=\"gallery-item\">\n            <img src=\"" + this.url + "\" alt=\"\">\n            <div class=\"gallery-item-info\">\n                <h4>" + this.title + "</h4>\n                <p>" + this.date + "</p>\n            </div>\n        </div>\n    </div>\n    ";
    }
    return GalleryItem;
}());
exports.GalleryItem = GalleryItem;
