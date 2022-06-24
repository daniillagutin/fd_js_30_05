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
/*--------------------------------------------------------------------------------------------------------
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
/*--------------------------------------------------------------------------------------------------------
// /**
//  *
//  * @param {number} value
//  * @returns {boolean}
//  */
// const isNumMultiple = function (value) {
//   return value > 20 && value % 7 === 0;
// };

// console.log(isNumMultiple(63));
/*--------------------------------------------------------------------------------------------------------
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
/*--------------------------------------------------------------------------------------------------------
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
/*--------------------------------------------------------------------------------------------------------
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
/*--------------------------------------------------------------------------------------------------------
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
/*--------------------------------------------------------------------------------------------------------
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
/*--------------------------------------------------------------------------------------------------------
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
/*--------------------------------------------------------------------------------------------------------
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
/*--------------------------------------------------------------------------------------------------------
// const userInputAge = prompt("age:");
// const userAge = Number(userInputAge);

// if (
//   userInputAge === "" ||
//   userInputAge === null ||
//   isNaN(userAge) ||
//   userAge < 0 ||
//   userAge > 150
// ) {
//   console.log("error");
// } else if (userAge < 2) {
//   console.log("baby");
// }
// else if (userAge < 6) {
//   console.log("kinder");
// }
// else if (userAge < 12) {
//   console.log("child");
// }
// else if (userAge < 18) {
//   console.log("tinager");
// }
// else if (userAge < 65) {
//   console.log("adult");
// }
// else if (userAge < 100) {
//   console.log("old");
// }
// else if (userAge < 150) {
//   console.log("super!");
// }
/*--------------------------------------------------------------------------------------------------------
// /**
//  *
//  * @param {number} num1
//  * @returns {string}
//  */
// const isNumberMultiple = function (num1) {
//   return num1 % 2 === 0 ? "Even" : "Odd";
// };
// console.log(isNumberMultiple(12));

// const getFactorial = function (limit = 4) {
//   let factorial = 1;
//   for (let i = 1; i <= limit; i++) {
//     factorial *= i;
//   }
//   return factorial;
// };
/*--------------------------------------------------------------------------------------------------------
// const getPower = function (base, pow) {
//   let res = 1;
//   for (let i = 0; i < pow; i++) {
//     res *= base;
//   }
//   return res;
// };
/*--------------------------------------------------------------------------------------------------------
// const cat1 = {
//   name: "Misha",
//   isMale: false,
//   age: 3,
//   color: "white",
//   jump: function () {
//     return "i'm jumping";
//   },
//   sleep: function () {
//     return "i'm sleeping";
//   },
// };

// const cat2 = {
//   name: "Mars",
//   isMale: true,
//   age: 4,
//   color: "grey",
//   jump: function () {
//     return "i'm jumping";
//   },
//   sleep: function () {
//     return "i'm sleeping";
//   },
// };

// console.log(cat1);
/*--------------------------------------------------------------------------------------------------------
// function User(fname, lname, isMale, age) {
//   this.fname = fname;
//   this.lname = lname;
//   this.isMale = isMale;
//   this.age = age;
//   this.fullName = function () {
//     return this.fname + " " + this.lname;
//   };
// }

// const user1 = new User("Jared", "Limb", true, 25);
// const user2 = new User("Eva", "Simpson", false, 15);
// const user3 = new User("Alex", "Rudel", true, 26);
/*--------------------------------------------------------------------------------------------------------
// function Country(name, population, area) {
//   this.name = name;
//   this.population = population;
//   this.area = area;
//   this.getDensity = function () {
//     return this.population / this.area;
//   };
// }

// const country1 = new Country("Ukraine", 41167336, 603628);
// const country2 = new Country("Japan", 125502000, 377975);
// const country3 = new Country("Australia", 26010900, 7692024);
/*--------------------------------------------------------------------------------------------------------
// function Kettle(maxVolume) {
//   this.maxVolume = maxVolume;
//   this.volume = 0;

//   this.addWater = function (value) {
//     this.volume += value;
//     return this.volume;
//   };
//   this.drainWater = function (value) {
//     this.volume -= value;
//     return this.volume;
//   };
// }

// const pot = new Kettle();
/*--------------------------------------------------------------------------------------------------------
// function createMultipleTable() {
//   const table = {};
//   for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//       table[`${i}*${j}`] = i * j;
//     }
//   }
//   return table;
// }
/*--------------------------------------------------------------------------------------------------------
// function MyArray() {
//   this.length = 0;
//   this.push = function (element) {
//     this[this.length] = element;
//     return ++this.length;
//   };
// }
/*--------------------------------------------------------------------------------------------------------
// function MyArrayPrototype() {
//   this.push = function (element) {
//     this[this.length] = element;
//     return ++this.length;
//   };
// }

// const myArrayPrototype = new MyArrayPrototype();
// MyArray.prototype = myArrayPrototype;

// const myArr = new MyArray();
// const myArr2 = new MyArray();
// myArr.push(11);
// console.log(myArr);
// /*--------------------------------*/
// const arr = [];
// const arr2 = [];
// arr.push(55);
// console.log(arr);
/*--------------------------------------------------------------------------------------------------------
// this.some = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i], i, this)) {
//       return true;
//     }
//   }
//   return false;
// };
/*--------------------------------------------------------------------------------------------------------
// this.filter = function(callback){
//   const newMyArr = new MyArray();
//   for (let i = 0; i < this.length; i++){
//     if(callback(this[i], i, this)){
//       newMyArr.push(this[i])
//     }
//   }
//   return newMyArr;
// }
/*--------------------------------------------------------------------------------------------------------
// /**
//  *
//  * @param {string} fname
//  * @param {string} lname
//  * @param {number} age
//  * @param {boolean} isMale
//  * @param {string} email
//  * @param {boolean} isSubscribed
//  */
// function User(fname, lname, age, isMale, email, isSubscribed = false) {
//   this.fname = fname;
//   this.lname = lname;
//   this.age = age;
//   this.isMale = isMale;
//   this.email = email;
//   this.isSubscribed = isSubscribed;
// }
// function UserPrototype() {
//   this.fullName = function () {
//     return `${this.fname} ${this.lname}`;
//   };
// }
// User.prototype = new UserPrototype();

