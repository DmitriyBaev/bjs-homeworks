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

  numbers.reduce(function (accumulator, number) {
    return {sumReduce: accumulator.sumReduce + number, quality: accumulator.quality + 1}
    
  //  return () => { if (accumulator.sumReduce < sum)
  //   { return {sumReduce: accumulator.sumReduce + number, quality: accumulator.quality + 1}
  //   } else {
  //     return accumulator.quality
  //   } 
  // }
  
  }, { sumReduce: 0, quality: 0 })
}


//возвращает 4, т.к. 1+2+3=6 (3 числа), а 1+2+3+5=11 (4 числа)
getValuestCountToSumValues([1, 2, 3, 5, 2, 7, 3, 5, 2], 10);
//возвращает 6, т.к. 1+2+3+5+2=13 (5 чисел), а 1+2+3+5+2+7=20 (6 чисел)
getValuestCountToSumValues([1, 2, 3, 5, 2, 7, 3, 5, 2], 20);

// задание №2

function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) { }
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


function memorize(f, limit = 5) {
  const memory = [];
  console.log(memory)

  return (...rest) => {

    const findElement = memory.find(element => compareArrays(element.args, rest));

    if (findElement) {
      return findElement.result //(`Результат вычислений - ${findElement.result} берется из памяти.`)
    } else {
      const resultF = f(...rest);
      memory.push({ args: rest, result: resultF });
      if (memory.length > limit) {
        memory.shift()
      }
      return resultF //(`Функция вызвана не из памяти. Результат вычислений ${resultF}.`);
    }
  }
}


const resultFunction = memorize((a, b, c, d) => a + b + c + d);
//const resultFunction = memorize((a,b) => a * b);
//const resultFunction = memorize((a,b,c) => b ** 2 - 4 * a * c);

console.log(resultFunction(3, 8, 6, 7));
console.log(resultFunction(8, 8, 6, 7));
console.log(resultFunction(4, 8, 6, 7));
console.log(resultFunction(9, 8, 6, 7));
console.log(resultFunction(6, 3, 6, 7));
console.log(resultFunction(3, 8, 6, 7));
console.log(resultFunction(3, 8, 6, 7));
console.log(resultFunction(3, 8, 6, 7));
console.log(resultFunction(3, 8, 6, 7));
console.log(resultFunction(3, 8, 6, 7));
console.log(resultFunction(3, 8, 6, 7));
console.log(resultFunction(3, 8, 6, 9));
console.log(resultFunction(9, 8, 3, 7));
