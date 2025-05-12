/***************************************** 
+ Exercise 1
*******************************************/
"" + 1 + 0; // '10" => Implicit type conversion to string. + does concatenation
"" - 1 + 0; //  -1  => Implicit type conversion to number by - operator
true + false; // 1  => Implicit type conversion of true = 1 and false =0
!true; // false  => negation of true is false
6 / "3"; //2 => Implicit type conversion of "3" to number by / operator
"2" * "3"; //6 => Implicit type conversion of "2" & "3" to number by * operator
4 + 5 + "px"; //9px => After adding 4+5=9, implicit type conversion of "px" to string, + does concatenation
"$" + 4 + 5; //$45 = > Implicit type conversion by "$" to string, + does concatenation
"4" - 2; //2 = Implicit type conversion to number by - operator
"4px" - 2; //NaN Implicit type conversion to number by - operator but 4px is not a number
" -9 " + 5; //' -9 5 ' =>Implicit type conversion to string. + does concatenation
" -9 " - 5; //-14 => Implicit type conversion to number by - operator
null + 1; //1 => Implicit type conversion to number. null converted to 0
undefined + 1; //NaN => Implicit type conversion undefined is NaN
undefined == null; // ture => loosely equal
undefined === null; // false => stricly not equal
" \t \n" - 2; // -2 // Implicit type conversion trims widespace, so "" is converted to 0

/***************************************** 
+ Exercise 2
*******************************************/

let three = "3";
let four = "4";
let thirty = "30";

//what is the value of the following expressions?
let addition = three + four; // '34'  => Implicit type conversion, + is concatenation
let multiplication = three * four; //12 => Implicit type conversion to Number
let division = three / four; //0.75 => Implicit type conversion to Number
let subtraction = three - four; // -1 => Implicit type conversion to Number
let lessThan1 = three < four; //true = Compares character by character by unicode values
let lessThan2 = thirty < four; //true = compares character by character using unicode values -

/***************************************** 
/ Exercise 3
*******************************************/
//Which of the following console.log messages will print? Why?
if (0) console.log("#1 zero is true"); // 0 => false
if ("0") console.log("#2 zero is true"); //Print => string "0" is not empty so its true
if (null) console.log("null is true"); //fase null is zoro
if (-1) console.log("negative is true"); //Print => -1 not evaluates to true
if (1) console.log("positive is true"); // Print => 1 is true

/***************************************** 
/ Exercise 4
*******************************************/
//Rewrite this if using the ternary/conditional operator '?'.
// Test it with different values for a and b.
// What does the ‘+=’ do?

let a = 2,
  b = 3;

let result = `${a} + ${b} is `;

// if (a + b < 10) {
//   result += "less than 10";
// } else {
//   result += "greater than 10";
// }

//ternary statement
result += a + b < 10 ? "less than 10" : "greater than 10";

console.log(result);

/***************************************** 
/ Exercise 5
*******************************************/
/*
Rewrite the following function using: 
a) function expression syntax, and b) arrow function syntax. 
Test each version to make sure they work the same. */

// function getGreeting(name) {
//   return "Hello " + name + "!";
// }

//function expression
const getGreeting_exp = function (name) {
  return "Hello " + name + "!";
};

//arrow function
const getGreeting_arrow = (name) => "Hello " + name + "!";

/***************************************** 
//Exercise 6
*******************************************/
//a) & b)
const westley = {
  name: "Westley",
  numFingers: 5,
};
const rugen = {
  name: "Count Rugen",
  numFingers: 6,
};

const inigo = {
  firstName: "Inigo",
  lastName: "Ruben", //lastName added
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
    console.log(greeting + this.getCatchPhrase(person));
  },

  getCatchPhrase(person) {
    if (person.numFingers == 6) {
      return "I do not mean to pry, but you don't by any chance happen to have six fingers on your right hand?";
    } else {
      return "Nice to meet you.";
    }
  },

  //Using arrow function
  getCatchPhraseArrowFunction: (person) => {
    return person.numFingers == 6
      ? "I do not mean to pry, but you don't by any chance happen to have six fingers on your right hand?"
      : "Nice to meet you.";
  },
};

inigo.greeting(westley);
inigo.greeting(rugen);

/***************************************** 
//Exercise 7
*******************************************/
//a)
const basketballGame = {
  score: 0,
  foul: 0,

  freeThrow() {
    this.score++;
    return this;
  },
  basket() {
    this.score += 2;
    return this;
  },
  threePointer() {
    this.score += 3;
    return this;
  },

  foulCount() {
    this.foul++;
    return this;
  },
  halfTime() {
    console.log(
      "Halftime score is " + this.score + " and foul count is " + this.foul
    );
    return this;
  },

  fullTime() {
    console.log(
      "Fulltime final score is " +
        this.score +
        " and foul count is " +
        this.foul
    );
    return this;
  },
};

//modify each of the above object methods to enable function chaining as below: basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();
basketballGame
  .basket()
  .foulCount()
  .freeThrow()
  .foulCount()
  .freeThrow()
  .basket()
  .threePointer()
  .halfTime()
  .basket()
  .foulCount()
  .freeThrow()
  .threePointer()
  .fullTime();

/***************************************** 
//Exercise 8
*******************************************/
//a)
const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};

for (let key in sydney) {
  console.log("key: " + key);
  console.log("value: " + sydney[key]);
}
for (let key in sydney) {
  console.log("key: " + key);
  console.log("value: " + sydney[key]);
}

//b)
const perth = {
  name: "Perth",
  population: 2_107_000,
  state: "WA",
  founded: "26 January 1829",
  timezone: "Australia/Perth",
};
for (let key in perth) {
  console.log("key: " + key);
  console.log("value: " + perth[key]);
}

/***************************************** 
//Exercise 9
*******************************************/
let teamSports = ["Hockey", "Cricket", "Volleyball"];
let dog1 = "Bingo";
let cat1 = { name: "Fluffy", breed: "Siberian" };

let moreSports = teamSports;
moreSports.push("Football");
moreSports.unshift("Cricket");

let dog2 = dog1;
dog2 = "Leo";

let cat2 = cat1;
cat2.name = "Charlie";

console.log(moreSports);
console.log(dog2);
console.log(cat2);

/***************************************** 
//Exercise 10
*******************************************/
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
}

let person1 = new Person("Newton", 70, true);
let person2 = new Person("John", 25, true);
console.log(person1);
console.log(person2);