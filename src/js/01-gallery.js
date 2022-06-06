// Add imports above this line
import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const list = document.querySelector(".gallery");

function markup() {
    return galleryItems.map((imageAdd) => 
    `<div>
        <a class="gallery__item"
            href="${imageAdd.original}">
            <img class="gallery__image" 
            src="${imageAdd.preview}"
            alt="${imageAdd.description}" />
        </a>
    </div>`)
      .join("");
    }
    list.insertAdjacentHTML("afterbegin", markup(galleryItems));
console.log(galleryItems);


 new SimpleLightbox('.gallery a',{
    'captionsData': 'alt',
    'captionDelay': 250
});

// Change code below this line

console.log(galleryItems);