// function createUsers(amount = 1) {
//   const arrUsers = [];
//   for (let i = 0; i < amount; i++) {
//     const user = new User(
//       `Elon${i}`,
//       `Musk${i}`,
//       Math.ceil(Math.random() * (60 - 20) + 20),
//       Math.random() > 0.5,
//       `emailEM${i}@gmail.com`
//     );
//     arrUsers.push(user);
//   }
//   return arrUsers;
// }
// const users = createUsers(20);
// console.table(users);

// const arrFullName = users.map(function (user) {
//   return user.fullName();
// });
// console.table(arrFullName);

// const arrOlderAge = users.filter(function (user) {
//   return user.age > 40;
// });
// console.table(arrOlderAge);

// users.forEach(function (user) {
//   user.isSubscribed = Math.random() > 0.5;
// });
// console.table(users);

// const newArr = users
//   .filter(function (user) {
//     return user.age > 40;
//   })
//   .filter(function (user) {
//     return user.isMale === false;
//   })
//   .filter(function (user) {
//     return user.isSubscribed === true;
//   })
//   .map(function (user) {
//     return user.email;
//   });
// console.table(newArr);

// const newArrMan = users
//   .filter(function (user) {
//     return user.isMale === true;
//   })
//   .filter(function (user) {
//     return user.age < 40;
//   })
//   .filter(function (user) {
//     return user.isSubscribed === false;
//   })
//   .map(function (user) {
//     return user.fullName();
//   });

// console.table(newArrMan);
/*--------------------------------------------------------------------------------------------------------*/

"use strict";

// const site = {
//   title: "green site",
//   headers: ["Header 1", "Header 2", "Header 3"],
//   showHeaders() {
//     this.headers.forEach((header)=> {
//       console.log(`${header} | ${this.title}`);
//     });
//   },
// };
// site.showHeaders();
/*--------------------------------------------------------------------------------------------------------*/

// const sum = (a, b) => {
//   return a + b;
// };

// const sum = (a, b) => a + b;
// console.log(sum(5, 7));

