/****************************************  
   Exercise 1
**************************************** */
function makeCounter() {
  let currentCount = 0;
  return function () {
    currentCount++;
    console.log(currentCount);
    return currentCount;
  };
}
let counter1 = makeCounter();
counter1(); // 1
counter1(); // 2

//a) Create a second counter counter2 using the makeCounter function
let counter2 = makeCounter();

counter2(); // 1
counter2(); // 2

//b) - Modify makeCounter so that it takes an argument startFrom
function makeCounter(startFrom) {
  let currentCount = startFrom;
  return function () {
    currentCount++;
    console.log(currentCount);
    return currentCount;
  };
}
let counter = makeCounter(5);
counter(); //

//c) Modify makeCounter to take another argument incrementBy
function makeCounter(startFrom, incrementBy) {
  let currentCount = startFrom;
  return function () {
    currentCount += incrementBy;
    console.log(currentCount);
    return currentCount;
  };
}
let counter3 = makeCounter(5, 5);
counter3(); //
counter3();
counter3();
counter3();

/****************************************  
   Exercise 2
**************************************** */
//a)What order will the four tests below print in? Why?
/* 
  Execution Order
    4)
    3)
    2)
    1)
*/

//b) Rewrite delayMsg as an arrow function
let delayMsg = (msg) =>
  console.log(`This message will be printed after a delay: ${msg}`);

setTimeout(delayMsg, 100, "#1: Delayed by 100ms");
setTimeout(delayMsg, 20, "#2: Delayed by 20ms");
setTimeout(delayMsg, 0, "#3: Delayed by 0ms");
delayMsg("#4: Not delayed at all");
setTimeout(delayMsg, 10000, "#5: Delayed by 0ms");

//c) Add a fifth test which uses a large delay time (greater than 10 seconds)
timerid = setTimeout(delayMsg, 10000, "#5: Delayed by 10000ms");
//d) Use clearTimeout to prevent the fifth test from printing at all.
clearTimeout(timerid);

/****************************************  
   Exercise 3
**************************************** */
// a)Create a debounce(func) decorator

function printMe() {
  console.log("printing debounced message");
}
printMe = debounce(printMe);

//decorotor function
function debounce(func) {
  let timeoutId;

  return function () {
    clearTimeout(timeoutId); // Clear preciding timeout
    // Set new timeout
    timeoutId = setTimeout(() => {
      func.apply(this, arguments);
    }, 1000);
  };
}

setTimeout(printMe, 100);
setTimeout(printMe, 200);
setTimeout(printMe, 300);

//b) & c) Extend the debounce decorator function to take a second arguments
function printMe(msg) {
  console.log("Debounced:", msg);
}

printMe = debounce(printMe, 1000);

// decorotor function
function debounce(func, ms) {
  let timeoutId;

  return function () {
    clearTimeout(timeoutId); // Clear preciding timeout
    // Set new timeout
    timeoutId = setTimeout(() => {
      func.apply(this, arguments);
    }, ms);
  };
}
setTimeout(printMe, 100, "Printing debounced message");
setTimeout(printMe, 200, "Printing debounced message");
setTimeout(printMe, 300, "Printing debounced message");

/****************************************  
   Exercise 4
**************************************** */
//a) Write a function printFibonacci() using setInterval that outputs a number in the Fibonacci sequence every second.
function printFibonacci() {
  let a = 0,
    b = 1;
  console.log(a);
  [a, b] = [b, a + b];
  setInterval(() => (([a, b] = [b, a + b]), console.log(a)), 1000);
}

printFibonacci();

//b)Write a new version printFibonacciTimeouts()
function printFibonacciTimeouts() {
  let a = 0,
    b = 1;
  function nextSum() {
    console.log(a);
    [a, b] = [b, a + b];
    setTimeout(nextSum, 1000); // timeout every second
  }
  nextSum(); // get the next sum
}

printFibonacciTimeouts();

//c) Extend one of the above functions to accept a limit argument
function printFibonacciTimeouts(limit) {
  let a = 0,
    b = 1;
  counter = 0;

  function nextSum() {
    if (counter == limit) return;
    counter++;
    console.log(a);
    [a, b] = [b, a + b];
    setTimeout(nextSum, 1000); // timeout every second
  }
  nextSum(); // get the next sum
}

printFibonacciTimeouts(5);

/****************************************  
   Exercise 5
**************************************** */

/* 
when you pass  car.description method
to setTimeout function, the original 
context (this) to car object is lost. It now refers 
to the global context, thus the property is returning undefined */

// a) -Fix the setTimeout call by wrapping

let car = {
  make: "Porsche",
  model: "911",
  year: 1964,
  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  },
};
car.description(); //works
// setTimeout(car.description, 200); //fails
setTimeout(() => {
  car.description; // by wrappign inside function,
  // the original contex (this) to car object is preserved
}, 200); //now sworks

//b) Change the year for the car by creating a clone
let cloneCar1 = {
  ...car,
  year: 2025,
};
console.log(car.year); // 1964 — original unchanged
console.log(cloneCar1.year);

//c) - it is still referencing the original car object

//d) Fix using bild
setTimeout(car.description.bind(car), 200);

//e) - Change another property of the car
let cloneCar2 = {
  ...car,
  make: "Toyota",
};
setTimeout(car.description.bind(car), 200); // Still points to car object as .bind(car) permanently links it to `car`object.

/****************************************  
   Exercise 6
**************************************** */
//6. Use the Function prototype to add a new delay(ms) function to all functions,

//a) Use the example multiply function below to test it with, as above,
//   and assume that all delayed functions will take two parameters

