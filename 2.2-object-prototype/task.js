//Задача №1
function String(text) {
  this.text = text.toLowerCase();
}

const newText = new String("А роза упала на лапу Азора");

String.prototype.isPalindrome = function () {
  for (let i = 0; i < this.text.length; i++) {
    //  console.log (this.text.length);
    //  console.log (this.text[i]);
    //  console.log (this.text.length - 1 - i)
    //  console.log (this.text[this.text.length - 1 - i]);
    if (this.text[i] == this.text[this.text.length - 1 - i]) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(newText.isPalindrome());

// Задача №2

function getAverageMark(marks) {
  let sum = 0;

  if (marks.length == 0) {
    return 0;
  }

  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  let average = sum / marks.length;
  let roundedAverage = Math.round(average);
  return roundedAverage;
}

// Задача №3
function checkBirthday(birthday) {
  // Неудачная попытка альтернативного решения

  //   const years = new Date().getFullYear() - birthday.getFullYear(); // текущая дата
  //   console.log(years);
  //   const months = new Date().getMonth() - birthday.getMonth();
  //   console.log(months);
  //   const days = new Date().getDate() - birthday.getDate();
  //   console.log(days);

  //   if (years > 18) {
  //     return true;
  //   } else if (years < 18) {
  //     return false;
  //   } else if (years == 0) {
  //     if (months > 0) {
  //       return true;
  //     } else if (months < 0) {
  //       return false;
  //     } else if (months == 0) {
  //       if (days >= 0) {
  //         true;
  //       } else {
  //         false;
  //       }
  //     }
  //   }
  // }

  let now = Date.now(); // текущая дата в Unix Timestamp
  console.log(now);
  let date = new Date(birthday); // дата рождения
  console.log(date);
  let bDay = date.getTime(); // дата рождения в Unix Timestamp
  console.log(bDay);
  let diff = now - bDay; // определяем разницу между текущей датой и днем рождения
  console.log(diff);
  let age = (diff / 86400000) * 365.25; // определяем возраст
  console.log(age);
  if (age > 18) {
    return true;
  } else {
    return false;
  }
}
