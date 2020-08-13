"use strict";

// /////////////////////////////////////////////////////
// // Conditions. Task
// /////////////////////////////////////////////////////

// let num1 = prompt("Введите число");
// num1 = Number(num1);
// if (!isNaN(num1)) {
//   if (!(num1 % 5)) {
//     alert(`${num1} делится на 5`);
//   } else {
//     alert(`${num1} не делится на 5`);
//   }

//   if (!(num1 % 3)) {
//     alert(`${num1} делится на 3`);
//   } else {
//     alert(`${num1} не делится на 3`);
//   }

//   if (!(num1 % 2)) {
//     alert(`${num1} делится на 2`);
//   } else {
//     alert(`${num1} не делится на 2`);
//   }
// } else {
//   alert("Не является числом");
// }

// /////////////////////////////////////////////////////
// // Switch. Task1
// /////////////////////////////////////////////////////

// let num2 = prompt("Введите одно из чисел: 1, 2, 3 или 4");
// let result;
// switch (num2) {
//   case "1":
//     {
//       result = "Зима";
//     }
//     break;
//   case "2":
//     {
//       result = "Весна";
//     }
//     break;
//   case "3":
//     {
//       result = "Лето";
//     }
//     break;
//   case "4":
//     {
//       result = "Осень";
//     }
//     break;
//   default:
//     console.log("Неверное значение");
// }

// console.log(result);

/////////////////////////////////////////////////////
// Switch. Task2
/////////////////////////////////////////////////////

// let month = prompt("Введите номер месяца от 1 до 12");
// month = Number(month);
// switch (month) {
//   case 1:
//   case 2:
//   case 12:
//     {
//       console.log("Зима");
//     }
//     break;

//   case 3:
//   case 4:
//   case 5:
//     {
//       console.log("Весна");
//     }
//     break;

//   case 6:
//   case 7:
//   case 8:
//     {
//       console.log("Лето");
//     }
//     break;

//   case 9:
//   case 10:
//   case 11:
//     {
//       console.log("Осень");
//     }
//     break;

//   default:
//     console.log("Неверное значение");
// }

/////////////////////////////////////////////////////
// Switch. Task2 (option 2)
/////////////////////////////////////////////////////

// let month = prompt("Введите номер месяца от 1 до 12");
// month = Number(month);
// switch (true) {
//   // Если перечислить несколько инструкций со строгим равенстром через оператор &&, инструкции не выполнятся. Например: case month === 1 && month === 2:

//   case month >= 1 && month <= 2:
//   case month === 12:
//     {
//       console.log("Зима");
//     }
//     break;

//   case month >= 3 && month <= 5:
//     {
//       console.log("Весна");
//     }
//     break;

//   case month >= 6 && month <= 8:
//     {
//       console.log("Лето");
//     }
//     break;

//   case month >= 9 && month <= 11:
//     {
//       console.log("Осень");
//     }
//     break;

//   default:
//     console.log("Неверное значение");
// }

/////////////////////////////////////////////////////
// Switch. Task3
/////////////////////////////////////////////////////

// let weekDay = prompt("Введите номер дня недели");
// switch (weekDay) {
//   case "1":
//     {
//       alert("Понедельник");
//     }
//     break;

//   case "2":
//     {
//       alert("Вторник");
//     }
//     break;

//   case "3":
//     {
//       alert("Среда");
//     }
//     break;

//   case "4":
//     {
//       alert("Четверг");
//     }
//     break;

//   case "5":
//     {
//       alert("Пятница");
//     }
//     break;

//   case "6":
//     {
//       alert("Суббота");
//     }
//     break;

//   case "7":
//     {
//       alert("Воскресенье");
//     }
//     break;

//   default: {
//     alert("Неверное значение");
//   }
// }

/////////////////////////////////////////////////////
// Switch. Task4
/////////////////////////////////////////////////////

// let day = prompt("Введите дату");
// day = Number(day);
// switch (true) {
//   case day >= 1 && day <= 10:
//     {
//       console.log("Первая декада месяца");
//     }
//     break;

//   case day >= 11 && day <= 20:
//     {
//       console.log("Вторая декада месяца");
//     }
//     break;

//   case day >= 21 && day <= 31:
//     {
//       console.log("Третья декада месяца");
//     }
//     break;

//   default: {
//     console.log("Неверное значение");
//   }
// }

/////////////////////////////////////////////////////
// Cycle FOR. Task1
/////////////////////////////////////////////////////

// let number = +prompt("Введите натуральное число");
// let factorial = 1;

// if (number > 1) {
//   for (let i = 1; i <= number; i++) {
//     factorial *= i;
//   }
//   console.log(`${number}! = ${factorial}`);
// } else if (number === 1 || number === 0) {
//   factorial = 1;
//   console.log(`${number}! = ${factorial}`);
// }

/////////////////////////////////////////////////////
// Cycle FOR. Task2
/////////////////////////////////////////////////////

// let num3 = prompt(
//   "Введите число элементов последовательности 1 + 1/2 + 1/3 + ... + 1/N"
// );
// num3 = Number(num3);
// let sumNumbers = 0;
// for (let i = 1; i <= num3; i++) {
//   sumNumbers += 1 / i;
// }
// console.log(
//   `Сумма ${num3} элементов последовательности 1 + 1/2 + 1/3 + ... + 1/N = ${sumNumbers}`
// );

/////////////////////////////////////////////////////
// Cycle FOR. Task3
/////////////////////////////////////////////////////

// let lim1 = +prompt("Введите первое число");
// let lim2 = +prompt("Введите второе число");
// let multiplyNumbers;

// if (lim1 < lim2) {
//   multiplyNumbers = lim1;
//   for (let i = lim1; i < lim2; i++) {
//     multiplyNumbers = multiplyNumbers * (i + 1);
//   }
// } else if (lim1 > lim2) {
//   multiplyNumbers = lim2;
//   for (let i = lim2; i < lim1; i++) {
//     multiplyNumbers = multiplyNumbers * (i + 1);
//   }
// } else if (lim1 === lim2) {
//   console.log("Числа не должны быть равны");
// } else {
//   console.log("Неверные значения");
// }

// console.log(
//   `Произведение чисел в пределах от ${lim1} до ${lim2} = ${multiplyNumbers}`
// );

/////////////////////////////////////////////////////
// Functions. Task1
/////////////////////////////////////////////////////

let num4 = +prompt("Введите натуральное число");

function isPrime() {
  for (let i = num4 - 1; i > 1; i--) {
    if (num4 % i === 0) {
      console.log(`Число ${num4} не является простым`);
      break;
    }
  }

  for (let i = num4 - 1; i > 1; ) {
    if (num4 % i !== 0) {
      i--;
    }
    console.log(`Число ${num4} является простым`);
  }
}

isPrime();
