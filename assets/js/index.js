"use strict";

// /////////////////////////////////////////////////////
// // Conditions. Task
// /////////////////////////////////////////////////////

let num1 = prompt("Введите число");
num1 = Number(num1);
if (!isNaN(num1)) {
  if (!(num1 % 5)) {
    alert(`${num1} делится на 5`);
  } else {
    alert(`${num1} не делится на 5`);
  }

  if (!(num1 % 3)) {
    alert(`${num1} делится на 3`);
  } else {
    alert(`${num1} не делится на 3`);
  }

  if (!(num1 % 2)) {
    alert(`${num1} делится на 2`);
  } else {
    alert(`${num1} не делится на 2`);
  }
} else {
  alert("Не является числом");
}

// /////////////////////////////////////////////////////
// // Switch. Task1
// /////////////////////////////////////////////////////

let num2 = prompt("Введите одно из чисел: 1, 2, 3 или 4");
let result;
switch (num2) {
  case "1":
    {
      result = "Зима";
    }
    break;
  case "2":
    {
      result = "Весна";
    }
    break;
  case "3":
    {
      result = "Лето";
    }
    break;
  case "4":
    {
      result = "Осень";
    }
    break;
  default:
    console.log("Неверное значение");
}

console.log(result);

/////////////////////////////////////////////////////
// Switch. Task2
/////////////////////////////////////////////////////

let month = prompt("Введите номер месяца от 1 до 12");
month = Number(month);
switch (month) {
  case 1:
  case 2:
  case 12:
    {
      console.log("Зима");
    }
    break;

  case 3:
  case 4:
  case 5:
    {
      console.log("Весна");
    }
    break;

  case 6:
  case 7:
  case 8:
    {
      console.log("Лето");
    }
    break;

  case 9:
  case 10:
  case 11:
    {
      console.log("Осень");
    }
    break;

  default:
    console.log("Неверное значение");
}

/////////////////////////////////////////////////////
// Switch. Task2 (option 2)
/////////////////////////////////////////////////////

let month = prompt("Введите номер месяца от 1 до 12");
month = Number(month);
switch (true) {
  // Если перечислить несколько инструкций со строгим равенстром через оператор &&, инструкции не выполнятся. Например: case month === 1 && month === 2:

  case month >= 1 && month <= 2:
  case month === 12:
    {
      console.log("Зима");
    }
    break;

  case month >= 3 && month <= 5:
    {
      console.log("Весна");
    }
    break;

  case month >= 6 && month <= 8:
    {
      console.log("Лето");
    }
    break;

  case month >= 9 && month <= 11:
    {
      console.log("Осень");
    }
    break;

  default:
    console.log("Неверное значение");
}

/////////////////////////////////////////////////////
// Switch. Task3
/////////////////////////////////////////////////////

let weekDay = prompt("Введите номер дня недели");
switch (weekDay) {
  case "1":
    {
      alert("Понедельник");
    }
    break;

  case "2":
    {
      alert("Вторник");
    }
    break;

  case "3":
    {
      alert("Среда");
    }
    break;

  case "4":
    {
      alert("Четверг");
    }
    break;

  case "5":
    {
      alert("Пятница");
    }
    break;

  case "6":
    {
      alert("Суббота");
    }
    break;

  case "7":
    {
      alert("Воскресенье");
    }
    break;

  default: {
    alert("Неверное значение");
  }
}

/////////////////////////////////////////////////////
// Switch. Task4
/////////////////////////////////////////////////////

let day = prompt("Введите дату");
day = Number(day);
switch (true) {
  case day >= 1 && day <= 10:
    {
      console.log("Первая декада месяца");
    }
    break;

  case day >= 11 && day <= 20:
    {
      console.log("Вторая декада месяца");
    }
    break;

  case day >= 21 && day <= 31:
    {
      console.log("Третья декада месяца");
    }
    break;

  default: {
    console.log("Неверное значение");
  }
}

/////////////////////////////////////////////////////
// Cycle FOR. Task1
/////////////////////////////////////////////////////

let number = +prompt("Введите натуральное число");
let factorial = 1;

if (number > 1) {
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }
  console.log(`${number}! = ${factorial}`);
} else if (number === 1 || number === 0) {
  factorial = 1;
  console.log(`${number}! = ${factorial}`);
}

/////////////////////////////////////////////////////
// Cycle FOR. Task2
/////////////////////////////////////////////////////

let num3 = prompt(
  "Введите число элементов последовательности 1 + 1/2 + 1/3 + ... + 1/N"
);
num3 = Number(num3);
let sumNumbers = 0;
for (let i = 1; i <= num3; i++) {
  sumNumbers += 1 / i;
}
console.log(
  `Сумма ${num3} элементов последовательности 1 + 1/2 + 1/3 + ... + 1/N = ${sumNumbers}`
);

/////////////////////////////////////////////////////
// Cycle FOR. Task3
/////////////////////////////////////////////////////

let lim1 = +prompt("Введите первое число");
let lim2 = +prompt("Введите второе число");
let multiplyNumbers;

if (lim1 < lim2) {
  multiplyNumbers = lim1;
  for (let i = lim1; i < lim2; i++) {
    multiplyNumbers = multiplyNumbers * (i + 1);
  }
} else if (lim1 > lim2) {
  multiplyNumbers = lim2;
  for (let i = lim2; i < lim1; i++) {
    multiplyNumbers = multiplyNumbers * (i + 1);
  }
} else if (lim1 === lim2) {
  console.log("Числа не должны быть равны");
} else {
  console.log("Неверные значения");
}

console.log(
  `Произведение чисел в пределах от ${lim1} до ${lim2} = ${multiplyNumbers}`
);

