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

function getNames() {
  // возвращает имена всех оружий
  const weaponsName = weapons.map((weapon) => {
    return weapon.name;
  });
  console.log(weaponsName);
  return weaponsName;
}

function getCountReliableWeapons(durability) {
  // принимает значение прочности и возвращает количество оружий больше принимаемой прочности
  const durabilityWeapon = weapons
    .filter((weapon) => weapon.durability > durability)
    .map((weapon) => {
      return weapon.durability;
    });
  console.log(durabilityWeapon.length);
  return durabilityWeapon.length;
}

function hasReliableWeapons(durability) {
  // принимает значение прочности и возвращает вердикт: есть ли оружия прочней принимаемой прочности
  const hasWeaponDurability = weapons.some(
    (weapon) => weapon.durability > durability
  );
  console.log(hasWeaponDurability);
  return hasWeaponDurability;
}

function getReliableWeaponsNames(durability) {
  // принимает значение прочности и возвращает имена оружий, которые прочней полученного значения
  const weaponDurabilityNames = weapons
    .filter((weapon) => weapon.durability > durability)
    .map((weapon) => {
      return weapon.name;
    });
  console.log(weaponDurabilityNames);
  return weaponDurabilityNames;
}

function getTotalDamage() {
  // возвращает общую сумму урона всех оружий
  let sum = 0;
  const totalDamage = weapons.map((weapon) => {
    sum = weapon.attack + sum;
    return sum;
  });
  console.log(totalDamage[totalDamage.length - 1]);
  return totalDamage[totalDamage.length - 1];
}

function getValuestCountToSumValues(numbers, sum) {
  let sumValues = 0;
  let i = 0;
  numbers.some((number) => {
    sumValues = number + sumValues;
    i++;
    if (sumValues >= sum) {
      console.log(i);
      return i;
    }
  });
  if (sumValues < sum) {
    console.log(numbers.length);
    return numbers.length;
  }
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
  let i = 0;
  function toEqual(number) {
    if (number === arr2[i] && arr1.length === arr2.length) {
      console.log(number);
      console.log(arr2[i]);
      i++;
      console.log(true);
      return true;
    } else {
      console.log(false);
      return false;
    }
  }
  //console.log(arr1.every(toEqual))
  return arr1.every(toEqual);
}

// compareArrays([8, 9], [6]); // false, разные значения
// compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]); // false, разные значения
// compareArrays([9, 2, 4, 8, 2], [9, 2, 4]); // false, разные значения
// compareArrays([1, 2, 3], [2, 3, 1]); // false, разные индексы, хотя и одинаковые значения
// compareArrays([8, 1, 2], [8, 1, 2]); // true

// const limit = 10;
// function memorize(sum, limit) {
//     const mSum = memorize(sum, 5) {
//         memory.find
//         }; // 5 результатов может хранится в памяти
//     const memory = []
//     return mSum(...args)
// }

const limit = 10; 
function memorize(f, limit) {
  const memory = [
    {
      args: [3, 4],
      result: 7,
    },
    {
      args: [1, 3],
      result: 4,
    },
  ];

  const mSum = (...rest) => {
    //console.log(f(...rest));
    const arrArg = rest;
    //console.log(rest)

    memory.find((element) => {
      if (compareArrays(element.args, arrArg)) {
        console.log(element.result);
        return element.result;
        
      } else {
        const newResult = f(...rest)
        console.log(newResult);
        memory.push({args:[...rest], result: newResult});
        if (memory.length > limit) {
          memory.shift(0)
        }
      }
    });
  };
  console.log(memory)
  return mSum;
  
}

const resultFunction = memorize((a, b) => a + b);
resultFunction(3, 4); // <= должно вывести: 7
resultFunction(5, 4); // <= ничего не найдёт в памяти.