// const square = (n) => n * n;
// console.log(square(57));

// const logWord = (word) => console.log(word);
// logWord("qwerty");
/*--------------------------------------------------------------------------------------------------------*/

// const f1 = function (...restArguments) {
//   console.log(restArguments);
// };

// const f2 = (num1,...restArguments) => {
//   console.log(restArguments);
// };

// // console.dir(f1);
// // console.dir(f2);

// f1(1, 1, 1, 1);
// f2(2, 2, 2, 2);
/*--------------------------------------------------------------------------------------------------------*/

// const sum1 = (...args) => {
//   let sum1 = 0;
//   for (let i = 0; i < args.length; i++) {
//     sum1 += args[i];
//   }
//   return sum1;
// };

// console.log(sum1(2, 3, 5, 10, 20, 1, 20));
/*--------------------------------------------------------------------------------------------------------*/

// const sumNum = (...num) => num.reduce((acum, vol) => acum + vol);
// sumNum(1, 2, 3, 4);
/*--------------------------------------------------------------------------------------------------------*/

// const arr1 = ['a','c','e','g','i','k','m','o','q','s','u','w','y'];
// const arr2 = ['b','d','f','h','j','l','n','p','r','t','v','x','z'];

// const arr3 = [...arr1,...arr2];
// console.log(arr3);
/*--------------------------------------------------------------------------------------------------------*/

// const power = (base, pow) => {
//   if (pow === 0) {
//     return 1;
//   }
//   return base * power(base, pow - 1);
// };
// console.log(power(2, 3));
/*--------------------------------------------------------------------------------------------------------*/

// const str = "to Be or NoT To bE";
// const words = str.split(" ");
// const lowerWords = words.map((word) => {
//   return word.toLowerCase();
// });

// const sentence = lowerWords
//   .map((word) => {
//     return word[0].toUpperCase() + word.substring(1);
//   })
//   .join(" ");

// console.log(sentence);
/*--------------------------------------------------------------------------------------------------------*/
// const str1 = "to Be or NoT To bE";
// const countVowels = (str1, arr = ["a", "e", "i", "o", "u", "y"]) => {
//   return str1
//     .toLowerCase()
//     .split("")
//     .filter((letter) => arr.includes(letter)).length;
// };
/*--------------------------------------------------------------------------------------------------------*/

// class UserClass {
//   constructor(fname, sname, age) {
//     this.fname = fname;
//     this.sname = sname;
//     this.age = age;
//   }
//   get age() {
//     return this._age;
//   }
//   set age(age) {
//     if (typeof age !== "number") {
//       throw new TypeError("Age must be number");
//     }
//     if (age < 0 || age > 150) {
//       throw new RangeError("Age must be 0...150");
//     }
//     this._age = age;
//   }
//   getFullName() {
//     return `${this.fname} ${this.sname}`;
//   }
//   isAdult = () => this._age >= 18;
// }
/*--------------------------------------------------------------------------------------------------------*/

// class Worker {
//   constructor(fname, lname, rate, days) {
//     this.fname = fname;
//     this.lname = lname;
//     this.rate = rate;
//     this.days = days;
//   }
//   get days() {
//     return this._days;
//   }
//   set days(days) {
//     if (typeof days !== "number") {
//       throw new TypeError("Days must be number");
//     }
//     if (days < 1 || days > 26) {
//       throw new RangeError("Days must be 1...26");
//     }
//     this._days = days;
//   }
//   getSalary = () => this.rate * this._days;
// }

// const workerNew = new Worker("Tom", "Holding", 88.5, 13);
/*--------------------------------------------------------------------------------------------------------*/

// class Auto {
//   constructor(ownWeight) {
//     this.ownWeight = ownWeight;
//   }
//   get ownWeight() {
//     return this._ownWeight;
//   }
//   set ownWeight(weight) {
//     if (typeof weight !== "number") {
//       throw new TypeError("Weight must be number");
//     }
//     if (weight < 1500 || weight > 2000) {
//       throw new RangeError("Weight must be 1500...2000");
//     }
//     this._ownWeight = weight;
//   }
//   getFullWeight(objFuel) {
//     if (Fuel.isFuel(objFuel) === false) {
//       throw new TypeError("must be fuel");
//     }
//     return this.ownWeight + objFuel.weight;
//   }
// }

