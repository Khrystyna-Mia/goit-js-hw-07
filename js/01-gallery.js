// 1. Создание и рендер разметки по массиву данных galleryItems
// и предоставленному шаблону элемента галереи.
// 2. Изображение обернуто в ссылку, а значит при клике по умолчанию пользователь будет перенаправлен на другую страницу. 
// Запрети это поведение по умолчанию.
// 4. Реализация делегирования на div.gallery и получение url большого изображения.
// 5. Подключение скрипта и стилей библиотеки модального окна basicLightbox. 
// Используй CDN сервис jsdelivr 
// 6. Открытие модального окна по клику на элементе галереи. 
// 7. Замена значения атрибута src элемента <img> в модальном окне перед открытием. 
// Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.

import { galleryItems } from './gallery-items.js';

// console.log(galleryItems);

const galleryContainer = document.querySelector('.js-gallery');

const galleryCardsMarkup = createGalleryCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend",galleryCardsMarkup);
galleryContainer.addEventListener('click', onGalleryContainerClick);

function createGalleryCardsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
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

function onGalleryContainerClick(evt) {
    evt.preventDefault();

    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }

    const modalMarkup = `<img src="${evt.target.dataset.source}" alt="${evt.target.alt}">`;
    const instance = basicLightbox.create(modalMarkup);

    instance.show();

    /* Закрытие модального окна по нажатию клавиши Escape */

    window.addEventListener('keydown', evt => {
    if (evt.code === 'Escape') {
        instance.close();
        }
    });

//    window.addEventListener('keydown', pressOnKeyArrowLeft);
//     window.addEventListener('keydown', pressOnKeyArrowRight);
//     window.addEventListener('keydown', pressOnKeyArrowUP);
//     window.addEventListener('keydown', pressOnKeyArrowDown);

}

