'use strict';

// знаходимо кількість категорій
const categorieList = document.querySelector('#categories');
console.log(categorieList);

//знаходжу всі елементи li.item, в аргументі передаю селектор класу item
const categoriesItems = document.querySelectorAll('[class^="item-"]');
//вивожу в консоль кількість категорій
console.log(`кількість катергорій: ${categoriesItems.length} `);

// пребираю по масиву всі єлементи li.item і вивожу в консоль назву категорії та кількість елементів в ній.
categoriesItems.forEach(item => {
  const categoriesTitle = item.querySelector('h2').textContent; // викоритовую назву тега h2, щоб отримати назву категорії Методом textContent
  const elementsCount = item.querySelectorAll('.list.item').length; // елемент класу item в середині  елемента класу list
  // вивожу в консоль назву категорії та кількість елементів в ній.
  console.log(`Категорія: ${categoriesTitle}`);
  console.log(`Кількість елементів: ${elementsCount}`);
});
