let person = {
  name: "John",
  country: "Australia",
  lang: "English",
};

console.log(person.name);
console.log(person.country);
console.log(person["country"]);

person.name = "Gorge";
person.country = "PNG";
person["country"] = "NZ";
console.log(person.name);
console.log(person.country);