// class Fuel {
//   constructor(volume, dencity) {
//     this.volume = volume;
//     this.dencity = dencity;
//   }
//   get volume() {
//     return this._volume;
//   }
//   set volume(volume) {
//     if (typeof volume !== "number") {
//       throw new TypeError("Volume must be number");
//     }
//     if (volume < 0 || weight > 40) {
//       throw new RangeError("Volume must be 0...40");
//     }
//     this._volume = volume;
//   }
//   get dencity() {
//     return this._dencity;
//   }
//   set dencity(dencity) {
//     if (typeof dencity !== "number") {
//       throw new TypeError("Dencity must be number");
//     }
//     if (dencity < 0.65 || dencity > 0.85) {
//       throw new RangeError("Dencity must be 0.65...0.85");
//     }
//     this._dencity = dencity;
//   }
//   get weight() {
//     return this._volume * this._dencity;
//   }
//   static isFuel(obj) {
//     return obj instanceof Fuel;
//   }
// }
// const newAuto = new Auto(1700);
/*--------------------------------------------------------------------------------------------------------*/

// class Animal {
//   #type;
//   constructor(name, type, countOfLegs) {
//     this.name = name;
//     this.#type = type;
//     this.countOfLegs = countOfLegs;
//   }
//   get countOfLegs() {
//     return this._countOfLegs;
//   }
//   set countOfLegs(countOfLegs) {
//     if (typeof countOfLegs !== "number") {
//       throw new TypeError("countOfLegs must be number");
//     }
//     if (countOfLegs < 0 || countOfLegs > 4) {
//       throw new RangeError("countOfLegs must be 0...4");
//     }
//     this._countOfLegs = countOfLegs;
//   }
//   eat() {
//     return `${this.name} is eating.`;
//   }
//   static isAnimal(obj) {
//     return obj instanceof Animal;
//   }
// }

// const cat = new Animal("Muha", "cat", 4);
/*--------------------------------------------------------------------------------------------------------*/

// class User {
//   constructor(fname, lname) {
//     this.fname = fname;
//     this.lname = lname;
//     this._isBan = false;
//   }
//   getFullName() {
//     return `${this.fname} ${this.lname}`;
//   }
//   static isUser(obj) {
//     return obj instanceof User;
//   }
//   get isBan() {
//     return this._isBan;
//   }
// }

// class Moderator extends User {
//   constructor(fname, lname, permission) {
//     super(fname, lname);
//     this.permission = permission;
//   }
// }

// class Admin extends Moderator {
//   constructor(fname, lname, permission) {
//     super(fname, lname, permission);
//   }
//   ban(obj) {
//     if (User.isUser(obj) === false) {
//       throw new TypeError("must be user");
//     }
//     obj._isBan = true;
//   }
//   unBan(obj) {
//     if (User.isUser(obj) === false) {
//       throw new TypeError("must be user");
//     }
//     obj._isBan = false;
//   }
// }
// const admin = new Admin("Elon", "Musk", true);
/*--------------------------------------------------------------------------------------------------------*/

// class Squirrel {
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//   }
//   static isSquirrel(obj) {
//     return obj instanceof Squirrel;
//   }
//   jump() {
//     return `${this.name} is jumping`;
//   }
// }

// class FlySquirrel extends Squirrel {
//   constructor(name, color, maxDistanse) {
//     super(name, color);
//     this.maxDistanse = maxDistanse;
//   }
//   get maxDistanse() {
//     return this._maxDistanse;
//   }
//   set maxDistanse(maxDistanse) {
//     if (typeof maxDistanse !== "number") {
//       throw new TypeError("maxDistanse must be number");
//     }
//     if (maxDistanse < 0 || maxDistanse > 90) {
//       throw new RangeError("maxDistanse must be 0...90");
//     }
//     this._maxDistanse = maxDistanse;
//   }
//   fly(dist) {
//     if (dist <= this._maxDistanse) {
//       return `${this.name} is flying at ${dist}`;
//     }
//     return `${this.name} is not flying at ${dist}`;
//   }
// }

