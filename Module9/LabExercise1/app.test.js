// app.test.js
// import supertest and the express app
const request = require("supertest");
const app = require("./app");
describe("Calculator Routes", () => {
  // generate some random numbers to test the calculator
  let number1 = Math.floor(Math.random() * 1_000_000);
  let number2 = Math.floor(Math.random() * 1_000_000);

  //unit test for adding two numbers
  test("GET /calculator/add => sum of numbers", () => {
    return request(app)
      .get(`/calculator/add?num1=${number1}&num2=${number2}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({
          result: number1 + number2,
        });
      });
  });

  //unit test for subtracting two numbers
  test("GET /calculator/subtract => difference of 2 numbers", () => {
    return request(app)
      .get(`/calculator/subtract?num1=${number1}&num2=${number2}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({
          result: number1 - number2,
        });
      });
  });

  //unit test for multiplication two numbers
  test("GET /calculator/multiply => product of 2 numbers", () => {
    return request(app)
      .get(`/calculator/multiply?num1=${number1}&num2=${number2}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({
          result: number1 * number2,
        });
      });
  });

  //unit test for division of two numbers
  test("GET /calculator/divide => quotient of 2 numbers", () => {
    return request(app)
      .get(`/calculator/divide?num1=${number1}&num2=${number2}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({
          result: number1 / number2,
        });
      });
  });
});
