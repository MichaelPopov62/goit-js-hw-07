'use strict';

//отримую улемент body
  const bodyelement = document.body;
  console.log(bodyelement);

//отримую елемент кнопки за класом (change-color)
  const btnelement = document.querySelector('.change-color');
  console.log(btnelement);

//отримую елемент span,де буде виводитись колір за класом (.color)
  const colorSpan = document.querySelector('.color');
  console.log(colorSpan);

//функція для генерації випадкового кольору в форматі hex
  function getRandomHexColor() {
    
//функція генерує випадкове число від 0 до 16777215
  return `#${Math.floor(Math.random() * 16777215)
    
//метод перетворюює число в шістнадцяткову строку
  .toString(16)
    
//метод  додає потрібну кількість нулів на початок рядка, якщо він коротший за 6 символів
  .padStart(6, "0")}`;
}
//додає обробник події на кнопку
//при натисканні на кнопку викликає функцію getRandomHexColor
//функція змінює колір фону body
//і колір тексту в span.color
  btnelement.addEventListener('click', () => {
    
//генерує випадковий колір
  const randomColor = getRandomHexColor();

//змінює колір фону body на згенерірований колір
  bodyelement.style.backgroundColor = randomColor;

//змінює колір текст в span.color на згенерірований колір
  colorSpan.textContent = randomColor;

// Виводжу в консоль значення кольору
// для перевірки
  console.log('Color applied to body:', randomColor);
  console.log('Color displayed in span:', colorSpan.textContent);
});



















