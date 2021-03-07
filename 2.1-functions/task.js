"use strict";

// Задание №1
function getSolutions(a, b, c) {
  let D = b ** 2 - 4 * a * c;

  if (D < 0) {
    return { D: D, roots: [] };
  } else if (D === 0) {
    let x1 = -b / (2 * a);
    return { D: D, roots: [x1] };
  } else {
    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    let x2 = (-b - Math.sqrt(D)) / (2 * a);
    return { D: D, roots: [x1, x2] };
  }
}

function showSolutionsMessage(a, b, c) {
  let result = getSolutions(a, b, c);
  console.log(`«Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}»`);
  console.log(`Значение дискриминанта: ${result.D}`);

  if (result.roots.length === 2) {
    console.log(
      `Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`
    );
  } else if (result.roots.length === 1) {
    console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
  } else {
    console.log(`Уравнение не имеет вещественных корней`);
  }
}

showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);

// Задание №2
function getAverageScore(data) {
  let averageMark;
  let average;
  let sumAverage = 0;
  let newData = {};

  if (Object.keys(data).length == 0) {
    // как считать длину объекта пришлось загуглить. Пробовал задавaть другие условия, но не работало.
    return (average = 0); // Например. data == false или data == 0 или data == {}.
  }

  for (let science in data) {
    let marks = data[science];
    getAverageMark(marks);

    newData[science] = averageMark;
    sumAverage += averageMark;
  }

  average = sumAverage / Object.keys(data).length;
  newData.average = average;
  return newData;

  function getAverageMark(marks) {
    let sum = 0;

    if (marks.length == 0) {
      // Если по предмету нет ни одной оценки
      return (averageMark = 0);
    }

    for (let i = 0; i < marks.length; i++) {
      sum += marks[i];
    }

    averageMark = sum / marks.length;
    return averageMark;
  }
}

console.log(
  getAverageScore({
    algebra: [2, 4, 5, 2, 3, 4],
    geometry: [2, 4, 5],
    russian: [3, 3, 4, 5],
    physics: [5, 5],
    music: [2, 2, 6],
    endlish: [4, 4, 3],
    poetry: [5, 3, 4],
    chemistry: [2],
    french: [4, 4],
  })
);

//Задача №3
function getPersonData(secretData) {
  let newSecretData;
  for (let key in secretData) {
    let secret = secretData[key];
    //newSecretData[key] = getDecodedValue(secret);
    newSecretData = {
      firstName: getDecodedValue(secret),
      lastName: getDecodedValue(secret),
    };
  }

  return newSecretData;
}

function getDecodedValue(secret) {
  if (secret == 0) {
    return "Родриго";
  } else if (secret == 1) {
    return "Эмильо";
  }
}

console.log(getPersonData({ aaa: 0, bbb: 0 }));
console.log(getPersonData({ aaa: 1, bbb: 0 }));
console.log(getPersonData({ aaa: 0, bbb: 1 }));
console.log(getPersonData({ aaa: 1, bbb: 1 }));
