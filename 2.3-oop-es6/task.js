// Задание №1

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state = this.state * 1.5; // улучшение испорченного состояния
    //return this.state
  }

  set state(state) {
    if (state < 0) {
      this._state = 0;
    } else if (state > 100) {
      this._state = 100;
    } else {
      this._state = state;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "book";
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

const sherlock = new PrintEditionItem(
  "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
  2019,
  1008
);

console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100

const picknick = new FantasticBook(
  "Аркадий и Борис Стругацкие",
  "Пикник на обочине",
  1972,
  168
);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15

// Задача №2

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) { // добавляем книгу в хранилище books
    if (book._state > 30) {
    this.books.push(book);
    } else {
      console.log("Как Вам не стыдно! Такую хорошую книгу испортили!!!")
    }
  }

    findBookBy(type, value) { // ищем книгу
      for (let i = 0; i < this.books.length; i++) {
        if (this.books[i][type] == value) {
          return this.books[i];
        } 
      }
      return null
    }

  giveBookByName(bookName) { // удаляем книгу из хранилища books
    for (let i = 0; i < this.books.length; i++) {
        if (this.books[i].name == bookName) {
        return this.books.splice(i, 1)[0];
      } 
    } 
    return null
  }
}

const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));



console.log(library.findBookBy("releaseDate", "1919")) // ищем книгу
console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
console.log(library.giveBookByName("Машина времени")); //выдаем книгу
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3

// Немного потестируем
const lenin = new FantasticBook("Ленин", "Всем по биткоину", 1919, 777); // создаем новую книгу
library.addBook(lenin); // доавляем книгу в библиотеку
console.log(library.giveBookByName("Всем по биткоину")); //выдаем книгу
lenin._state = 15; // портим книгу
lenin.fix(); // чиним книгу
library.addBook(lenin) //доавляем книгу снова в библиотеку
console.log(library.books);

// Задача №3

class StudentLog{
  constructor (name){
    this.name = name;
    this.marks = {};
  }

  getName() { //возвращает имя ученика
    return this.name
  }

  addGrade(grade, subject) { // вносим оценку по соответствующему предмету
    
    if (!this.marks.hasOwnProperty(subject)) { // проверяем занесен ли предмет в журнал, если нет, то заносим
      this.marks[subject] = [];
    }
    console.log(this.marks.hasOwnProperty(subject));
    
    
    if (grade >= 1 && grade <= 5) { //проверяем корректность оценки
      
      this.marks[subject].push(grade);
      console.log(this.marks);
      return this.marks[subject].length;

    } else {
      console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5`);
      return this.marks[subject].length

    }
  }

  getAverageBySubject(subject) { // получаем среднюю оценку по названию предмета
    let sum = 0;
    let averageMark;

    if (!this.marks.hasOwnProperty(subject)) { //При отсутствии предмета выводим 0.
      return 0;
    }

    for (let i = 0; i < this.marks[subject].length; i++) {
      sum += this.marks[subject][i];
    }

    averageMark = sum / this.marks[subject].length; // считаем среднюю оценку
    return averageMark;

    
  }

  getTotalAverage() { // получаем среднюю оценку по всем предметам
    let avgMark;
    let sumAvgMark = 0;
    let average;

    // if (this.marks[subject].length == 0) { // если оценок нет, то выводим 0
    //     return 0;
    //   }

    const subjects = Object.keys(this.marks); // получаем массив всех предметов из журнала
    
    for (let i = 0; i < Object.keys(this.marks).length; i++) { // считаем среднюю оценку по каждому предмету
      avgMark = this.getAverageBySubject(subjects[i]);
      
      sumAvgMark += avgMark;        // сумма всех оценок
    }
    
    average = sumAvgMark / Object.keys(this.marks).length; // считаем среднюю оценку по всем предметам
    return average;
  }
}

const log = new StudentLog('Олег Никифоров');

console.log(log.getName()) // Олег Никифоров
console.log(log)




// console.log(log.addGrade(3, 'algebra'));
// // 1

// console.log(log.addGrade('отлично!', 'math'));
// // Вы пытались поставить оценку "отлично!" по предмету "math". Допускаются только числа от 1 до 5.
// // 0

// console.log(log.addGrade(4, 'algebra'));
// // 2

// console.log(log.addGrade(5, 'geometry'));
// // 1

// console.log(log.addGrade(25, 'geometry'));
// // Вы пытались поставить оценку "25" по предмету "geometry". Допускаются только числа от 1 до 5.
// // 1

log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log(log.getAverageBySubject('geometry')); // 4.5
console.log(log.getAverageBySubject('algebra')); // 3
console.log(log.getAverageBySubject('math')); // 0

console.log(log.getTotalAverage()); // 3,75