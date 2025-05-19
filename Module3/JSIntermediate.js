/****************************************  
   Exercise 1
**************************************** */

const ucFirstLetters = (sentence) => {
  let words = sentence.split(" ");
  let result = "";
  words.forEach((word) => {
    result += word.charAt(0).toUpperCase() + word.slice(1) + " ";
  });
  return result;
};

console.log(ucFirstLetters("los angeles"));
console.log(ucFirstLetters("canberra is australia's capital"));

/****************************************  
   Exercise 2
**************************************** */

function truncate(str, max) {
  console.log(str.length);
  let result = "";
  if (str.length <= max) {
    return str;
  } else {
    return str.slice(0, max) + "...";
  }
}

let str =
  "Perth, capital of Western Australia, sits where the Swan River meets the southwest coast.";
console.log(truncate(str, 35));

console.log(truncate("This text will be truncated if it is too long", 25));

/****************************************  
   Exercise 3
**************************************** */
const animals = ["Tiger", "Giraffe"];

//a) Add 2 new values to the end
animals.push("Elephant", "Lion");

//b) Add 2 new values to the beginning
animals.unshift("Deer", "Monkey");
console.log(animals);

//c) Sort the values alphabetically
const sortedAnimals = [...animals].sort();
console.log(sortedAnimals);

//d) Function to replace the value in the middle of the animals array with newValue
function replaceMiddleAnimal(newValue) {
  const middle = Math.round(animals.length / 2);
  animals[middle] = newValue;
}

replaceMiddleAnimal("Leopard");
console.log(animals);

//e. findMatchingAnimals
function findMatchingAnimals(beginsWith) {
  const uppercase = beginsWith.toUpperCase();
  return animals.filter((animal) => animal.toUpperCase().startsWith(uppercase));
}

console.log(findMatchingAnimals("t")); //lowercase
console.log(findMatchingAnimals("T")); //uppercase
console.log(findMatchingAnimals("L")); //uppercase
console.log(findMatchingAnimals("l")); //lowercase

/****************************************  
   Exercise 4
**************************************** */

function camelCase(cssProp) {
  const props = cssProp.split("-");
  let camelCaseWord = "";

  //using for...of loop
  let firstProp = true;
  for (const prop of props) {
    if (firstProp) {
      camelCaseWord += prop;
      firstProp = false;
    } else {
      camelCaseWord += prop.charAt(0).toUpperCase() + prop.slice(1);
    }
  }

  //using foreach loop with ternary operator
  props.forEach((prop, index) => {
    camelCaseWord +=
      index == 0 ? prop : prop.charAt(0).toUpperCase() + prop.slice(1);
  });

  return camelCaseWord;
}

console.log(camelCase("margin-left")); //marginLeft
console.log(camelCase("background-image")); // backgroundImage
console.log(camelCase("display")); // display

/****************************************  
   Exercise 5
**************************************** */
/*
a) Explain why the above code returns the wrong answer

answer - The toFixed() method in JavaScript returns string. Therefore, the vlaue of
fixedTwenty + fixedTen this will be concatenated as a string.

*/

// b) - currencyAddition function
function currencyAddition(float1, float2) {
  const multiplier = 10; // 1 decimal places, like cents
  const sum = Math.round(float1 * multiplier) + Math.round(float2 * multiplier);
  return sum / multiplier;
}

console.log(currencyAddition(0.1, 0.2));

//c) - currencyOperation function
function currencyOperation(float1, float2, operation) {
  const multiplier = 10; // 1 decimal places, like cents

  if (operation === "+") {
    const result =
      Math.round(float1 * multiplier) + Math.round(float2 * multiplier);
    return result / multiplier;
  }

  if (operation === "-") {
    const result =
      Math.round(float1 * multiplier) - Math.round(float2 * multiplier);
    return result / multiplier;
  }

  if (operation === "/") {
    const result =
      Math.round(float1 * multiplier) / Math.round(float2 * multiplier);
    return result / multiplier;
  }

  if (operation === "*") {
    const result =
      Math.round(float1 * multiplier) * Math.round(float2 * multiplier);
    return result / multiplier;
  }
}

console.log(currencyOperation(0.1, 0.2, "+"));
console.log(currencyOperation(0.1, 0.2, "-"));
console.log(currencyOperation(0.1, 0.2, "/"));
console.log(currencyOperation(0.1, 0.2, "*"));

//d) (Extension) Extend the above function to include a fourth argument numDecimals
function currencyOperation1(float1, float2, operation, numDecimals) {
  const multiplier = numDecimals; // any number of decimal places, passed in the function

  if (operation === "+") {
    const result =
      Math.round(float1 * multiplier) + Math.round(float2 * multiplier);
    return result / multiplier;
  }

  if (operation === "-") {
    const result =
      Math.round(float1 * multiplier) - Math.round(float2 * multiplier);
    return result / multiplier;
  }

  if (operation === "/") {
    const result =
      Math.round(float1 * multiplier) / Math.round(float2 * multiplier);
    return result / multiplier;
  }

  if (operation === "*") {
    const result =
      Math.round(float1 * multiplier) * Math.round(float2 * multiplier);
    console.log(result);
    return result / multiplier;
  }
}

