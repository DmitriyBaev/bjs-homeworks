"use strict";

// Задание №1
function getResult(a, b, c) {
  let d = b ** 2 - 4 * a * c; // вычисляем дискриминант
  console.log(d);
  let x;
  if (d === 0) {
    x = [-b / (2 * a)];
  } else if (d > 0) {
    x = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
  } else {
    x = [];
  }
  return x;
}

//Задание №2
function getAverageMark(marks) {
  let averageMark;

  function markSum(marks) {
    // считаем среднюю оценку
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
      sum += marks[i];
      console.log(i);
      console.log(sum);
    }
    averageMark = sum / marks.length;
    console.log(averageMark);
  }

  if (marks == false) {
    averageMark = 0;
  } else if (marks.length <= 5) {
    markSum(marks);
  } else {
    console.log(
      "Колличество вводимых данных превышает допустимое. Учитываться будут только первые пять оценок."
    );
    marks = marks.slice(0, 5);
    console.log(marks.slice(0, 5));
    markSum(marks);
  }
  return averageMark;
}

//Задание №3
function askDrink(name, dateOfBirthday) {
  let data = new Date().getFullYear(); // определяем текущий год
  let year = dateOfBirthday.getFullYear(); // год рождения пользователя
  let result = data - year; // возраст пользователя
  if (result >= 18) {
    console.log(`Не желаете ли олд-фэшн, ${name}?`);
  } else {
    console.log(
      `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`
    );
  }
  return result;
}
