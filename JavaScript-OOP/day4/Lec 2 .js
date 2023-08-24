// function expressions

// let sum = function (a, b) {
//   return a + b;
// };

// let out = sum(4, 6);

// console.log(out); // 10

// --------------------------------------------------------------------------------------------

//  self invoke function

// (function () {
//   let y = "hello";
//   console.log(y);
// })();

// let person = {
//   fName: "Islam",
//   lName: "Ahmed",
//   fullName: function () {
//     return this.fName + " " + this.lName;
//   },
// };

// let person1 = {
//   fName: "John", // mohamed
//   lName: "Doe", // ahmed
// };

// console.log(person.fullName()); //
// let fullName = person.fullName.call(person1, "mohamed", "ahmed");
// let fullName2 = person.fullName.apply(person1, names);

// console.log(fullName); //
// console.log(fullName2); //

// --------------------------------------------------------------------------------------------

// call

// let person = {
//   fName: "Islam",
//   lName: "Ahmed",
//   fullName: function () {
//     return this.fName + " " + this.lName;
//   },
// };

// let person1 = {
//   fName: "John",
//   lName: "Doe",
// };

// let fullName = person.fullName.apply(person1);

// console.log(fullName);

// --------------------------------------------------------------------------------------------

// call and apply

// let person = {
//   fName : 'Islam' ,
//   lName : 'Ahmed' ,
//   fullName : function(country , city){
//     return this.fName + ' ' + this.lName + ' / ' + country + ' ' + city
//   }
// }

// let person1 = {
//   fName : 'John' ,
//   lName : 'Doe' ,
// }

// let fullName = person.fullName.call(person1, 'Egypt' , 'Alex')

// let fullName = person.fullName.apply(person1, ['Egypt' , 'Alex'])

// console.log(fullName)

// --------------------------------------------------------------------------------------------

// Image You Want to implement counter
// Suppose you want to use a variable for counting something, and you want this counter to be available to all functions.
// The counter should be local to the add() function, to prevent other code from changing it:

// ---------------------------------------------------- First Approch -------------------------------------------------------------------------------------------

// let counter = 0;

// function add() {
//   counter += 1;
// }

// add(); // 1
// add(); // 2
// add(); // 3

// The counter should now be 3 , but anyone can access counter and increase it Right ????

//---------------------------------------------------- Second  Approch -------------------------------------------------------------------------------------------

// function add() {
//     let counter = 0;
//     counter += 1;
//     return counter;
//   }

//   add(); // 1
//   add(); // 1
//   add(); // 1

//The counter should now be 3. But it is 1.

// ----------------------------------------------------  Third and Final  Approch -------------------------------------------------------------------------------------------

// const add = (function () {
//   let counter = 0; // 1 , // 2
//   return function () {
//     counter += 1;
//     return counter;
//   }; // { 0 } { 1 } // { 2 } // { 3 }
// })();

// console.log(add()); // 1
// console.log(add()); // 2
// console.log(add()); // 3

// the counter is now 3

//   This is called a JavaScript closure. It makes it possible for a function to have "private" variables.

//    The counter is protected by the scope of the anonymous function, and can only be changed using the add function.

// --------------------------------------------------------------------------------------------

// slice (str index , end index ) ,  substring  and substr

// let str = "Apple, Banana, Kiwi";

// let part = str.slice(-7, 13);

// let newPart = str.substring(-7, 13);

// console.log(part);
// console.log(str);
// console.log(newPart);

// --------------------------------------------------------------------------------------------

// string methods

// let text = "Visit/Microsoft!";

// ['Visit' , 'Microsoft!']

// console.log(result);
// console.log(text.concat(result));
// console.log(text.indexOf("M"));
// console.log(text.lastIndexOf("i"));
// console.log(text.includes("i"));

// --------------------------------------------------------------------------------------------

// array methods

// let users = ["john", "alex", "moh", "dore"];

// console.log(users.reverse()); //

// console.log(users);
// users.push("drsh");
// console.log(users);

// users.unshift("islam");
// console.log(users);

// users.pop("drsh");
// console.log(users);

// users.shift("islam");
// console.log(users);

// console.log(users.concat(["islam", "mohamed"]));

// users.splice(1 , 0 , 'ibrahim')
// console.log(users)

// not change the original one

// let newUsers = users.slice(2, 3);
// console.log(newUsers);
// console.log(users);

// console.log(users.sort());

// let numberList = [5, 1, 9, 7, 6, 2];
// numberList.sort(function (a, b) {
//   return a - b;
// });

// console.log(numberList);
// a > b place b before a
// a < b place a before b
// a === b keep same origin

// console.log(users.reverse())

// --------------------------------------------------------------------------------------------

// array methods

// const numbers = [5, 6, 1, 2];

// array1.forEach(function (element, index) {
//   console.log(element, index);
// });

//  console.log(array1)

// let newAraa = array1.map(function (element, index, array) {
//   return element % 2 == 0;
// });

// console.log(newAraa);

// let newFilter = array1.filter(function (element, index, array) {
//   return element % 2 == 0;
// });
// console.log(newFilter);

// console.log(
//   array1.find(function (element) {
//     return element % 2 == 0;
//   })
// );

// console.log(array1.includes(6)); // true
// console.log(array1.includes(15)); // false

// const obj = { foo: "bar", baz: 42 };

// console.log(array1.indexOf(6));
