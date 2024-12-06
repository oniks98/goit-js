// for (let i = 1; i <= 10; i++) {
//   if (!(i % 2)) {
//     console.log(i);
//   }
// }
// let i = 0;
// while (i < 3) {
//   console.log(`число ${i}!`);
//   i++;
// }

// while (true) {
//   let i = prompt('Введіть число більше 100', '');

//   if (i === '' || i > 100) break;
// }

// function getLength(array) {
//   console.log(array.join('').length);
//   console.log(array.join(''));
//   return array.join('').length;
// }
// getLength(['Mango', 'hurries', 'to', 'the', 'train']);

// const name = 'Mango';
// const letters = name.split('');
// console.log(letters); // ["M", "a", "n", "g", "o"]

// let str = 'test';

// console.log(str.split('')); // t,e,s,t

// function calculateEngravingPrice(message, pricePerWord) {
//   console.log(message.split(' ').length * pricePerWord);
//   return message.split(' ').length * pricePerWord;
// }
// calculateEngravingPrice('JavaScript is in my blood', 10);
// calculateEngravingPrice('Web-development is creative work', 20);
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);
// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// function getSlice(array, value) {
//   if (!(array.indexOf(value) + 1)) {
//     const emptyArray = [];
//     console.log(emptyArray);
//     return emptyArray;
//   } else {
//     const newArray = array.slice(0, array.indexOf(value) + 1);
//     console.log(newArray);
//     return newArray;
//   }
// }

// function getSlice(array, value) {
//   if (array.indexOf(value) >= 0) {
//     const newArray = array.slice(0, array.indexOf(value) + 1);
//     console.log(newArray);
//     return newArray;
//   } else {
//     const emptyArray = [];
//     console.log(emptyArray);
//     return emptyArray;
//   }
// }

// getSlice(['Mango', 'Poly', 'Ajax'], 'Poly');
// getSlice(['Mango', 'Poly', 'Ajax'], 'Ajax');
// getSlice(['Mango', 'Poly', 'Ajax'], 'Mango');
// getSlice(['Mango', 'Poly', 'Ajax'], 'Jacob');
// getSlice(['Mango', 'Poly', 'Ajax'], 'Casey');

// 1 варіант
// function createReversedArray() {
//   console.log(Array.from(arguments).toReversed());
//   return Array.from(arguments).toReversed();
// }
// 2 варіант
// function createReversedArray() {
//   const revers = [];
//   for (i = arguments.length - 1; i >= 0; i--) {
//     revers.push(arguments[i]);
//   }
//   console.log(revers);
//   return revers;
// }
// 3 варіант
// function createReversedArray() {
//   const revers = [];
//   for (const arg of arguments) {
//     revers.unshift(arg);
//   }
//   console.log(revers);
//   return revers;
// }

// createReversedArray(412, 371, 94, 63, 176);
// createReversedArray();

// function foo() {
//   console.log('foo');
// }
// foo();

// 'use strict';
// function slugify(title) {
//   const slug = title.toLowerCase().split(' ');
//   return slug.join('-');
// }

// console.log(slugify('Arrays for beginners')); // "arrays-for-beginners"
// console.log(slugify('English for developer')); // "english-for-developer"
// console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
// console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"

// 'use strict';
// function makeArray(firstArray, secondArray, maxLength) {
//   const unitedArray = firstArray.concat(secondArray);
//   return unitedArray.slice(0, maxLength);
// }

// console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // []

// 'use strict';
// function filterArray(numbers, value) {
//   const bigNumbersArray = [];
//   for (const arg of numbers) {
//     if (arg <= value) continue;
//     bigNumbersArray.push(arg);
//   }
//   return bigNumbersArray;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// // let n = 30;
// for (i = 2; i <= 30; i++) {
//   for (n = i - 1; 2 <= n; n--) {
//     if (i % n) continue;
//     console.log(i);
//   }
//   // console.log(i);
// const string = "hello";
// console.log("string: ", string);

// let newStr = "";

// for (let i = string.length - 1; i >= 0; i--) {
//   newStr += string[i];

//   console.log("newStr: ", newStr);
//   // newStr: olleh;
// }

//  or ->
// for(let i = 0; i > string.length; i++)
// { newStr = string[i] + newStr; }

// sumArr = [];
// for (const element of sumArr) {
//   let number = promt('Введіть число', '');
//   if (typeof +number === 'number') sumArr.push(number);
// }

// 'use strict';
// function sumArray(numbers)

// let sum = 0;
// let numbersArr = [];
// do {
//   let number = prompt('Введіть число', '');
// } while (!isNaN(number));
// {
//   numbersArr.push(+number);
//   let number = prompt('Введіть число', '');
// }
// for (const arg of numbersArr) {
//   sum += arg; /*унарний плюс приводить до числа*/
// }
// alert(sum);

// console.log(sumArray(['1', '2', '3', 4, 5])); // [4, 5]
// console.log(sumArray([1, 2, 3, 4, 5])); // [5]

// let number = prompt('Введіть число', '');
// console.log(isNaN(number));

// const fruits = ['Яблуко', 'Груша', 'Апельсин'];
// const shoppingCart = fruits;
// shoppingCart.push('Банан');
// console.log(fruits.length);

// function camelize(str) {
//   const words = [];
//   const noHyphensArray = str.split('-');
//   console.log(noHyphensArray);
//   for (const element of noHyphensArray) {
//     if (element !== '') {
//       words.push(element[0].toUpperCase() + element.slice(1));
//     } else {
//       words.push(element);
//       console.log(words);
//     }
//   }
//   return words.join('');
// }

// console.log(camelize('webkit----transition'));

// const values = [26, 17, 94, 1, -23, 37];
// let min;

// for (let i = 0; i < values.length; i++) {
//   if (i === 0) {
//     min = values[i];
//   } else if (values[i] < min) {
//     min = values[i];
//   }
// }

// console.log(min);

// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => (a = b));

// console.log(arr);

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
// };

// book.pageCount = 836;
// book.originalLanguage = 'en';
// book.translations = ['ua', 'ru'];
// book.price = {
//   hardcover: 39,
//   softcover: 29,
// };

// console.log(book.pageCount); // 836
// console.log(book.originalLanguage); // "en"
// console.log(book.translations); // ["ua", "ru"]
// console.log(book.price.hardcover); // ["ua", "ru"]
// console.log(book.price.softcover); // ["ua", "ru"]

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country : "Jamaica";
//   city : "Kingston";
// };

// const book = {
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(Object.keys(book));
// for (const key of keys) {
//   console.log(key); // Ключ
//   console.log(book[key]); // Значення властивості
// }

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // const keys = apartment;

// const keys = Object.keys(apartment);
// console.log(keys);
// for (const key of keys) {
//   values.push(apartment[key]);
// }
// console.log(values);

// function countProps(object) {
//   let propCount = 0;

//   propCount = Object.keys(object).length;

//   console.log(propCount);
//   return propCount;
// }
// countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 });

// function countTotalSalary(salaries) {
//   let totalSalary = 0;

//   arr = Object.values(salaries);
//   for (let name of arr) {
//     totalSalary += name;
//   }
//   console.log(totalSalary);
//   return totalSalary;
// }
// countTotalSalary({});

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// for (let name of colors) {
//   hexColors.push(name.hex);
//   rgbColors.push(name.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// function getProductPrice(productName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];
//   for (let element of products) {
//     if (element.name === productName) return element.price;
//   }
//   return null;
// }

// console.log(getProductPrice('Droid'));

// function getAllPropValues(propName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];

//   const names = [];

//   for (const element of products) {
//     if (Object.keys(element).includes(propName)) {
//       names.push(element[propName]);
//     }
//   }
//   return names;
// }
// console.log(getAllPropValues('name'));

// function calculateTotalPrice(productName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];

//   for (const element of products) {
//     if (element.name === productName) {
//       return element.price * element.quantity;
//     }
//   }
//   return `Product ${productName} not found!`;
// }
// console.log(calculateTotalPrice('Rdar'));

// const potions = [];
// const atTheOldToad = {
//   potions,
//   getPotions() {
//     return `List of all available potions`;
//   },
//   addPotion(potionName) {
//     return `Adding ${potionName}`;
//   },
// };

// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion('Invisibility'));
// console.log(atTheOldToad.addPotion('Power potion'));

// const bookShelf = {
//   books: ['The Last Kingdom', 'The Mist'],
//   getBooks() {
//     console.log(this);
//   },
// };

// bookShelf.getBooks(); // {books: ["The Last Kingdom", "The Mist"], getBooks: f}

// const atTheOldToad = {
//   potions: ['Speed potion', 'Stone skin'],
//   getPotions() {
//     return this.potions;
//   },
// };

// console.log(atTheOldToad.getPotions());

// const atTheOldToad = {
//   potions: ['Speed potion', 'Stone skin'],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     this.potions.push(potionName);
//     return this.potions;
//   },
// };

// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion('Invisibility'));
// console.log(atTheOldToad.addPotion('Power potion'));

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   updatePotionName(oldName, newName) {
//     for (const element of this.potions) {
//       if (oldName === element.name) {
//         element.name = newName;
//       }
//     }
//     return this.potions;
//   },
// };

// console.log(atTheOldToad.updatePotionName('Stone skin', 'Invisibility'));
// console.log(atTheOldToad.updatePotionName('Speed potion', 'Polymorth'));

// function add(...args) {
//   //   return args.reduce((sum, current) => sum + current, 0);
//   let sum = 0;
//   for (const element of args) {
//     if (isNaN(element)) continue;
//     sum += element;
//   }
//   return sum;
// }
// console.log(add(15, 27));
// console.log(add(12, 4, 11, 48));
// console.log(add(32, 6, 13, 19, 8));

// function addOverNum(value, ...args) {
//   let sum = 0;
//   for (const element of args) {
//     if (element <= value || isNaN(element)) continue;
//     sum += element;
//   }
//   return sum;
// }

// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));

// function getExtremeScores(scores) {
//   const number = {
//     best: Math.max(...scores),
//     worst: Math.min(...scores),
//   };
//   return number;
// }

// console.log(getExtremeScores([19, 7, 4, 17, 81, 24]));

// function isEnoughCapacity(products, containerSize) {
//   const values = Object.values(products);
//   return values.reduce((sum, current) => sum + current, 0) <= containerSize;
// }

// console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true

// console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false

// console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true

// console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false

// function calcAverageCalories(days) {
//   if (days.length > 0) {
//     let totalCalories = 0;

//     for (const element of days) {
//       totalCalories += element.calories;
//     }

//     const averageCalories = totalCalories / days.length;
//     return averageCalories;
//   } else {
//     return 0;
//   }
// }

// console.log(
//   calcAverageCalories([
//     { day: 'monday', calories: 3010 },
//     { day: 'tuesday', calories: 3200 },
//     { day: 'wednesday', calories: 3120 },
//     { day: 'thursday', calories: 2900 },
//     { day: 'friday', calories: 3450 },
//     { day: 'saturday', calories: 3280 },
//     { day: 'sunday', calories: 3300 },
//   ])
// ); // 3180

// console.log(
//   calcAverageCalories([
//     { day: 'monday', calories: 2040 },
//     { day: 'tuesday', calories: 2270 },
//     { day: 'wednesday', calories: 2420 },
//     { day: 'thursday', calories: 1900 },
//     { day: 'friday', calories: 2370 },
//     { day: 'saturday', calories: 2280 },
//     { day: 'sunday', calories: 2610 },
//   ])
// ); // 2270

// console.log(calcAverageCalories([])); // 0

// const profile = {
//   username: 'Jacob',
//   playTime: 300,

//   changeUsername(newName) {
//     this.username = newName;
//   },

//   updatePlayTime(hours) {
//     this.playTime += hours;
//   },

//   getInfo() {
//     return `${this.username} has ${this.playTime} active hours!`;
//   },
// };

// console.log(profile.getInfo()); // "Jacob has 300 active hours!"

// profile.changeUsername('Marco');
// console.log(profile.getInfo()); // "Marco has 300 active hours!"

// profile.updatePlayTime(20);
// console.log(profile.getInfo()); // "Marco has 320 active hours!"

// profile.updatePlayTime(40);
// console.log(profile.getInfo()); // "Marco has 320 active hours!"

// const user = {};
// user['name'] = 'Іван';
// user['surname'] = 'Сміт';
// console.log(user);
// // console.log(user.name);
// user.name = 'Петро';
// console.log(user.name);
// delete user['name'];
// console.log(user);

// function isEmpty(obj) {
//   let schedule = {};
//   console.log(schedule[obj] === undefined);
//   return schedule[obj] === undefined;
// }

// console.log(isEmpty('schedule'));

// let salaries = {
//   //   John: 100,
//   //   Ann: 160,
//   //   Pete: 130,
// };
// let sum = 0;
// for (const key in salaries) {
//   sum += salaries[key];
// }

// console.log(sum);

// function multiplyNumeric(obj) {
//   let menu = {
//     width: 200,
//     height: 300,
//     title: 'Моє меню',
//   };

//   console.log(typeof menu.title);
//   // console.log(Number.isFinite(menu.width));

//   for (const key in menu) {
//     // if (Number.isFinite(menu[key]))
//     if (typeof (menu[key] == 'number'));
//     menu[key] *= obj;
//   }
//   console.log(menu);
//   return menu;
// }

// console.log(multiplyNumeric(2));

// до виклику функції

// let menu = {
//   width: 200,
//   height: 300,
//   title: 'Моє меню',
// };
// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (Number.isFinite(menu[key])) {
//       obj[key] *= 2;
//     }
//   }
//   return menu;
// }
// console.log(multiplyNumeric(menu));

// до виклику функції
// let menu = {
//   width: 200,
//   height: 300,
//   title: 'Моє меню',

//   multiplyNumeric(number) {
//     for (let key in this) {
//       if (Number.isFinite(this[key])) {
//         this[key] *= number;
//       }
//     }
//     // delete menu.multiplyNumeric();
//     return this;
//   },
// };

// let clone = {}; // новий порожній об'єкт

// // давайте скопіюємо в нього всі властивості з user
// for (let key in menu) {
//   if (typeof [key] != 'function') console.log(typeof key);
//   clone[key] = menu[key];
// }
// delete clone.multiplyNumeric;
// console.log(clone);

// console.log(menu.multiplyNumeric(2));

// console.log(menu);

// const atTheOldToad = {
//   potions: ['Speed potion', 'Stone skin'],
//   addPotion(potionName) {
//     this.potions.push(potionName);
//     return this.potions;
//   },
// };

// console.log(atTheOldToad.addPotion('Invisibility'));

// let ivan = {
//   p: 123,
//   m1: function () {},
//   m2: () => {},
// };

// for (let k in ivan) {
//   if (typeof ivan[k] != 'function') console.log(k, typeof ivan[k]);
// }

// const book = {
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   console.log(key); // Ключ
//   console.log(book[key]); // Значення властивості

// let user = {
//   name: 'Іван',
//   age: 30,

//   sayHi() {
//     alert(this.name); // призводить до помилки
//   },
// };

// let admin = user;
// user = null; // перезапишемо значення змінної для наочності

// admin.sayHi(); // TypeError: Cannot read property 'name' of null

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Henry Sibola',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// apartment.area;
// apartment.rooms = 3;
// // const location = {};
// apartment.location = {
//   country: 'Jamaica',
//   city: 'Kingston',
// };
// apartment.location.country = 'Jam';
// console.log(apartment);

// function countProps(object) {
//   // let propCount = 0;

//   // for (const key in object) {
//   //   if (object.hasOwnProperty(key)) {
//   //     propCount += 1;
//   //   }
//   // }
//   console.log(countProps);
//   return Object.keys(countProps);
// }

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

// function getAllPropValues(propName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];

//   const values = [];

//   for (const element of products) {
//     if (element?.[propName]) {
//       values.push(element[propName]);
//     }
//   }
//   return values;
// }

// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('quantity'));
// console.log(getAllPropValues('price'));
// console.log(getAllPropValues('category'));

// console.log(`"Jacob".slice(0,1).toUpperCase()`);
// // const fullName = 'acob';
// console.log('acob'.slice(0, 1).toUpperCase() + 'acob'.slice(1)); // 'Jaco'
// function capitalize(word) {
//   return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
// }

// // Sample usage - do not modify
// // console.log(capitalize('sam')); // "Sam"
// // console.log(capitalize('ALEX')); // "Alex"
// // console.log(capitalize('chARLie')); // "Charlie"

// function getFirstChar(name) {
//   // first character of: name
//   return name.slice(0).toLowerCase();
// }

// console.log(getFirstChar('sam'));

// let user = {
//   address: {
//     street: 'com',
//     hous: '9',
//   },
// };

// console.log(user.address ? user.address.street : undefined);

// const users = ['Sam', 'Alex', 'Charley', 'Blane', 'Crane'];
// console.log(users.at(-5)); //"Sam"
// console.log(users.at(1)); //"Alex"
// console.log(users.at(-2)); //"Blane"
// console.log(users.at(4)); //"Crane"

// let sum = 0;
// function sumGrades(grades) {
//   grades.forEach(function (grade) {
//     console.log(grade);
//     sum += grade;
//   });

//   return sum;
// }

// // Sample usage - do not modify
// console.log(sumGrades([15, 5, 10])); // 30
// console.log(sumGrades([12, 10, 13, 19])); // 54

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza('Royal Grand', function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}`);
// });

// makePizza('Ultracheese', function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`);
// });

// function filterArray(numbers, value) {
//   const numbersBig = [];
//   numbers.forEach(function (number) {
//     if (number > value) {
//       numbersBig.push(number);
//     }
//   });
//   return numbersBig;
// }

// function changeEven(numbers, value) {
//   const numbersNew = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     console.log(!0);
//     if (!(numbers[i] % 2)) {
//       numbersNew.push(numbers[i] + value);
//     } else {
//       numbersNew.push(numbers[i]);
//     }
//   }
//   return numbersNew;
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10));
//////////////////////////////////////////////////////////////////////////
// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39,
//   },
// ];

// const color = 'green';

// const getUsersWithEyeColor = (users, color) => {
//   const usersEyeColor = users.filter(user => user.eyeColor === color);
//   console.log(usersEyeColor);
//   return usersEyeColor;
// };

// console.log(getUsersWithEyeColor(users, color));

// const minAge = 20;
// const maxAge = 30;

