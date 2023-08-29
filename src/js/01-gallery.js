

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';


console.log(galleryItems);
import { galleryItems } from './gallery-items.js';

const ulElemHtml = document.querySelector(".gallery")



  function createMarcup(arr){
   
return arr.map( ({original,preview,description}) =>

    `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
       alt="${description}"
      />
    </a>
  </li>` 
    ).join(``)
   
  };

  ulElemHtml.insertAdjacentHTML(`beforeend`, createMarcup(galleryItems))


  
console.log (SimpleLightbox)
const lightbox = new SimpleLightbox('.gallery a', {
    caption: true,
    captionsData: 'alt',
    captionDelay: 250,
  });