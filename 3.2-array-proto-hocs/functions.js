"use strict";

// Задание №1
//console.clear;

const weapons = [
  new Knife(),
  new Staff(),
  new Axe(),
  new StormStaff(),
  new LongBow(),
  new Bow(),
];

// возвращает имена всех оружий
function getNames() {
  return weapons.map(weapon => weapon.name)
}

// принимает значение прочности и возвращает количество оружий больше принимаемой прочности
function getCountReliableWeapons(durability) {
  return weapons.filter(weapon => weapon.durability > durability).length;
}

// принимает значение прочности и возвращает вердикт: есть ли оружия прочней принимаемой прочности
function hasReliableWeapons(durability) {
  return weapons.some(weapon => weapon.durability > durability)
}

// принимает значение прочности и возвращает имена оружий, которые прочней полученного значения
function getReliableWeaponsNames(durability) {
  return weapons.filter(weapon => weapon.durability > durability).map((weapon) => weapon.name)
}

// возвращает общую сумму урона всех оружий
function getTotalDamage() {
  return weapons.reduce((accumulator, weapon) => accumulator + weapon.attack, 0)
}

function getValuestCountToSumValues(numbers, sum) {

  return numbers.reduce(function(accumulator, number) {
    if (accumulator >= sum)
    return accumulator + number
    let i = 0;
    const accum = {sumReduce: accumulator + number, quality: i++}
    if(accum.sumReduce >= sum) {
      return i
  } else {
    return numbers.length
  }
}), 0
}


//возвращает 4, т.к. 1+2+3=6 (3 числа), а 1+2+3+5=11 (4 числа)
getValuestCountToSumValues([1, 2, 3, 5, 2, 7, 3, 5, 2], 10);
//возвращает 6, т.к. 1+2+3+5+2=13 (5 чисел), а 1+2+3+5+2+7=20 (6 чисел)
getValuestCountToSumValues([1, 2, 3, 5, 2, 7, 3, 5, 2], 20);

// задание №2

function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  // Замедление на половину секунды.
  sleep(100); // Можно использовать другое значение замедления.
  return args.reduce((sum, arg) => {
    return (sum += +arg);
  }, 0);
}

function compareArrays(arr1, arr2) {
    return arr1.every(number => (arr1.length === arr2.length) && (number === arr2[arr1.indexOf(number)]));      
  }

// compareArrays([8, 9], [6]); // false, разные значения
// compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]); // false, разные значения
// compareArrays([9, 2, 4, 8, 2], [9, 2, 4]); // false, разные значения
// compareArrays([1, 2, 3], [2, 3, 1]); // false, разные индексы, хотя и одинаковые значения
// compareArrays([8, 1, 2], [8, 1, 2]); // true


function memorize(f, limit = 10) {
  const memory = [];

  const mSum = (...rest) => {
   
    memory.find((element) => {if (compareArrays(element.args, rest)) {
      console.log(element.args);
      console.log(rest);
      console.log(`Результат вычислений - ${element.result} берется из памяти.`);
      return element.result
    }
    })

     const resultF = f(...rest);
        console.log(`Функция вызвана не из памяти. Результат вычислений ${resultF}.`);
        memory.push({args: rest, result: resultF});
        if (memory.length > limit) {
          memory.shift()
        }
      } 
  
  console.log(memory)
  return mSum;
}


const resultFunction = memorize((a, b) => a + b);
resultFunction(3, 4); // <= должно вывести: 7
resultFunction(3, 4); // <= должно вывести: 7 (но БЕЗ ВЫЧИСЛЕНИЙ, а с помощью нахождения элемента в памяти)
resultFunction(5, 4); // <= ничего не найдёт в памяти. (но НЕОБХОДИМО ПОЛУЧИТЬ РЕЗУЛЬТАТ)
resultFunction(3, 4); // <= должно вывести: 7
resultFunction(3, 4);
resultFunction(3, 4);
resultFunction(3, 4);
resultFunction(3, 4);
resultFunction(3, 4);
resultFunction(3, 4);
resultFunction(3, 4);
resultFunction(3, 4);
resultFunction(3, 4);
resultFunction(8, 9);