// class MagicFlySquirrel extends FlySquirrel {
//   constructor(name, color, maxDistanse, arrSongs) {
//     super(name, color, maxDistanse);
//     this.arrSongs = arrSongs;
//   }
//   songSing() {
//     this.arrSongs.forEach((song) => {
//       console.log(`${this.name} is singing ${song}`);
//     });
//   }
// }
/*--------------------------------------------------------------------------------------------------------*/

// const array = Array(20)
//   .fill()
//   .map(() => Math.floor(40 * Math.random()));
// console.log(array);
/*--------------------------------------------------------------------------------------------------------*/

// class LinkedListIterator{
//   constructor(list){
//     this.collection = list;
//     this.currentItem = null;
//   }
//   next(){
//     this.currentItem = this.currentItem?this.currentItem.next: this.collection.head;
//     return{
//       value: this.currentItem ? this.currentItem.value: undefined,
//       done: !this.currentItem,
//     }
//   }
// }

// class ListItem {
//   constructor(value) {
//     this.value = value;
//     this.prev = null;
//     this.next = null;
//   }
//   get value() {
//     return this._value;
//   }
//   set value(value) {
//     this._value = value;
//   }
// }
// class LinkedList{
//   constructor(...items){
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//     for (const item of items) {
//       this.push(item)
//     }
//   }
//   push(item){
//     const newItem = new ListItem(value);
//     if(this.length === 0){
//       this.head = newItem;
//       this.tail = newItem;
//     }else{
//       this.tail.next = newItem;
//       newItem.prev = this.tail;
//       this.tail = newItem;
//     }
//     return ++this.length;
//   }
// }

/*--------------------------------------------------------------------------------------------------------*/

// class Stack {
//   constructor(maxSize = 5, ...args) {
//     this._maxSize = maxSize;
//     this._size = 0;
//     for (const arg of args) {
//       this.push(argument);
//     }
//   }
//   get size() {
//     return this._size;
//   }
//   get empty() {
//     return this._size === 0;
//   }
//   push(argument) {
//     if (this._size >= this._maxSize) {
//       throw new RangeError("stack overflow");
//     }
//     this["_" + this._size] = argument;
//     return ++this._size;
//   }
//   pick() {
//     return this["_" + this._size - 1];
//   }
//   pop() {
//     const last = this["_" + this._size - 1];
//     delete this["_" + this._size - 1];
//     --this._size;
//     return last;
//   }
// }

// const stack1 = new Stack();
// console.log(stack1);
/*--------------------------------------------------------------------------------------------------------*/

// const test = function (str) {
//   let chars = str.split(""),
//     stack = [],
//     open = ["{", "(", "["],
//     close = ["}", ")", "]"],
//     closeIndex,
//     openIndex;

//   // Проходимся по строке, проверяя каждый ее символ .
//   for (let i = 0, len = chars.length; i < len; i++) {
//     openIndex = open.indexOf(chars[i]);
//     if (openIndex !== -1) {
//       // Нашли открывающую скобку. Помещаем ее в стек
//       stack.push(openIndex);
//       continue;
//     }

//     closeIndex = close.indexOf(chars[i]);
//     if (closeIndex !== -1) {
//       // Нашли закрывающую скобку. Проверяем ее соответствие открывающей
//       openIndex = stack.pop();
//       if (closeIndex !== openIndex) {
//         return false;
//       }
//     }
//   }

//   // Проверяем дисбаланс открытых/закрытых скобок
//   if (stack.length !== 0) {
//     return false;
//   }

//   return true;
// };
/*--------------------------------------------------------------------------------------------------------*/

// class Queue {
//   constructor(...args) {
//     this._head = 0;
//     this._tail = 0;
//   }
//   get size() {
//     return this._tail - this._head;
//   }
//   push(value) {
//     this[this._tail] = value;
//     this._tail++;
//     return this.size;
//   }
//   shift() {
//     const valueHead = this[this._head];
//     delete this[this._head];
//     this._head++;

//     return valueHead;
//   }
// }
/*--------------------------------------------------------------------------------------------------------*/


