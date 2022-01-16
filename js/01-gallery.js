//1. Создание и рендер разметки по массиву данных galleryItems
// и предоставленному шаблону элемента галереи.
//2. Реализация делегирования на div.gallery и получение url большого изображения.
// 3. Подключение скрипта и стилей библиотеки модального окна basicLightbox. 
// Используй CDN сервис jsdelivr 
// 4.Открытие модального окна по клику на элементе галереи. 
// 5.Замена значения атрибута src элемента <img> в модальном окне перед открытием. 
// Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.

import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.js-gallery');
const gallerryCardsMarkup = createGallerryCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend",gallerryCardsMarkup);
galleryContainer.addEventListener('click', openModal);

function createGallerryCardsMarkup(img) {
    return img.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"/>
        </a>
        </div>`;
    }).join('');
}; 

function openModal(evt) {
    evt.preventDefault();

    if (evt.target.nodeName !== 'img') {
        return;
    }
};

// const lightbox = document.createElement('div');
// lightbox.id = 'lightbox';
// document.body.appendChild(lightbox);

// const images = document.querySelectorAll('img');
// images.forEach(image => {
//     image.addEventListener('click', evt => {
//     lightbox.classList.add('active');
//     const img = document.createElement('img');
//     img.src = image.src;
//         lightbox.appendChild(img);
//     })
// })

// lightbox.addEventListener('click', evt => {
//     if (evt.target !== evt.currentTarget)
//     return lightbox.classList.remove('active')
// })