/////////////////////////////////////////////////////
// Functions. Task1
/////////////////////////////////////////////////////

function isPrime(num4) {
  if (num4 < 2 || isNaN(num4)) {
    return false;
  }
  for (let i = 2; i < num4; i++) {
    if (num4 % i === 0) {
      return false;
    } else continue;
  }
  return true;
}

let num4 = +prompt("Введите натуральное число");
let result = isPrime(num4);
console.log(result);

/////////////////////////////////////////////////////
// Functions. Task2
/////////////////////////////////////////////////////

function checkMultiplicity(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return false;
  }
  return !(a % b);
}

let a = +prompt("Введите первое число");
let b = +prompt("Введите второе число");
let result2 = checkMultiplicity(a, b);
console.log(result2);

/////////////////////////////////////////////////////
// Functions. Task3
/////////////////////////////////////////////////////

function isTriangle(x, y, z) {
  return x + y > z && x + z > y && y + z > x;
}

let x = +prompt("Введите длину стороны треугольника x");
let y = +prompt("Введите длину стороны треугольника y");
let z = +prompt("Введите длину стороны треугольника z");
let result3 = isTriangle(x, y, z);
if (result3) {
  console.log("Треугольник возможен");
} else {
  console.log("Треугольник невозможен");
}

/////////////////////////////////////////////////////
// Functions. Task4
/////////////////////////////////////////////////////

function calcRectangleArea(c, d) {
  return c * d;
}

let c = +prompt("Введите длину стороны прямоугольника c");
let d = +prompt("Введите длину стороны прямоугольника d");
console.log(`Площадь прямоугольника = ${calcRectangleArea(c, d)}`);

// Вычисление через длину стороны и высоту треугольника:
function calcTriangleArea(e, h) {
  return (e * h) / 2;
}

let e = +prompt("Введите длину стороны треугольника e");
let h = +prompt("Введите высоту треугольника h");
console.log(`Площадь треугольника = ${calcTriangleArea(e, h)}`);

// Вычисление через длины трех сторон треугольника:
function calcTriangleArea2(g, f, k) {
  let p = (g + f + k) / 2;
  return (p * (p - g) * (p - f) * (p - k)) ** (1 / 2);
}

let g = +prompt("Введите длину стороны треугольника g");
let f = +prompt("Введите длину стороны треугольника f");
let k = +prompt("Введите длину стороны треугольника k");
console.log(`Площадь треугольника = ${calcTriangleArea2(g, f, k)}`);

/////////////////////////////////////////////////////
// Objects. Tasks
/////////////////////////////////////////////////////

const student = {
  name: "Anna",
  surname: "Voloshina",
  isMale: false,
  adress: {
    city: "Zaporizhzhya",
    street: "Lenina",
    building: "159A",
    appartment: 69,
  },
  contacts: "068-12-34-567",
};

console.log(student);

const studentStatus = {
  faculty: "Faculyi of Electronics",
  academicDepartment: "Semiconductors and Dielectrics",
};

console.log(studentStatus);

/////////////////////////////////////////////////////
// Arrays. Tasks
/////////////////////////////////////////////////////

// Создаем и инициализируем числовой массив:
const arr = [
  258,
  753159,
  15,
  544,
  0,
  444567893,
  4896,
  197346,
  6,
  0,
  258,
  753159,
  15,
  544,
  0,
  444567893,
  4896,
  197346,
  6,
  0,
];

console.log(arr);

// Выводим длину массива:
console.log(`Длина массива = ${arr.length}`);

// Выводим элементы с четными индексами:
for (let i = 0; i < arr.length; i++) {
  if (i % 2 === 0) {
    console.log(arr[i]);
  }
}

// Выводим четные элементы:
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log(arr[i]);
  }
}

// Выводим индексы элементов, равных нулю:
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 0) {
    console.log(i);
  }
}

// Выводим количество нулевых элементов:
function countZero() {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      count++;
    }
  }

  return count;
}

console.log(`Количество нулевых элементов = ${countZero()}`);

/////////////////////////////////////////////////////
// Functions Constructors. Tasks
/////////////////////////////////////////////////////

function Book(author, name, year, publisher) {
  this.author = author;
  this.name = name;
  this.year = year;
  this.publisher = publisher;
}

function Ebook(format, eNumber) {
  this.format = format;
  this.eNumber = eNumber;
}

Ebook.prototype = new Book();

const book1 = new Book("McPeak", "Beginning JavaScript", 2015, "John Wiley");
const book2 = new Ebook("A5", 159753);
book2.author = "Marijn Haverbeke";
book2.name = "Eloquent JavaScript";
book2.year = 2019;
book2.publisher = "Piter";

console.log(book1);
console.log(book2);

/////////////////////////////////////////////////////
// Function Constructor MyArray. Task
/////////////////////////////////////////////////////

function MyArray() {
  //   Добавляем аргументы в массив:
  this.length = 0;
  for (let i = 0; i < arguments.length; i++) {
    this[this.length] = arguments[i];
    this.length++;
  }

  // Метод POP:
  this.pop = function () {
    let lastItem = this[this.length - 1];
    delete this[this.length - 1];
    this.length = this.length - 1;
    return lastItem;
  };

  // Метод PUSH:
  this.push = function () {
    let lastItem;
    while (lastItem) {
      lastItem = prompt("Введите новый элемент массива");
      this.length = this.length + 1;
      this[this.length - 1] = lastItem;
      return this.length;
    }
  };

  // Метод ForEACH:
  this.forEach = function (someFunc) {
    for (let i = 0; i < this.length; i++) {
      someFunc(this[i], i, this);
    }
  };
}

const myArr = new MyArray(654, 2478, 2, 74189, 741);
