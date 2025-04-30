let mountains = ["Everest", "Fuji", "Nanga Parbat"];
console.log(mountains[0]); // 'Everest'
console.log(mountains[1]); // 'Fuji'
console.log(mountains[2]); // 'Nanga Parbat'

mountains[1] = "Kilimanjaro";
console.log(mountains);

//add an element to the end of an array.
let seas = ["Black Sea", "Caribbean Sea", "North Sea", "Baltic Sea"];
console.log(seas);
seas.push("Red Sea");
console.log(seas);

//add an element to the beginning of an array.
seas.unshift("Adriatic Sea");
console.log(seas);

//remove an element to the beginning of an array.
seas.shift("Adriatic Sea");
console.log(seas);

//remove an element from the end of an array.
let rivers = ["Mississippi", "Amazon", "Nile"];
let lastRiver = rivers.pop();
console.log(lastRiver);

//index of an element.
let arrayIndex = rivers.indexOf("Amazon");
console.log(arrayIndex);

//find the number of elements in an array.
let numRivers = rivers.length;
console.log(numRivers); // 3
