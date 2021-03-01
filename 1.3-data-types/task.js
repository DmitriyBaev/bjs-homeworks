"use strict";

// Задача №1
function calculateTotalMortgage(percent, contribution, amount, date) {

  // Попытка сделать проверку на тип данных
  // percent = +percent;
  // contribution = +contribution;
  // amount = +amount;

  // let array = [percent, contribution, amount];
  // for (let i = 0; i < array.length; i++) {
  //   if (typeof +array[i] !== "number") {
  //     return `Параметр ${array.slice([i],[i + 1])} содержит неправильное значение ${array[i]}`;
  //   }
  // }

  let creditBody = amount - contribution; // тело кредита
  console.log(`creditBody ${creditBody}`);

  let years = date.getFullYear() - new Date().getFullYear();
  let months = date.getMonth() - new Date().getMonth();
  let quantityMonths = years * 12 + months; // количество месяцев
  console.log(`months ${quantityMonths}`);

  let monthlyFee =
    creditBody *
    (percent / 100 / 12 +
      percent / 100 / 12 / ((1 + percent / 100 / 12) ** quantityMonths - 1)); // ежемесячная оплата по кредиту
  console.log(`monthlyFee ${monthlyFee}`);

  let totalAmount = quantityMonths * monthlyFee;
  console.log(totalAmount.toFixed(2));
  console.log(typeof totalAmount);

  return +totalAmount.toFixed(2);
}

// Задача №2

// Вариант 1
function getGreeting(name) {
  let greeting;
  if (!name) {
    name = "Аноним";
  }
  greeting = `Привет, мир! Меня зовут ${name}.`;

  return greeting;
}

// Вариант 2
// Изначально написал так, но потом подумал,что под условие задачи больше подходит первый вариант
// function getGreeting(name) {
//   let greeting;
//   if (name) {
//     greeting = `Привет, мир! Меня зовут ${name}.`;
//   } else {
//     greeting = `Привет, мир! Меня зовут Аноним.`;
//   }

//   return greeting;
// }
