'use strict';
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];

//використовую метод та отримую контейнер галереї за классом (.gallery)
  const gallery = document.querySelector('.gallery');
  console.log(gallery); 

//створюю порожній рядок для зберігання розмітки
  let galleryHTML = '';

// Переби раю масив зображень за допомогою forEach
  images.forEach(image => {

  // метод проходить по кожному елементу img і создає для нього html розмітку,також під кожний img додаеться alt,і створюється тег li.І все це записується в змінну galleryHTML. 
  galleryHTML += `
  <li class="gallery-item">
   <img src="${image.url}" alt="${image.alt}" class="gallery-image">;
  </li>`;
  });
//дивлюсь на результат
console.log(galleryHTML);

//після того коли всі елементи створені додаємо іх в контейнер галереї
gallery.insertAdjacentHTML('beforeend', galleryHTML)
//перевіряю чи все вірно створилось
 console.log(gallery);