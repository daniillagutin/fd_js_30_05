// /**
//  *
//  * @param {number} value
//  * @returns {boolean}
//  */

// const isAdult = function (value) {
//   if (value >= 18) {
//     return true;
//   }
//   return false;
// };
// console.log(isAdult(0));

// /**
//  *
//  * @param {number} value1
//  * @param {number} value2
//  * @returns {boolean}
//  */

// const checkmMultiplicityOfTwo = function (value1, value2) {
//   return value1 % value2 === 0;
// };

// console.log(checkmMultiplicityOfTwo(20, 3));

// /**
//  *
//  * @param {number} value
//  * @returns {boolean}
//  */
// const isNumMultiple = function (value) {
//   return value > 20 && value % 7 === 0;
// };

// console.log(isNumMultiple(63));

// /**
//  *
//  * @param {number} value1
//  * @param {number} value2
//  * @param {number} value3
//  * @returns {boolean}
//  */
// const checkTriangular = function (value1, value2, value3) {
//   return (
//     value1 + value2 > value3 &&
//     value1 + value3 > value2 &&
//     value2 + value3 > value1
//   );
// };

// console.log(checkTriangular(5, 3, 10));

// /**
//  *
//  * @param {number} value1
//  * @param {number} value2
//  * @returns number
//  */
// const checkParityOfTwoNum = function (value1, value2) {
//   if (value1 % 2 === 0 && value2 % 2 === 0) {
//     return value1 + value2;
//   }
//   return value1 * value2;
// };

// console.log(checkParityOfTwoNum(6, 5));

// /**
//  *
//  * @param {number} a
//  * @param {number} b
//  * @param {number} c
//  * @returns {null | [numbers]}
//  */
// const calculateSquareEquation = function (a = 1, b = -2, c = -3) {
//   const D = b * b - 4 * a * c;
//   if (D < 0) {
//     return null;
//   }
//   if (D === 0) {
//     const x = -b / (2 * a);
//     return x;
//   }
//   const x1 = (-b + D ** 0.5) / (2 * a);
//   const x2 = (-b - D ** 0.5) / (2 * a);
//   return [x1, x2];
// };

// console.log(calculateSquareEquation(5, 3, 7));

// /**
//  *
//  * @param {number} num1
//  * @param {number} num2
//  * @param {number} num3
//  * @returns {boolean}
//  */
// const isNumMeasure = function (num1, num2, num3) {
//   return (
//     num1 + num2 + num3 === 180 && (num1 === 90 || num2 === 90 || num3 === 90)
//   );
// };

// console.log(isNumMeasure(70, 20, 90));

// const userChoose = prompt("Enter number language:\n1-ua\n2-en\n3-fr\n4-pl");
// if (userChoose === "1") {
//   console.log("Вітаю");
// } else if (userChoose === "2") {
//   console.log("Hello");
// } else if (userChoose === "3") {
//   console.log("Salut");
// } else if (userChoose === "4") {
//   console.log("Czesc");
// } else {
//   console.log("404");
// }

// const userChoose = prompt(
//   "Enter number of the month:\n1-january\n2-february\n3-march\n4-april\n5-may\n6-june\n7-july\n8-august\n9-september\n10-october\n11-november\n12-december"
// );
// switch (userChoose) {
//   case "1":
//   case "january":
//   case "2":
//   case "february":
//   case "12":
//   case "december":
//     console.log("winter");
//     break;
//   case "3":
//   case "march":
//   case "4":
//   case "april":
//   case "5":
//   case "may":
//     console.log("spring");
//     break;
//   case "6":
//   case "june":
//   case "7":
//   case "july":
//   case "8":
//   case "august":
//     console.log("summer");
//     break;
//   case "9":
//   case "september":
//   case "10":
//   case "october":
//   case "11":
//   case "november":
//     console.log("autumn");
//     break;
// }

// const userChoose = prompt(
//   "Enter number of the month:\n1-january\n2-february\n3-march\n4-april\n5-may\n6-june\n7-july\n8-august\n9-september\n10-october\n11-november\n12-december"
// );
// if (
//   userChoose === "1" ||
//   userChoose === "january" ||
//   userChoose === "2" ||
//   userChoose === "february" ||
//   userChoose === "12" ||
//   userChoose === "december"
// ) {
//   console.log("winter");
// } else if (
//   userChoose === "3" ||
//   userChoose === "march" ||
//   userChoose === "4" ||
//   userChoose === "april" ||
//   userChoose === "5" ||
//   userChoose === "may"
// ) {
//   console.log("spring");
// } else if (
//   userChoose === "6" ||
//   userChoose === "june" ||
//   userChoose === "7" ||
//   userChoose === "july" ||
//   userChoose === "8" ||
//   userChoose === "august"
// ) {
//   console.log("summer");
// } else if (
//   userChoose === "9" ||
//   userChoose === "september" ||
//   userChoose === "10" ||
//   userChoose === "october" ||
//   userChoose === "11" ||
//   userChoose === "november"
// ) {
//   console.log("autumn");
// } else {
//   console.log(404);
// }

const userInputAge = prompt("age:");
const userAge = Number(userInputAge);

if (
  userInputAge === "" ||
  userInputAge === null ||
  isNaN(userAge) ||
  userAge < 0 ||
  userAge > 150
) {
  console.log("error");
} else if (userAge < 2) {
  console.log("baby");
}
else if (userAge < 6) {
  console.log("kinder");
}
else if (userAge < 12) {
  console.log("child");
}
else if (userAge < 18) {
  console.log("tinager");
}
else if (userAge < 65) {
  console.log("adult");
}
else if (userAge < 100) {
  console.log("old");
}
else if (userAge < 150) {
  console.log("super!");
}
