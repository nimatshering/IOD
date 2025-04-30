let cars = ["Toyota", "Subaru", "Suzuki", "Holden", "Honda"];
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);

//Replace the value of the element at position 1 and 4.
cars[0] = "Jaguar";
cars[3] = "Hundai";
console.log(cars);

//Add a new element to the beginning of the array
cars.unshift("BMW");
console.log(cars);

//Remove the element at the end of the array
cars.pop();

console.log(cars);
