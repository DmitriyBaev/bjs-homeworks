"use strict";

// Задача №1

function parseCount(value) {
  const parcedValue = Number.parseInt(value);
  if (isNaN(parcedValue)) {
    throw new Error("Невалидное значение");
  }
  return parcedValue;
}

function validateCount(value) {
  try {
    const parcedValue2 = parseCount(value);
    return parcedValue2;
  } catch (error) {
    return error;
  }
}

//console.log(parseCount("fff"));
// console.log(parseCount("123"));
 console.log(validateCount("fff"));
 console.log(validateCount(123));

// Задача №2

class Triangle {
    constructor (a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if (((this.a + this.b) < this.c) || ((this.b + this.c) < this.a) || ((this.c + this.a) < this.b)) {
          throw new Error("Треугольник с такими сторонами не существует")
        }
    }

    getPerimeter() { //считаем периметр
      return (this.a + this.b + this.c).toFixed(3);
    }

    getArea() { // считаем площадь
        const p = 1/2 * this.getPerimeter();
        let area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return area.toFixed(3)
    }
}

    function getTriangle(a, b, c) {
        try { 
          const value = new Triangle (a, b, c);
          console.log(value);
          return value
        }
        catch (error) {
          const value2 = {
            getPerimeter() {
            return 'Ошибка! Треугольник не существует'
          },
          getArea() {
            return 'Ошибка! Треугольник не существует'
          }
        }
          console.log(value2);
          return value2;
        }
    }

    getTriangle (200, 5, 5)
    
        