console.log(currencyOperation1(0.1, 0.2, "+", 10)); // 1 decimal place
console.log(currencyOperation1(0.01, 0.02, "-", 100)); //2 decimal place
console.log(currencyOperation1(0.001, 0.002, "/", 1000)); // 3 decimal place
console.log(currencyOperation1(0.0001, 0.0002, "*", 10000)); // 4 decimal place

//test
console.log(0.3 == currencyAddition(0.1, 0.2)); //true
console.log(0.3 == currencyOperation(0.1, 0.2, "+")); // true

/****************************************  
   Exercise 6
**************************************** */
const colours = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "red",
  "blue",
  "yellow",
];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];
const cars = ["Toyota", "Camry", "Silver", "Honda", "Civic", "Toyota", "Camry"];

function unique(colours) {
  return new Set(colours);
}

console.log(unique(colours));
console.log(unique(testScores));
console.log(unique(cars));

/****************************************  
   Exercise 7
**************************************** */
const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
  { id: 4, title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
];
// a) -Function to getBookTitle(bookId)
function getBookTitle(bookId) {
  return books.find((book) => book.id === bookId);
}

// b) -function getOldBooks()
function getOldBooks() {
  return books.filter((book) => book.year <= 1950);
}

// c) - function addGenre()
function addGenre() {
  return books.map((book) => ({
    ...book, // copy to all the object properties
    genere: "classic", //add new property to the object
  }));
} //returns a new books array

//d) - getTitles(authorInitial)
function getTitles(authorInitial) {
  return books
    .filter((book) => book.author.startsWith(authorInitial))
    .map((book) => book.title);
}

// e) - function latestBook()
function latestBook() {
  let latestYear = 1900; //start year for latest book search

  // Find the most recent book from 1900 to current date
  books.forEach((book) => {
    if (book.year > latestYear) {
      latestYear = book.year;
    }
  });

  //Find latest book
  return books.find((book) => book.year === latestYear);
}
console.log(getBookTitle(5));
console.log(getOldBooks());
console.log(addGenre());
console.log(getTitles("J"));
console.log(latestBook());

/****************************************  
   Exercise 8
**************************************** */

const phoneBookABC = new Map(); //an empty map to begin with
phoneBookABC.set("Annabelle", "0412312343");
phoneBookABC.set("Barry", "0433221117");
phoneBookABC.set("Caroline", "0455221182");

//a) - phoneBookDEF Map
const phoneBookDEF = new Map(); //an empty map

//b) - initilise
phoneBookDEF.set("Danil", "041231566");
phoneBookDEF.set("Earl", "041231567");
phoneBookDEF.set("Ford", "041231568");

//c) update the phone number of Caroline
phoneBookABC.set("Caroline", "041231569");

//c) -  Function printPhoneBook
function printPhoneBook(contacts) {
  console.log(contacts);
}

//d) - prints the names and phone numbers in the given Map
printPhoneBook(phoneBookDEF);
printPhoneBook(phoneBookABC);

//e) - Combine the contents of the two individual Maps into a single phoneBook
const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);

//f) full list of names in the combined phone book
printPhoneBook(phoneBook);

/****************************************  
   Exercise 9
**************************************** */
let salaries = {
  Timothy: 35000,
  David: 25000,
  Mary: 55000,
  Christina: 75000,
  James: 43000,
};

//a) function sumSalaries(salaries)
function sumSalaries(salaries) {
  const values = Object.values(salaries); // Get th evaales of all the salaryies
  return values.reduce((sum, salary) => sum + salary, 0);
}

console.log(sumSalaries(salaries));

//b) function topEarner(salaries)
function topEarner(salaries) {
  const arraySalaries = Object.entries(salaries); //converts the salaries object into an array of key-value pairs
  const [name, salary] = arraySalaries.reduce(
    (maxSal, curSalary) => (curSalary[1] > maxSal[1] ? curSalary : maxSal) //loop through the array each items and find the max salary
  );
  return { name, salary }; //return new object with max salary & name
}
console.log(topEarner(salaries));

/****************************************  
   Exercise 10
**************************************** */
const today = new Date();
console.log("Current time is " + today.toLocaleTimeString());
console.log(today.getHours() + " hours have passed so far today");

//a) Print the total number of minutes that have passed so far today
const hours = today.getHours();
const minutes = today.getMinutes();
const totalMinutes = hours * 60 + minutes;

console.log("Total minutes passed today: " + totalMinutes);

//b) Print the total number of seconds that have passed so far today
const seconds = today.getSeconds();
const totalSeconds = hours * 3600 + minutes * 60 + seconds;

console.log("Total seconds passed today: " + totalSeconds);

//c) Calculate and print your age as: 'I am x years, y months and z days old'
function calculateAge(dob) {
  const today = new Date();
  const mydob = new Date(dob);

  let yrs = today.getFullYear() - mydob.getFullYear();
  let months = today.getMonth() - mydob.getMonth();
  let days = today.getDate() - mydob.getDate();

  console.log(`I am ${yrs} years, ${months} months and ${days} days old`);
}

calculateAge("2000-01-01");

//d) function daysInBetween(date1, date2)
function daysInBetween(date1, date2) {
  const dt1 = new Date(date1);
  const dt2 = new Date(date2);

  const diffInMilliseconds = dt1 - dt2; // Get the difference in milliseconds
  const diffInDays = diffInMilliseconds / (1000 * 60 * 60 * 24); // Convert milliseconds to days
  return diffInDays;
}

console.log(daysInBetween("2025-05-13", "2025-05-01"));
