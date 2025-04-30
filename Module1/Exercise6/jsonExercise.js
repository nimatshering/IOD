let book = {
  title: "Eloquent JavaScript",
  description: "A Modern Introduction to Programming",
  author: "Marijn Haverbeke",
  pages: "2000",
};

let book1 = {
  title: "Computer Programming for Beginners",
  description: "Learn How to Code Step by Step",
  author: "K. Connors",
  pages: "2500",
};

let book2 = {
  title: "Ruby on Rails",
  description: "Sustainable Web Development with Ruby on Rails",
  author: "David Bryant Copeland",
  pages: "3000",
};

let book3 = {
  title: "Python Crash Course, 3rd Edition",
  description: "A Hands-On, Project-Based Introduction to Programming",
  author: "Eric Matthes",
  pages: "2000",
};

let book4 = {
  title: "Pragmatic Programmer,",
  description: "The: Your journey to mastery",
  author: "David Thomase",
  pages: "5000",
};

// print individually
console.log(book.title);
console.log(book.description);
console.log(book["author"]);
console.log(book["pages"]);

//print whhole object
console.log(book);

//Update the description of the book
book.description =
  "3rd Edition: A Modern Introduction to Programming - Completely revised and updated";

console.log(book);

//array of 5 book objects
let books = [book.book1, book2, book3, book4];
console.log(books);
