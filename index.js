// /**
//  *
//  * @param {number} value
//  * @returns {boolean}
//  */

// const isAdult = function(value){
//   if(value >= 18){
//     return true;
//   }
//   return false;
// }
// console.log(isAdult(0))

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
// const isNumMultiple = function(value){
//   return value > 20 && value % 7 === 0;
// }

// console.log(isNumMultiple(63))

// /**
//  *
//  * @param {number} value1
//  * @param {number} value2
//  * @param {number} value3
//  * @returns {boolean}
//  */
// const checkTriangular = function (value1, value2, value3){
//   return value1 + value2 > value3 && value1 + value3 > value2 && value2 + value3 > value1;
// }

// console.log(checkTriangular(5, 3, 10));

// /**
//  *
//  * @param {number} value1
//  * @param {number} value2
//  * @returns number
//  */
// const checkParityOfTwoNum = function (value1, value2) {
//   if (value1 % 2 === 0 && value2 % 2 === 0 ) {
//     return value1 + value2;
//   }
//   return value1 * value2;

// };

// console.log(checkParityOfTwoNum(6,5))

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

// console.log(calculateSquareEquation(5,3,7))

/**
 *
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @returns {boolean}
 */
const isNumMeasure = function (num1, num2, num3) {
  return (
    num1 + num2 + num3 === 180 && (num1 === 90 || num2 === 90 || num3 === 90)
  );
};

console.log(isNumMeasure(70, 20, 90));