// const getUsersWithAge = (minAge, maxAge) => {
//   const usersAge = minAge + maxAge;
//   console.log(usersAge);
//   return usersAge;
// };

// console.log(getUsersWithAge(minAge, maxAge));

//////////////////////////////////////////////////////////////////////////////////////
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce(sum, current) => sum + current, 0);

// const averagePlayTime = totalPlayTime / playtimes.length;

// const players = [
//   { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//   { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//   { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce(
//   (acc, players) => acc + players.playtime / players.gamesPlayed,
//   0
// );
// const myFunction = () => console.log('Hello');

// const scores = [1, 2, 10, 21];
// scores.sort(); // [1, 10, 2, 21]
// console.log(scores);

// const students = [
//   { name: 'Mango', score: 83, courses: ['mathematics', 'physics'] },
//   { name: 'Poly', score: 59, courses: ['science', 'mathematics'] },
//   { name: 'Ajax', score: 37, courses: ['physics', 'biology'] },
//   { name: 'Kiwi', score: 94, courses: ['literature', 'science'] },
// ];

// const uniqueSortedCourses = students.flatMap(student => student.courses);
// // .filter((course, index, array) => array.indexOf(course) === index);
// // .toSorted((a, b) => a.localeCompare(b));

// console.log(uniqueSortedCourses); // ["biology", "science", "literature", "mathematics", "physics"]
/////////////////////////////////////////////////////////////////////////////////
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   {
//     title: 'The Dreams in the Witch House',
//     author: 'Howard Lovecraft',
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books
//   .filter(book => book.rating >= MIN_BOOK_RATING)
//   .map(book => book.author)
//   .toSorted(
//     (firstAuthor, secondAuthor) =>
//       firstAuthor.charCodeAt(firstAuthor.indexOf(' ') + 1) -
//       secondAuthor.charCodeAt(secondAuthor.indexOf(' ') + 1)
//   );
// console.log(names);
/////////////////////////////////////////////////////////////////////////

// function sumGrades(grades) {
//   let sum = 0;
//   for (let i = 0; 0 < grades.length; i++) sum += grades[i];
//   return sum;
// }

// // Sample usage - do not modify
// console.log(sumGrades([15, 5, 10])); // 30
// console.log(sumGrades([12, 10, 13, 19])); // 54
//////////////////////////////////////////////////////////////////////////
// function sumPositiveNumbers(numbers) {
//   let sum = 0;
//   numbers.forEach(item => {
//     if (item > 0) {
//       sum += item;
//     }
//   });
//   return sum;
// }

// Sample usage - do not modify
// console.log(sumPositiveNumbers([15, -5, 10])); // 25
// console.log(sumPositiveNumbers([-3, 4, -2, 1])); // 5
/////////////////////////////////////////////////////////

// function sumGrades(grades) {
//   return grades.reduce((sum, item) => sum + item);
// }

// // Sample usage - do not modify
// console.log(sumGrades([15, 5, 10])); // 30
// console.log(sumGrades([12, 10, 13, 19])); // 54
//////////////////////////////////////////////////////////

// function sumGrades(grades) {
//   return grades.reduce((sum, item) => sum + item, 0);
// }

// // Sample usage - do not modify
// console.log(sumGrades([15, 5, 10])); // 30
// console.log(sumGrades([12, 10, 13, 19])); // 54
// // ////////////////////////////////////////////////////

// function sumPositiveNumbers(numbers) {
//   return numbers.reduce((sum, item) => {
//     if (0 < item) sum += item;
//     return sum;
//   }, 0);
// }

// // Sample usage - do not modify
// console.log(sumPositiveNumbers([15, -5, 10])); // 25
// console.log(sumPositiveNumbers([-3, 4, -2, 1])); // 5
// //////////////////////////////////////////////////////////
// function sumOddNumbers(numbers) {
//   return numbers.reduce((sum, item) => {
//     if (item % 2 !== 0) sum += item;
//     return sum;
//   }, 0);
// }

// // Sample usage - do not modify
// console.log(sumOddNumbers([15, 5, 10])); // 20
// console.log(sumOddNumbers([2, 3, 4, 5, 6])); // 8
// console.log(sumOddNumbers([-2, -3, 4, 5, 6])); // 2
///////////////////////////////////////////////////////////
// function sumOddNumbers(numbers) {
//   let sum = 0;
//   const arr = numbers.filter(element => element % 2 !== 0);
//   for (const el of arr) sum += el;
//   return sum;
// }

// // Sample usage - do not modify
// console.log(sumOddNumbers([15, 5, 10])); // 20
// console.log(sumOddNumbers([2, 3, 4, 5, 6])); // 8
// console.log(sumOddNumbers([-2, -3, 4, 5, 6])); // 2
//////////////////////////////////////////////////////////////
// const rows = [
//   ['Carbs', '17g'],
//   ['Protein', '19g'],
//   ['Fat', '5g'],
// ];

// function renderTableRows(rows) {
//    return rows.reduce((html, element) => {
//     html += `<tr>
//       <td>${element[0]}</td>
//       <td>${element[1]}</td>
//   </tr>`;
//     return html;
//   }, '');
// }

// console.log(renderTableRows(rows));
////////////////////////////////////////////////////////////////
// const rows = [
//   ['Carbs', '17g'],
//   ['Protein', '19g'],
//   ['Fat', '5g'],
// ];

// function renderTableRows(rows) {
//   // console.log(rows);
//   let html = '';
//   rows.forEach(element => {
//     html += `<tr>
//       <td>${element[0]}</td>
//       <td>${element[1]}</td>
//   </tr>`;
//   });
//   return html;
// }
// console.log(renderTableRows(rows));
//////////////////////////////////////////////////////////////////////
// function getPositiveTemperatures(temperatures) {
//   return temperatures.filter(temperatur => temperatur > 0);
// }

// // Sample usage - do not modify
// console.log(getPositiveTemperatures([-5, 12, 3])); // [12, 3]
// console.log(getPositiveTemperatures([1, -3, -2, 4, 10])); // [1, 4, 10]
/////////////////////////////////////////////////////////////////////
// function getPositiveTemperatures(temperatures) {
//   return temperatures
//     .reduce((tempAboveZero, temperatur) => {
//       if (temperatur > 0) tempAboveZero.push(temperatur);
//       return tempAboveZero;
//     }, [])
//     .toSorted((a, b) => b - a);
// }

// // Sample usage - do not modify
// console.log(getPositiveTemperatures([-5, 12, 3])); // [12, 3]
// console.log(getPositiveTemperatures([1, -3, -2, 4, 10])); // [1, 4, 10]
////////////////////////////////////////////////////////////////////
// function getPositiveTemperatures(temperatures) {
//   const tempAboveZero = [];
//   temperatures.forEach(temperatur => {
//     if (temperatur > 0) tempAboveZero.push(temperatur);
//   });
//   return tempAboveZero;
// }

// // Sample usage - do not modify
// console.log(getPositiveTemperatures([-5, 12, 3])); // [12, 3]
// console.log(getPositiveTemperatures([1, -3, -2, 4, 10])); // [1, 4, 10]
////////////////////////////////////////////////////////////////////////
// function getPositiveTemperatures(temperatures) {
//   const tempAboveZero = [];
//   for (const temperatur of temperatures) {
//     if (temperatur > 0) tempAboveZero.push(temperatur);
//   }
//   return tempAboveZero;
// }

// // Sample usage - do not modify
// console.log(getPositiveTemperatures([-5, 12, 3])); // [12, 3]
// console.log(getPositiveTemperatures([1, -3, -2, 4, 10])); // [1, 4, 10]
//////////////////////////////////////////////////////////////////////////
// function getYear(years, searchYear) {
//   return years.find(year => year === searchYear);
// }

// // Sample usage - do not modify
// console.log(getYear([2019, 2020, 2021], 2020)); // 2020
// console.log(getYear([2019, 2020, 2021], 1990)); // undefined
/////////////////////////////////////////////////////////////////////////
// function getYear(years, searchYear) {
//   return years.reduce((correctYear, year) => {
//     if (year === searchYear) correctYear = searchYear;
//     return correctYear;
//   }, 'undefined');
// }
// // Sample usage - do not modify
// console.log(getYear([2019, 2020, 2021], 2020)); // 2020
// console.log(getYear([2019, 2020, 2021], 1990)); // undefined
////////////////////////////////////////////////////////////////////////
// function getOddYears(years) {
//   return years.reduce(
//     (arrYear, year) => {
//       if (year % 2) {
//         arrYear[0].push(year);
//       } else {
//         arrYear[1].push(year);
//       }
//       return arrYear;
//     },
//     [[], []]
//   );
// }

// // Sample usage - do not modify
// console.log(getOddYears([2019, 2020, 2021])); // [2019, 2021]
// console.log(getOddYears([2000, 2015, 2018, 2020])); // [2015]
/////////////////////////////////////////////////////////////////////////
// function isAppUsed(apps, app) {
//   return apps.reduce((boll, element) => {
//     if (element === app) boll = true;
//     return boll;
//   }, false);
// }

// // Sample usage - do not modify
// console.log(isAppUsed(['Twitter', 'Calculator'], 'Calculator')); // true
// console.log(isAppUsed(['Clock', 'Calculator'], 'Safari')); // false
// //////////////////////////////////////////////////////////////////////////
// function getStringSizes(strings) {
//   return strings.reduce((arrString, string) => {
//     arrString.push(string.length);
//     return arrString;
//   }, []);
// }

// // Sample usage - do not modify
// console.log(getStringSizes(['a', 'abc'])); // [1, 3]
// console.log(getStringSizes(['Sam', 'Alex', 'Charlie'])); // [3, 4, 7]
// console.log(getStringSizes(['Hello', 'Blue'])); // [5, 4]
///////////////////////////////////////////////////////////////////
// function getStringSizes(strings) {
// return strings.map((string)=>string.length);
// }

// // Sample usage - do not modify
// console.log(getStringSizes(["a", "abc"])); // [1, 3]
// console.log(getStringSizes(["Sam", "Alex", "Charlie"])); // [3, 4, 7]
// console.log(getStringSizes(["Hello", "Blue"])); // [5, 4]
////////////////////////////////////////////////////////////////////
// function getNumberOfGrades(grades) {
//   // TODO: return the number of grades
//   return grades.length;
// }
// function getNumberOfGrades(grades) {
//   // TODO: return the number of grades
//   return grades.reduce(getNumber => getNumber + 1, 0);
// }
// console.log(getNumberOfGrades([12, 19, 10, 4, 15, 9]));
//////////////////////////////////////////////////////////////////////
// function getSumGrades(grades) {
//   // TODO: return the sum of all the grades
//   return grades.reduce((sum, grad) => sum + grad, 0);
// }
// console.log(getSumGrades([12, 19, 10, 4, 15, 9]));
//////////////////////////////////////////////////////////////////
// function getPassingGrades(grades) {
//   // TODO: return all passing grades (10 and above)
//   return grades.filter(grad => grad >= 10);
// }
// console.log(getPassingGrades([12, 19, 10, 4, 15, 9]));
//////////////////////////////////////////////////////////////////
// function getPassingGrades(grades) {
//   // TODO: return all passing grades (10 and above)
//   return grades.reduce((arrGrad, grad) => {
//     if (grad >= 10) arrGrad.push(grad);
//     return arrGrad;
//   }, []);
// }
// console.log(getPassingGrades([12, 19, 10, 4, 15, 9]));
/////////////////////////////////////////////////////////////////
// function getRaisedGrades(grades) {
//   // TODO: return all the grades raised by 1 (no grade should exceed 20)
//   return grades.reduce((arrGrad, grad) => {
//     if (grad < 20) {
//       arrGrad.push(grad + 1);
//     } else {
//       arrGrad.push(grad);
//     }
//     return arrGrad;
//   }, []);
// }
// console.log(getRaisedGrades([10, 4, 8, 20]));
////////////////////////////////////////////////////////////////////////

// const getRaisedGrades = grades =>
//   grades.reduce((arrGrad, grad) => {
//     if (grad < 20) {
//       arrGrad.push(grad + 1);
//     } else {
//       arrGrad.push(grad);
//     }
//     return arrGrad;
//   }, []);

// console.log(getRaisedGrades([10, 4, 8, 20]));
////////////////////////////////////////////////////////////////////////
// function getVotersCount(ages) {
//   return ages.filter(ag => ag >= 18).length;
// }

// console.log(getVotersCount([10, 4, 8, 20]));
//////////////////////////////////////////////////////////////////////

// 10. Створіть телефонну книгу - об'єкт phonebook,
// у якого є властивість contacts (список контактів)
// та методи управління книгою:
// add(data) - приймає об'єкт data, де зберігається
// name, email, category, id, createdAt
// (name i email - обов'язкові параметри, які треба передавати
// при додаванні нового контакта,
// category - може передаватись чи ні, якщо ні - має
// приймати значення "default",
// id та createdAt генеруються відповідними методами:
// generateId() і getDate());
// *не забудь додати перевірку, якщо контакт з таким ім'ям чи імейлом вже є - ми його не додаємо
// list() - виводить список контактів у вигляді таблиці;
// filtered(category) - фільтрує контактів по обраній категорії (друзі, робота і т.д.)
// delete(name) - видаляє контакт з заданим ім'ям;
// updateName(oldName, newName) - зиінює ім'я контакта;

// const phonebook = {
//   contacts: [],

//   add(data) {
//     const newContact = {
//       name: data.name,
//       email: data.email,
//       category: data.category ?? 'default',
//       createdAt: this.getDate(),
//       id: this.generateId(),
//     };

//     for (const contact of this.contacts) {
//       if (
//         contact.name === newContact.name ||
//         contact.email === newContact.email
//       )
//         return;
//     }

//     this.contacts.push(newContact);
//   },

//   list() {
//     console.table(this.contacts);
//   },

//   filtered(category) {
//     // 1 варіант
//     // const newFilteredContacts = [];

//     // for (const contact of this.contacts) {
//     //   if (contact.category === category) {
//     //     newFilteredContacts.push(contact);
//     //   }
//     // }
//     // return newFilteredContacts;

//     // 2 варіант
//     return this.contacts.filter(contact => contact.category === category);
//   },

//   delete(name) {
//     // 1 варіант - змінює contacts
//     for (const contact of this.contacts) {
//       if (contact.name === name)
//         this.contacts.splice(this.contacts.indexOf(contact), 1);
//     }
//     return this.contacts;

//     // 2 варіант - НЕ змінює contacts
//     // return this.contacts.filter(contact => contact.name !== name);
//   },

//   updateName(oldName, newName) {
//     this.contacts.find(contact => contact.name === oldName).name = newName;
//     return this.contacts;
//   },

//   generateId() {
//     return '#' + Math.random().toString(36).slice(2, 9);
//   },

//   getDate() {
//     // 1 варіант - Date.now() => в звичайну дату
//     return new Date(Date.now()).toLocaleDateString();

//     // 2 варіант - кількість млсек з 1970року
//     // return Date.now();
//   },
// };

// phonebook.add({ name: 'Dima', email: 'data@email.com', category: 'Job' });
// phonebook.add({ name: 'Fedor', email: 'gdata@email.com' });
// phonebook.add({ name: 'Ket', email: 'a@email.com', category: 'Friend' });
// phonebook.add({ name: 'Dima', email: 'ta@email.com', category: 'Job' });
// phonebook.add({ name: 'Olga', email: 'vadata@email.com', category: 'Family' });
// phonebook.add({ name: 'Misha', email: 'data@email.com', category: 'Friend' });
// phonebook.add({ name: 'Karina', email: 'sta@email.com', category: 'Job' });

// phonebook.list();
// console.table(phonebook.filtered('Job'));
// console.table(phonebook.filtered('SmJob'));
// console.table(phonebook.delete('Olga'));
// console.table(phonebook.updateName('Karina', 'Vika'));
//////////////////////////////////////////////////////////////////////////////
// function foo(a) {
//   const filterArr = [];
//   for (const el of filterArr) {
//     if (el === 6) continue;
//     filterArr.push(el);
//   }

//   return filterArr;
// }

// console.log(foo(16));
// console.log(foo(66));
// console.log(foo(68));
// console.log(foo(6));
// console.log(foo(61));
// const customer = {
//.///////////////////////////////////////////////////////////////////////
// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor(params) {
//     this.#email = params.email;
//     User.#takenEmails.push(params.email);
//   }
// }

// const mango = new User({ email: 'mango@mail.com' });
// const poly = new User({ email: 'poly@mail.com' });
// const man = new User({ email: 'mango@mail.com' });

// console.log(User.isEmailTaken('poly@mail.com')); // false
// console.log(User.isEmailTaken('mango@mail.com')); // true
///////////////////////////////////////////////////////////////////
// class Car {
//   static #maxPrice = 50000;

//   static checkPrice(price) {
//     if (price>Car.#maxPrice) {
//     return "Error! Price exceeds the maximum"
//     } else {
//       return "Success! Price is within acceptable limits"
//     }
//   }

//   constructor(params) {
//     this.price = params.price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

//////////////////////////////////////////////////////////////////////////////////
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
///////////////////////////////////////////////////////////////////////////////////
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   blacklistedEmails = [];
//   static role = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };

//   constructor(params) {
//     super(params.email);
//     this.access = params.access;
//   }

//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }

//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email);
//   }
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"

// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted('mango@mail.com')); // false
// console.log(mango.isBlacklisted('poly@mail.com')); // true
///////////////////////////////////////////////////////////////////////////////
// const customer = {
//   username: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['Burger', 'Pizza', 'Salad'],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, 'Steak');
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
// //////////////////////////////////////////////////////////////////////////////////
// class Storage {
//   #items;

//   constructor(items) {
//     this.#items = items;
//   }

//   getItems() {
//     return this.#items;
//   }

//   addItem(newItem) {
//     this.#items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     // 1 варіант
//     for (const item of this.#items) {
//       if (item == itemToRemove)
//         this.#items.splice(this.#items.indexOf(item), 1);
//     }
//     // 2 варіант
//     // this.#items = this.#items.filter(item => item !== itemToRemove);
//   }
// }
// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// storage.removeItem('Scaner');
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
// //////////////////////////////////////////////////////////////////////////////////////
// class StringBuilder {
//   #value;

//   constructor(initialValue) {
//     this.#value = initialValue;
//   }

//   getValue() {
//     return this.#value;
//   }
// 1 варіант
// padEnd(str) {
//   this.#value = this.#value.padEnd(3, str);
// }

// padStart(str) {
//   this.#value = this.#value.padStart(2, str);
// }

// padBoth(str) {
//   this.#value = this.#value.padStart(4, str);
//   this.#value = this.#value.padEnd(5, str);
// }

// 2 варіант
//   padEnd(str) {
//     this.#value = this.#value + str;
//   }

//   padStart(str) {
//     this.#value = str + this.#value;
//   }

//   padBoth(str) {
//     this.#value = str + this.#value + str;
//   }
// }

// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // "."
// builder.padStart('^');
// console.log(builder.getValue()); // "^."
// builder.padEnd('^');
// console.log(builder.getValue()); // "^.^"
// builder.padBoth('=');
// console.log(builder.getValue()); // "=^.^="
//////////////////////////////////////////////////////////////////////////////////////
// const user = {
//   username: 'Victor',
//   showName() {
//     console.log(this.username);
//   },
//   // this.showName(),/*помилка*/
// };

// showName();
//////////////////////////////////////////////////////////////////////////////
// const library = {
//   books: {
//     firstBooks: 35,
//     secondBooks: 125,
//   },
//   logBookCount() {
//     console.log(this.books.secondBooks);
//   },
// };

// const showBooks = library.logBookCount.bind({ secondBooks: 724 }); /*помилка*/

// showBooks(); /*отримаємо 1923*/
///////////////////////////////////////////////////////////////////////////////
// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = 'Mango';

// console.log(dog); // { name: "Mango", [[Prototype]]: animal }
///////////////////////////////////////////////////////////////////
// class User {
//   constructor(name, email) {
//     // Ініціалізація властивостей екземпляра
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User('Mango', 'mango@mail.com');
// console.log(mango); // { name: 'Mango', email: 'mango@mail.com' }

// // const poly = new User('Poly', 'poly@mail.com');
// // console.log(poly); // { name: 'Poly', email: 'poly@mail.com' }
//////////////////////////////////////////////////////////////////////////////
// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor(params) {
//     this.#email = params.email;
//     User.#takenEmails.push(params.email);
//   }
// }

// const mango = new User({ email: 'mango@mail.com' });

// console.log(User.isEmailTaken('poly@mail.com')); // false
// console.log(User.isEmailTaken('mango@mail.com')); // true
/////////////////////////////////////////////////////////////////
// const person = { name: 'Mango' };

// function sayHi(age) {
//   return `${this.name} is ${age}`;
// }

// console.log(sayHi.call(person, 18));
// console.log(sayHi.bind(person, 18)());
//////////////////////////////////////////////////////////////
// 10. Створіть телефонну книгу - об'єкт phonebook,

// у якого є властивість contacts (список контактів)

// та методи управління книгою:

// add(data) - приймає об'єкт data, де зберігається
// name, email, category, id, createdAt
// (name i email - обов'язкові параметри, які треба передавати
// при додаванні нового контакта,
// category - може передаватись чи ні, якщо ні - має
// приймати значення "default",
// id та createdAt генеруються відповідними методами:
// generateId() і getDate());

// *не забудь додати перевірку, якщо контакт з таким ім'ям чи імейлом вже є - ми його не додаємо

// list() - виводить список контактів у вигляді таблиці;
// filtered(category) - фільтрує контактів по обраній категорії (друзі, робота і т.д.)
// delete(name) - видаляє контакт з заданим ім'ям;
// updateName(oldName, newName) - змінює ім'я контакта;

// const phonebook = {
//   // є властивість contacts(список контактів)
//   contacts: [],
//   // методи управління книгою:
//   // -- додає контакт
//   add(data) {
//     const { name, email, category = 'default' } = data;

//     // *не забудь додати перевірку
//     const existingContact = this.contacts.find(
//       contact => contact.name === name || contact.email === email
//     );

//     if (existingContact) {
//       console.log("Контакт з таким ім'ям або email вже існує.");
//       return;
//     }

//     const newContact = {
//       id: this.generateId(),
//       name,
//       email,
//       category,
//       createdAt: this.getDate(),
//     };

//     this.contacts.push(newContact);
//   },
//   // виводить список контактів у вигляді таблиці
//   list() {
//     console.table(this.contacts);
//   },
//   // фільтрує контактів по обраній категорії
//   filtered(category) {
//     const filteredContacts = this.contacts.filter(
//       contact => contact.category === category
//     );
//     console.table(filteredContacts);
//   },
//   // видаляє контакт з заданим ім'ям
//   delete(name) {
//     // indexOf(): повертає індекс першого знайденого елемента в масиві.
//     // Ідеальний вибір, якщо потрібно знати, де знаходиться конкретний елемент.
//     // find(): використовується для пошуку першого елемента, який відповідає заданій умові в переданій функції зворотного виклику.
//     // findIndex(): аналогічний методу find(), але повертає індекс знайденого елемента, а не сам елемент.
//     // includes(): простий метод, який повертає true, якщо масив містить зазначений елемент, і false  в іншому випадку.

//     const index = this.contacts.findIndex(
//       contact => contact.name.toLowerCase() === name.toLowerCase()
//     );

//     if (index === -1) {
//       console.log("Контакт з таким ім'ям не знайдено.");
//       return;
//     }

//     this.contacts.splice(index, 1);
//   },
//   // змінює ім'я контакта
//   updateName(oldName, newName) {
//     const contact = this.contacts.find(contact => contact.name === oldName);

//     if (!contact) {
//       console.log("Контакт з таким старим ім'ям не знайдено.");
//       return;
//     }

//     contact.name = newName;
//   },

//   generateId() {
//     return '#' + Math.random().toString(36).substr(2, 9);
//   },

//   getDate() {
//     return Date.now();
//   },
// };

// phonebook.add({
//   name: 'Doe',
//   email: 'Doe@example.com',
//   category: 'friends',
// });

// phonebook.add({
//   name: 'Jane',
//   email: 'Jane@example.com',
//   category: 'friends',
// });

// phonebook.add({
//   name: 'Lala',
//   email: 'Lala@example.com',
// });

// phonebook.list();
// phonebook.filtered('friends');
// phonebook.delete('Doe');
// phonebook.list();
// phonebook.updateName('Doe', 'John');
// phonebook.list();
//////////////////////////////////////////////////////////////////////////////////
// 4. Створити клас Worker, у якого є властивості name і salary.
// У класу Worker є метод getSalary, який повертає повідомлення
// "Worker <name> has salary <salary> dollars"
// Створити клас WorkerPosition, у якого є властивість position
// і який успадковує клас Worker, додаючи метод getPosition
// який повертає повідомлення "<name> works as <position>"

// class Worker {
//   constructor(name, salary) {
//     this.name = name;
//     this.salary = salary;
//   }
//   getSalary(name, salary) {
//     return `Worker ${this.name} has salary ${this.salary} dollars`;
//   }
// }

// const worker1 = new Worker(`nik`, 50);
// console.log(worker1.getSalary());

// class WorkerPosition extends Worker {
//   constructor(name, salary, position) {
//     super(name, salary);
//     this.position = position;
//   }
//   getPosition(name, position) {
//     return `${this.name} works as ${this.position}`;
//   }
// }

// const worker2 = new WorkerPosition(`dodik`, 230, 'Manager');
// console.log(worker2.getSalary());
// console.log(worker2.getPosition());

///////////////////////////////////////////////////////////////
// 5. Створити клас Contact для створення контакта з полями name, email і phone.
// Потім створиnb клас ContactBook, який буде зберігати список контактів
// і надавати методи для додавання, видалення та пошуку контактів.

// class Contact {
//   constructor(name, email, phone) {
//     this.name = name;
//     this.email = email;
//     this.phone = phone;
//   }

//   toString() {
//     return `Contact(Name: ${this.name}, Email: ${this.email}, Phone: ${this.phone})`;
//   }
// }

// class ContactBook {
//   constructor() {
//     this.contacts = [];
//   }

//   addContact(contact) {
//     this.contacts.push(contact);
//   }

//   removeContact(name) {
//     const index = this.contacts.findIndex(contact => contact.name === name);
//     if (~index) {
//       this.contacts.splice(index, 1);
//     } else {
//       console.log('Contact not found');
//     }
//   }

//   findContact(name) {
//     return this.contacts.find(contact => contact.name === name) || null;
//   }

//   showAllContacts() {
//     return this.contacts;
//   }
// }

// const contact1 = new Contact(
//   'Ivan Ivanov',
//   'ivan@example.com',
//   '+380501234567'
// );
// const contact2 = new Contact(
//   'Petro Petrov',
//   'petro@example.com',
//   '+380509876543'
// );

// const myContactBook = new ContactBook();

// myContactBook.addContact(contact1);
// myContactBook.addContact(contact2);

// console.log(myContactBook.showAllContacts());

// myContactBook.removeContact('Ivan Ivanov');

// console.log(myContactBook.showAllContacts());

//////////////////////////////////////////////////////////////////

// 7. Є масив чисел, наприклад: arr = [1,2,3,4,5]
// Напишіть функцію getSums(arr), яка повертає масив його часткових сум.
// Іншими словами, виклик getSums(arr) має повертати новий масив з такої ж
// кількості елементів, в якому на кожній позиції буде сума елементів масива
// до цієї позиції включно

// Наприклад: для arr = [1,2,3,4,5]
// getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]
// Функція не має змінювати вхідний масив
// Використовуйте метод reduce

// const getSums = arr => {
//   let sum = 0;
//   return arr.reduce((arrGrad, grad) => {
//     sum += grad;
//     arrGrad.push(sum);
//     return arrGrad;
//   }, []);
// };
// console.log(getSums([1, 2, 3, 4, 5]));
////////////////////////////////////////////////////////////////////////////////////////
// 10. Знайти найдорожчий продукт у категорії "meat"
// Напиши для цього функцію getMostExpensiveMeatProduct(products)

// const products = [
//   { name: 'Apple', category: 'fruits', price: 1.2, stock: 50 },
//   { name: 'Banana', category: 'fruits', price: 0.8, stock: 100 },
//   { name: 'Carrot', category: 'vegetables', price: 0.5, stock: 200 },
//   { name: 'Broccoli', category: 'vegetables', price: 1.0, stock: 150 },
//   { name: 'Milk', category: 'dairy', price: 1.5, stock: 20 },
//   { name: 'Cheese', category: 'dairy', price: 2.5, stock: 5 },
//   { name: 'Chicken', category: 'meat', price: 5.0, stock: 30 },
//   { name: 'Beef', category: 'meat', price: 7.0, stock: 25 },
// ];
// -----------------------------------------------------------------------------
// function getMostExpensiveMeatProduct(products) {
//   const maxPriceMeatProduct = products
//     .filter(obj => obj.category === 'meat')
//     .toSorted((a, b) => b.price - a.price);

//   return maxPriceMeatProduct[0].name;
// }
// // ----------------------------------------------------------------------------------
// function getMostExpensiveMeatProduct(products) {
//   let mostExpensiveMeat = null;
//   let mostExpensivePrice = 0;

//   for (const product of products) {
//     if (product.category === 'meat') {
//       if (mostExpensivePrice === 0 || product.price > mostExpensivePrice) {
//         mostExpensivePrice = product.price;
//         mostExpensiveMeat = product;
//       }
//     }
//   }

//   return mostExpensiveMeat ? mostExpensiveMeat.name : null;
// }
// console.log(getMostExpensiveMeatProduct(products));

// -----------------------------------------------------------------------------

// function getMostExpensiveMeatProduct(products) {
//   const meatProducts = products.filter(product => product.category === 'meat');

//   const mostExpensiveMeatProduct = meatProducts.reduce(
//     (maxProduct, currentProduct) => {
//       return currentProduct.price > maxProduct.price
//         ? currentProduct
//         : maxProduct;
//     }
//   );

//   return mostExpensiveMeatProduct ? mostExpensiveMeatProduct.name : null;
// }
// // -----------------------------------------------------------------------------
// function getMostExpensiveMeatProduct(products) {
//   const meatProducts = [];
//   for (const product of products) {
//     if (product.category === 'meat') meatProducts.push(product);
//   }

//   let maxPriceMeatProduct;
//   for (let i = 0; i < meatProducts.length; i++) {
//     if (i === 0) {
//       maxPriceMeatProduct = meatProducts[i].price;
//     } else if (meatProducts[i].price > maxPriceMeatProduct) {
//       maxPriceMeatProduct = meatProducts[i];
//     }
//   }

//   return maxPriceMeatProduct.name;
// }

// console.log(getMostExpensiveMeatProduct(products));
///////////////////////////////////////////////////////////////////
// const images = [
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
//     description: 'Hokkaido Flower',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
//     description: 'Container Haulage Freight',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
//     description: 'Aerial Beach View',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
//     description: 'Flower Blooms',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
//     description: 'Alpine Mountains',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
//     description: 'Mountain Lake Sailing',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
//     description: 'Alpine Spring Meadows',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
//     description: 'Nature Landscape',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
//     description: 'Lighthouse Coast Sea',
//   },
// ];

// const listGallery = document.querySelector('ul.gallery');

// const img = images
//   .map(
//     ({ original, preview, description }) =>
//       `<li class="gallery-item">
//           <a class="gallery-link" href="${original}">
//             <img
//               class="gallery-image"
//               src="${preview}"
//               data-source="${original}"
//               alt="${description}"
//             />
//           </a>
//       </li>`
//   )
//   .join('');

// listGallery.insertAdjacentHTML('beforeend', img);

// listGallery.addEventListener('click', galleryClick);

// function galleryClick(event) {
//   event.preventDefault();

//   if (event.target.nodeName !== 'IMG') {
//     return;
//   }
//   openModal(event.target.dataset.source);
// }

// document.addEventListener('keydown', galleryKeydown);

// function galleryKeydown(event) {
//   const isOpenModal = document.querySelector('.basicLightbox'); // перевірка, чи модальне вікно відкрите
//   if (['Enter', 'NumpadEnter', 'Space'].includes(event.code) && !isOpenModal) {
//     const img = event.target.querySelector('img');

//     if (img) {
//       openModal(img.dataset.source);
//     }
//   }
// }

// function openModal(image) {
//   const instance = basicLightbox.create(
//     `
//     <img src="${image}">
// `,
//     {
//       onShow: () => document.addEventListener('keydown', closeModal),
//       onClose: () => document.removeEventListener('keydown', closeModal),
//     }
//   );

//   instance.show();

//   function closeModal(event) {
//     if (event.code === 'Escape') {
//       instance.close();
//     }
//   }
// }
//////////////////////////////////////////////////////
// const btn = document.querySelector('#hider');
// const box = document.querySelector('#text');

// btn.addEventListener('click', handleClick);

// function handleClick(event) {
//   box.hidden = true;
// }
/////////////////////////////////////////
// const boxes = document.querySelector('#container');
// const btn = document.querySelectorAll('.remove-button');
// const box = document.querySelectorAll('.pane');

// boxes.addEventListener('click', handleClick);

// function handleClick(event) {
//   // if (!event.target.classList.contains('remove-button')) return;

//   // if (event.target.className != 'remove-button') return;

//   if (event.target.nodeName !== 'BUTTON') return;

//   removeBox(event.target);
// }

// function removeBox(button) {
//   //   const indexBtn = [...btn].indexOf(button);
//   //   [...box][indexBtn].hidden = true;

//   //   button.closest('.pane').hidden = true;

//   const pane = button.closest('.pane');
//   pane.remove();
// }
/////////////////////////////////////
// Обертаємо кожен текстовий вузол у <span>
// for (const li of tree.querySelectorAll('li')) {
//   const span = document.createElement('span'); // створюємо <span>
//   li.prepend(span); // додаємо його перед усім вмістом <li>
//   span.append(span.nextSibling); // поміщаємо текстовий вузол у span
// }
// const listAnimal = document.querySelector('.tree');

// listAnimal.addEventListener('click', handleClick);

// function handleClick(event) {
//   if (event.target.nodeName !== 'SPAN') return;
//   console.log(event.target);

//   hiddenMenu(event.target);
// }

// function hiddenMenu(itemMenu) {
//   const childUl = itemMenu.closest('li').querySelector('ul');
//   if (!childUl) return; // дітей немає , виходимо
//   childUl.hidden = !childUl.hidden; // Перемикаємо видимість
//   childUl.classList.toggle('hidden');
//   CSS для приховування підменю:
//   .hidden {
//   display: none;
// }
// або
// if (childUl.style.display === 'none') {
//   childUl.style.display = ''; // Показати елемент
// } else {
//   childUl.style.display = 'none'; // Приховати елемент
// }
// }

// Приховуємо всі підсписки за замовчуванням
// let sublists = document.querySelectorAll('.tree ul ul');
// sublists.forEach(function (ul) {
//   ul.hidden = true;
// });
///////////////////////////////////////////////////////////////////////////
// let salaries = {
//   Іван: 100,
//   Петро: 300,
//   Марія: 250,
// };

// function topSalary(salaries) {
//   let maxSalary = 0;
//   let maxName = null;

//   for (let [name, salary] of Object.entries(salaries)) {
//     if (salary > maxSalary) {
//       maxSalary = salary;
//       maxName = name;
//     }
//   }
//   return maxName;
// }

// console.log(topSalary(salaries));
///////////////////////////////////////////////////////////////
// const person = {
//   name: 'Олег',
//   address: {
//     city: 'Київ',
//     street: 'Хрещатик',
//   },
// };

// const {
//   address: { city },
// } = person;

// console.log(city);
// ////////////////////////////////////////////////////
// const fruits = ['apple', 'banana', 'orange', 'kiwi'];

// const [a, ...rest] = fruits;
// console.log(a, rest);
// /////////////////////////////////////////////////////////
// const user = { name: 'Оля', age: 25 };

// const { name: userName, age: userAge } = user;
// console.log(userName, userAge);
/////////////////////////////////////////////////
// function getScores() {
//   return [85, 90, 78];
// }
// const [a, b] = getScores();
// console.log(a, b);
///////////////////////////////////////////////////
// const product = { name: 'Телефон', price: 300 };

// function showProduct({ name, price }) {
//   console.log(`Продукт: ${name}, Ціна: ${price}`);
// }

// showProduct(product);
///////////////////////////////////////////////////
// const data = {
//   title: 'Book',
//   info: {
//     author: 'John Doe',
//     genres: ['fiction', 'mystery'],
//   },
// };

// const {
//   title,
//   info: {
//     author,
//     genres: [a],
//   },
// } = data;

// console.log(title, author, a);
//////////////////////////////////////////////////////////
// const library = {
//   books: [
//     {
//       title: 'Harry Potter',
//       author: {
//         firstName: 'J.K.',
//         lastName: 'Rowling',
//       },
//       genres: ['fantasy', 'adventure'],
//       publicationYear: 1997,
//     },
//     {
//       title: 'Lord of the Rings',
//       author: {
//         firstName: 'J.R.R.',
//         lastName: 'Tolkien',
//       },
//       genres: ['fantasy', 'epic'],
//       publicationYear: 1954,
//     },
//   ],
// };
// const { books } = library;
// console.log(books);

// for (const book of books) {
//   const {
//     author: { firstName, lastName },
//     genres: [a],
//   } = book;
//   console.log(firstName, lastName, a);
// }
///////////////////////////////////////////////////////////////
// function getUsers() {
//   return [
//     { name: 'Alice', age: 30 },
//     { name: 'Bob', age: 25 },
//     { name: 'Charlie', age: 35 },
//   ];
// }

// const [, { name, age }] = getUsers();
// console.log(`Ім'я:${name}, Вік:${age}`);
// ////////////////////////////////////////////////////////////
// const person = {
//   name: 'Mark',
//   contact: {
//     phone: '123-456-789',
//     email: 'mark@example.com',
//   },
// };

// function showContactInfo({ contact: { phone, email } }) {
//   return `Тел: ${phone}, Пошта: ${email}`;
// }
// console.log(showContactInfo(person));
///////////////////////////////////////////////////////////////
// const settings = {
//   theme: 'dark',
//   language: 'en',
// };

// function applySettings({ theme = 'light', language = 'en', layout = 'grid' }) {
//   return `Тема: ${theme}, Мова: ${language}, Макет: ${layout}`;
// }

// console.log(applySettings(settings));
///////////////////////////////////////////////////////////////
// const products = [
//   { name: 'Laptop', price: 1000, details: { color: 'gray', weight: 2 } },
//   { name: 'Phone', price: 600, details: { color: 'black', weight: 0.5 } },
//   { name: 'Tablet', price: 800, details: { color: 'white', weight: 1 } },
// ];
// for (const product of products) {
//   const {
//     name,
//     price,
//     details: { color, weight },
//   } = product;
//   console.log(
//     `Ім'я: ${name}, Ціна: ${price}, Колір: ${color}, Маса: ${weight} кг`
//   );
// }
///////////////////////////////////////////////////////////////////
// function getScores() {
//   return [100, 95, 90, 85, 80];
// }

// const [a, b, ...rest] = getScores();
// console.log(a);
// console.log(b);
// console.log(rest);
///////////////////////////////////////////////////////////
// function configureUser({
//   name = 'Unknown',
//   preferences: {
//     theme = 'light',
//     notifications = { email: true, sms: false },
//   } = {},
// }) {
//   return `Ім'я: ${name}, Тема: ${theme}, Пошта: ${true}, СМС: ${false} `;
// }

// const user = {
//   name: 'Alice',
//   preferences: {
//     theme: 'dark',
//   },
// };

// console.log(configureUser(user));
//////////////////////////////////////////////////////////////
// const teams = [
//   { name: 'Team A', members: ['Alice', 'Bob'] },
//   { name: 'Team B', members: ['Charlie', 'Dave'] },
// ];

// for (const team of teams) {
//   const {
//     name,
//     members: [nameFirst, nameSecond],
//   } = team;

//   console.log(`Ім'я: ${name}, Член 1: ${nameFirst}, Член 2: ${nameSecond} `);
// }
////////////////////////////////////////////////////////////////
// const user = {
//   name: 'Kate',
//   age: 28,
//   email: 'kate@example.com',
//   password: 'secret',
// };

// const { password, ...rest } = user;
// console.log(rest);
/////////////////////////////////////////////////////////////

// function getSettings() {
//   return {
//     theme: 'dark',
//     getColors() {
//       return ['#ffffff', '#000000'];
//     },
//   };
// }

// const { theme, getColors } = getSettings();

// const [colorFirst, colorSecond] = getColors();

// console.log(`Тема: ${theme}, Колор 1: ${colorFirst}, Колор 2: ${colorSecond} `);
///////////////////////////////////////////////////////////////

// 4 практика
//  8. При натисканні на будь-який рядок у табличці відобразіть
//  повідомлення з назвою продукту та його ціною.
//  "Ви вибрали <product> за <price>".
//
// const table = document.querySelector('tbody');
// const details = document.querySelector('#productDetails');

// table.addEventListener('click', showProduct);

// function showProduct(event) {
//   if (details.textContent !== '') details.textContent = '';
//   if (event.target.textContent.includes('грн')) {
//     const price = event.target.textContent;
//     const product = event.target.previousElementSibling.textContent;
//     details.append(`Ви вибрали ${product} за ${price}`);
//   } else {
//     const product = event.target.textContent;
//     const price = event.target.nextElementSibling.textContent;
//     details.append(`Ви вибрали ${product} за ${price}`);
//   }
// }
// 2 варіант
// const table = document.querySelector('tbody');
// const details = document.querySelector('#productDetails');

// table.addEventListener('click', showProduct);

// function showProduct(event) {
//   const row = event.target.closest('tr'); // Знайти найближчий рядок таблиці
//   if (row) {
//     const product = row.cells[0].textContent; // Отримати перший стовпець (назва продукту)
//     const price = row.cells[1].textContent; // Отримати другий стовпець (ціна)
//     details.textContent = `Ви вибрали ${product} за ${price}`; // Вивести повідомлення
//   }
// }
/////////////////////////////////////////////////////
// 9. При натисканні на кожну з кнопок підсумовуються значення з data-атрибутів.
// За натисканням на кнопку "Вивести результат" виводиться сума значення, а також статистика з
// інформацією про те, яка кнопка була натиснута скільки разів.

// const statList = document.querySelector('.statList');
// const resultButton = document.querySelector('#resultButton');
// const resultSection = document.querySelector('#resultSection');

// let sum = 0;
// const clickCounts = {
//   'Button #1': 0,
//   'Button #2': 0,
//   'Button #3': 0,
//   'Button #4': 0,
//   'Button #5': 0,
//   'Button #6': 0,
// };

// statList.addEventListener('click', event => {
//   const button = event.target;
//   if (!button.classList.contains('calcButton')) return;

//   const buttonText = button.textContent;
//   const buttonValue = Number(button.dataset.number);

//   clickCounts[buttonText]++;

//   sum += buttonValue;

//   console.log(`Кнопка ${buttonText} натиснута! Поточна сума: ${sum}`);
// });

// resultButton.addEventListener('click', () => {
//   resultSection.innerHTML = '';

//   const sumParagraph = document.createElement('p');
//   sumParagraph.textContent = `Сума: ${sum}`;
//   resultSection.appendChild(sumParagraph);

//   const statsList = document.createElement('ul');

//   const statsListHTML = [];
//   for (const buttonText in clickCounts) {
//     statsListHTML.push(
//       `<li>Кнопка ${buttonText} натиснута ${clickCounts[buttonText]} разів</li>`
//     );
//   }

//   statsList.innerHTML = statsListHTML.join('');

//   resultSection.appendChild(statsList);

//   sum = 0;
//   for (const button in clickCounts) {
//     clickCounts[button] = 0;
//   }
// });
///////////////////////////////////////////////
// const lovePromise = new Promise((resolve, reject) => {
//   const isLove = Math.random() > 0.5;
//   if (isLove) {
//     resolve('Кохає:heart:');
//   } else {
//     reject('Не кохає :broken_heart:');
//   }
// });
// lovePromise
//   .then(message => {
//     console.log(message);
//   })
//   .catch(() => {
//     return lovePromise;
//   })
//   .then(message => {
//     console.log(message);
//   })
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log('мене');
//   });
//   /////////////////////////////////////////////////
// new Promise((resolve, reject) => {
//   const isLove = Math.random() > 0.5;
//   if (isLove) {
//     resolve('Кохає:heart:');
//   } else {
//     reject('Не кохає :broken_heart:');
//   }
// })
//   .then(message => {
//     console.log(message);
//   })
//   .catch(() => {
//     return new Promise((resolve, reject) => {
//       const isLove = Math.random() > 0.5;
//       if (isLove) {
//         resolve('Кохає:heart:');
//       } else {
//         reject('Не кохає :broken_heart:');
//       }
//     });
//   })
//   .then(message => {
//     console.log(message);
//   })
//   .catch(error => {
//     console.log(error); // Якщо вдруге теж не вдасться, то виведеться це
//   })
//   .finally(() => {
//     console.log('мене');
//   });
///////////////////////////////////////////////////////////
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(`Операція виконана успішно!`);
//   }, 1000);
// });

// promise.then(result => {
//   console.log(result);
// });
//////////////////////////////////////////////////////////////
// const promise = new Promise((resolve, reject) => {
//   const state = false;
//   setTimeout(() => {
//     reject(`Сталася помилка!`);
//   }, 2000);
// });

// promise.then(result => console.log(result)).catch(error => console.log(error));
/////////////////////////////////////////////////////////
// const isSuccess = Math.random() > 0.5;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve('Успіх!');
//     } else {
//       reject('Помилка!');
//     }
//   }, 3000);
// });

// promise
//   .then(result => console.log(`${result}`))
//   .catch(error => console.log(error))
//   .finally(() => console.log('Операція завершена.'));
//////////////////////////////////////////////////////////

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(2);
//   }, 2000);
// });

// promise
//   .then(result => {
//     console.log(result);
//     return result * 2;
//   })
//   .then(result => {
//     console.log(result);
//     return result * 3;
//   })
//   .then(result => console.log(result))
//   .catch(error => console.log(error));
///////////////////////////////////////////////////////////////
// const isSuccess = true;

// const request1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve(`Дані з сервера 1`);
//     } else {
//       reject('error');
//     }
//   }, 2000);
// });

// const request2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve(`Дані з сервера 2`);
//     } else {
//       reject('error');
//     }
//   }, 4000);
// });

// request1
//   .then(result => {
//     console.log(result);
//     return request2;
//   })
//   .then(result => console.log(result))
//   .catch(error => console.log(error))
//   .finally(() => console.log(`End operation`));
////////////////////////////////////////////////////////////////
// function asyncOperation(value) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (value > 10) {
//         resolve(`Success value > 10`);
//       } else {
//         reject(`Fail value < 10`);
//       }
//     }, 3000);
//   });
// }

// asyncOperation(17)
//   .then(result => console.log(result))
//   .catch(error => console.log(error));
//////////////////////////////////////////////////////////////////
// const promise1 = new Promise(resolve => {
//   setTimeout(() => {
//     resolve('First result');
//   }, 1000);
// });

// const promise2 = new Promise(resolve => {
//   setTimeout(() => {
//     resolve('Second result');
//   }, 2000);
// });

// const promise3 = new Promise(resolve => {
//   setTimeout(() => {
//     resolve('Third result');
//   }, 3000);
// });

// Promise.all([promise1, promise2, promise3]).then(results => {
//   console.log(results); // Виведе: ['First result', 'Second result', 'Third result']
// });
// //////////////////////////////////////////////////////
// const promise1 = new Promise(resolve => {
//   setTimeout(() => {
//     resolve('First result');
//   }, 2000);
// });

// const promise2 = new Promise(resolve => {
//   setTimeout(() => {
//     resolve('Second result');
//   }, 1000);
// });

// Promise.race([promise1, promise2]).then(result => {
//   console.log(result); // Виведе: Second result
// });
/////////////////////////////////////////////////////////////////
// Обробка помилок у ланцюжку
// Ланцюжок промісів із навмисною помилкою на одному з етапів.
// const promise = new Promise(resolve => {
//   resolve(5);
// });

// promise
//   .then(value => {
//     console.log(value); // Виведе: 5
//     return value * 2;
//   })
//   .then(value => {
//     console.log(value); // Виведе: 10
//     throw new Error('Oops! Something went wrong');
//   })
//   .catch(error => {
//     console.error(error.message); // Виведе: Oops! Something went wrong
//     return 20; // Продовжуємо ланцюжок з нового значення.
//   })
//   .then(value => {
//     console.log(value); // Виведе: 20
//   });
///////////////////////////////////////////////////////////////////
// function factorial(n) {
//   return new Promise((resolve, reject) => {
//     if (n < 0) {
//       reject('Factorial for negative numbers is not defined');
//     } else if (n === 0 || n === 1) {
//       resolve(1);
//     } else {
//       setTimeout(() => {
//         factorial(n - 1).then(result => {
//           resolve(n * result);
//         });
//       }, 500); // Затримка в 500 мс для кожного кроку
//     }
//   });
// }

// factorial(5)
//   .then(result => {
//     console.log(result); // Виведе: 120
//   })
//   .catch(error => {
//     console.log(error);
//   });
///////////////////////////////////////////////////////////////////////
// function greetUser(user = `Guest`, success, fail) {
//   if (user !== `Guest`) {
//     success(`Hello, ${user}`);
//   } else {
//     fail(`Hello, ${user}`);
//   }
// }

// greetUser(
//   undefined,
//   success => console.log(success),
//   fail => console.log(fail)
// );
/////////////////////////////////////////////////////////////////////
// function greetUser(user = `Guest`) {
//   return new Promise((resolve, reject) => {
//     if (user !== `Guest`) {
//       resolve(`Hello, ${user}`);
//     } else {
//       reject(`Hello, ${user}`);
//     }
//   });
// }

// greetUser(`Diana`)
//   .then(success => console.log(success))
//   .catch(fail => console.log(fail));
///////////////////////////////////////////////////////////////
// function greetUser(user = `Guest`) {
//   if (user !== `Guest`) {
//     return Promise.resolve(`Hello, ${user}`);
//   } else {
//     return Promise.reject(`Hello, ${user}`);
//   }
// }

// greetUser()
//   .then(success => console.log(success))
//   .catch(fail => console.log(fail));
/////////////////////////////////////////////////////////
// const state = Math.random() > 0.5;

// function fetchUserFromServer(name, onRequest, offRequest) {
//   setTimeout(() => {
//     if (state) {
//       onRequest(`${name} знайдено!`);
//     } else {
//       offRequest(`Помилка пошуку користувача.`);
//     }
//   }, 1000);
// }

// fetchUserFromServer(
//   `Diana`,
//   onRequest => console.log(onRequest),
//   offRequest => console.log(offRequest)
// );
//////////////////////////////////////////////////////////////
// const state = Math.random() > 0.5;

// function fetchUserFromServer(name) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (state) {
//         resolve(`${name} знайдено!`);
//       } else {
//         reject(`Помилка пошуку користувача.`);
//       }
//     }, 1000);
//   });
// }

// fetchUserFromServer(`Diana`)
//   .then(onRequest => console.log(onRequest))
//   .catch(offRequest => console.log(offRequest));
///////////////////////////////////////////////////////////
// const shouldResolve = Math.random() > 0.5;

// function foo(shouldResolve) {
//   if (shouldResolve) {
//     return Promise.resolve(`Success`);
//   } else {
//     return Promise.reject(`Fail`);
//   }
// }

// foo(shouldResolve)
//   .then(onRequest => console.log(onRequest))
//   .catch(offRequest => console.log(offRequest));
//////////////////////////////////////////////////////////
// const state = Math.random() > 0.5;

// function request11(state) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (state) {
//         resolve(`Data success 11`);
//       } else {
//         reject(`Data fail 11`);
//       }
//     }, 1000);
//   });
// }

// function request22(state) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (state) {
//         resolve(`Data success 22`);
//       } else {
//         reject(`Data fail 22`);
//       }
//     }, 2000);
//   });
// }

// Promise.all([request11(state), request22(state)])
//   .then(resolve => console.log(resolve)) //Якщо всі проміси виконалися успішно, виводиться масив результатів.
//   .catch(error => console.log(error));//Якщо хоча б один із промісів зазнає невдачі (відхилення), він негайно повертає перший результат reject і ігнорує всі інші проміси, навіть якщо вони могли завершитися пізніше.
/////////////////////////////////////////////////////////////////////////
// const state = Math.random() > 0.5;

// function request11(state) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (state) {
//         resolve(`Data success 11`);
//       } else {
//         reject(`Data fail 11`);
//       }
//     }, 1000);
//   });
// }

// function request22(state) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (state) {
//         resolve(`Data success 22`);
//       } else {
//         reject(`Data fail 22`);
//       }
//     }, 2000);
//   });
// }
// //завжди повертає результати для всіх промісів — успішних і відхилених.
// Promise.allSettled([request11(state), request22(state)]).then(results => {
//   results.forEach(result => {
//     if (result.status === 'fulfilled') {
//       console.log(result.value); // Успішний результат
//     } else {
//       console.log(result.reason); // Помилка
//     }
//   });
// });
////////////////////////////////////////////////////////////////////////
// const shouldFail = Math.random() > 0.5;

// function foo(username, shouldFail) {
//   if (shouldFail) {
//     return Promise.reject(`${username} failed`);
//   } else {
//     return Promise.resolve(`${username} succeeded`);
//   }
// }
// foo(`Diana`, shouldFail)
//   .then(result => console.log(result))
//   .catch(error => console.log(error));
///////////////////////////////////////////////////////////////
// function factorial(n) {
//   return new Promise((resolve, reject) => {
//     if (n < 0) {
//       reject("Факторіал не визначений для від'ємних чисел.");
//       return;
//     }
//     let factorial = 1;
//     let i = 1; // Оголошення i

//     const calculateFactorial = () => {
//       if (i <= n) {
//         factorial *= i;
//         i++;
//         setTimeout(calculateFactorial, 300); // Рекурсивний виклик для імітації затримки
//         console.log(factorial);
//       } else {
//         resolve(factorial); // Вирішення з остаточним значенням факторіала
//       }
//     };

//     calculateFactorial(); // Початок обчислення
//   });
// }

// factorial(10)
//   .then(result => console.log(`Факторіал ${result}`))
//   .catch(error => console.log(`Факторіал ${error}`));
/////////////////////////////////////////////////////////////////////////////////