//   Add delay to Function prototype
Function.prototype.delay = function (ms) {
  return (a, b) => {
    setTimeout(() => {
      this(a, b);
    }, ms);
  };
};

//Multiply Function
function multiply(a, b) {
  console.log(a * b);
}

// test.delay(1000);
multiply.delay(500)(5, 5);

//b) Use apply to improve your solution so that delayed functions can t
// ake any number of parameters
//Add delay to Function prototype
Function.prototype.delay = function (ms) {
  return (a, b) => {
    setTimeout(() => {
      this.apply(this, [a, b]);
    }, ms);
  };
};

//Multiply Function
function multiply(a, b) {
  console.log(a * b);
}

// test.delay(1000);
multiply.delay(500)(5, 5);

//c)Modify multiply to take 4 parameters and multiply all of them
Function.prototype.delay = function (ms) {
  return (a, b) => {
    setTimeout(() => {
      this.apply(this, [a, b]);
    }, ms);
  };
};

//Multiply Function
function multiply(a, b) {
  console.log(a * b);
}

// test.delay(1000);
multiply.delay(500)(5, 5);

/****************************************  
   Exercise 7
**************************************** */
//a) Create a new class PrecisionClock that inherits from DigitalClock
// and adds the parameter precision
class DigitalClock {
  constructor(prefix) {
    this.prefix = prefix;
  }

  display() {
    let date = new Date(); //create 3 variables in one go using array destructuring
    let [hours, mins, secs] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];

    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;

    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
  }
}

const myClock = new DigitalClock("my clock:");
myClock.start();

//a) Create a new class PrecisionClock that inherits from DigitalClock
// and adds the parameter precision
class PrecisionClock extends DigitalClock {
  constructor(refix, precision = 1000) {
    super(prefix);
    this.precision = precision;
  }
}

//b)Create a new class AlarmClock that inherits from DigitalClock

class AlarmClock extends DigitalClock {
  constructor(frefix, wakeupTime = "7:00") {
    super(prefix);
    this.wakeupTime = wakeupTime;
  }
}

/**************************************************************** 
   Exercise 8
****************************************************************** */

//a) Create a decorator function validateStringArg(fn)
//**************************************************************** */
// Original function
function orderItems(itemName) {
  return `Order placed for: ${itemName}`;
}

// Decorator function
function validateStringArgs(fn) {
  return function () {
    try {
      if (typeof arguments[0] !== "string") {
        throw new Error("All arguments must be strings");
      }
      return fn.apply(this, arguments); //preserve this and forward the arguments
    } catch (error) {
      console.error("Validation Error:", error.message);
    }
  };
}

// Create a decorated version of the original function
const validatedOrderItem = validateStringArgs(orderItems);

// Test calls
console.log(validatedOrderItem("Samsung Galaxy S25 Ultra")); // Should run the function
console.log(validatedOrderItem(123)); // Should log validation error and return undefined

//**************************************************************** */
//b) Extend orderItems to use the ... rest operator
//c) Extend the decorator function to validate as strings all arguments passed to fn
//d) When testing the decorated function, use try-catch blocks to handle
//   errors thrown for non-string arguments

//**************************************************************** */
// Original function
function orderItems(...itemNames) {
  return `Order placed for: ${itemNames.join("; ")}`;

  // let orderItems = "";
  // itemNames.forEach((item) => {
  //   orderItems += item;
  // });
  // return orderItems;
}

// Decorator function with internal error handling
function validateStringArgs(fn) {
  return function (...args) {
    try {
      for (let arg of args) {
        if (typeof arg !== "string") {
          throw new Error("All arguments must be strings");
        }
      }
      return fn.apply(this, args); //preserve this & and forward the arguments to original function (orderItems)
    } catch (error) {
      console.error("Validation Error:", error.message);
    }
  };
}

// Create a decorated version of the original function
// const validatedOrderItem = validateStringArgs(orderItems);
// Test calls
console.log(
  validatedOrderItem("Samsung Galaxy S25 Ultra", "iPhone 16 Max Pro")
); // Should run the function
console.log(validatedOrderItem(123)); // Should log validation error and return undefined

/**************************************************************** 
   Exercise 9
****************************************************************** */
//a) - Create a promise-based alternative randomDelay()
//b) - check for even (success) & odd (failure)
//c) - catch the reject error
//q - Updated .then() and .catch 'message
function randomDelay() {
  const promise = new Promise((resolve, reject) => {
    let randDelay = Math.floor(Math.random() * 20 * 1000); //between 1 and 20 seconds
    console.log(randDelay);
    setTimeout(() => {
      if (randDelay % 2 === 0) {
        resolve("The delay is successful");
      } else reject("The delay is rejected");
    }, randDelay);
  });
  return promise;
}
// randomDelay().then(() => console.log("There appears to have been a delay."));
randomDelay()
  .then((message) => console.log("Success:", message))
  .catch((error) => console.error("Failure:", error));

/**************************************************************** 
   Exercise 10
****************************************************************** */
// a) & b) & c)

import fetch from "node-fetch";
globalThis.fetch = fetch;

async function fetchURLData(url) {
  let fetchPromise = await fetch(url).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  });
  return fetchPromise;
}

async function fetchMultipleURLs(urls) {
  const promises = urls.map((url) => fetchURLData(url));
  console.log(promises);
  return Promise.all(promises);
}

//Multiple Urls
const urls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
];

// fetchURLData("https://jsonplaceholder.typicode.com/todos/1")
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error.message));

//fetch multiple Urls
fetchMultipleURLs(urls)
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));
