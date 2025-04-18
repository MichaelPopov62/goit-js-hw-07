'use strict';

// знаходжу елемент в DOM за його индефікатором #name-input
const inputElement = document.querySelector("#name-input");
  
//перевіряю в консолі чи є елемент
console.log(inputElement);
  
//знаходимо елемент в DOM за його индефікатором #name-output
const outputElement = document.querySelector("#name-output");
  
//перевіряю в консолі чи є елемент
  console.log(outputElement);

// додаю слухача події "input" на елемент inputElement.
//це означаэ що функція буде визиватися кожного разу, коли користувач вводить текст у полу інпут
  inputElement.addEventListener("input", (keyboardEvent) => {
  console.log(inputElement);
//отримую значення з поля вводу keyboardEvent.target.value
//використовую метод trim() для видалення пробілів з початку і кінця рядка
  const inputValue = keyboardEvent.target.value.trim();
  console.log(`Поточне значення після trim(): "${inputValue}"`); //перевіряю в консолі чи є значення

//Перевіряю,чи порожнє значення після очищення від пробілів
  if (inputValue === '') {
    outputElement.textContent = 'Anonymous'; //якщо значення порожне то виводжу Anonymous.Маю на увазі що якщо вводити одні пробіли.
  console.log("Результат if: Умова виконана, значення порожнє, встановлено 'Anonymous'."
    );
  } else {
  outputElement.textContent = inputValue; //якщо не порожне то виводжу текст з поля вводу
  console.log(`Результат перевірки:умова не виконана , встановлено "${inputValue}".`
    );
  }
// Додаткова перевірка кінцевого результату
  console.log('Фінальне значення outputElement.textContent:',outputElement.textContent);
});