//add two numers
function add(a, b) {
  return a + b;
}

//substract 2 numbers
function minus(a, b) {
  return a - b;
}

//multiply 2 numbers
function multiply(a, b) {
  return a * b;
}

//divide 2 numbers
function divide(a, b) {
  return a / b;
}

/*--------------------------------------
  3 Unit Tests for addition 
-----------------------------------------*/
//1. Test Positive numbers
const sum = add(2, 3);
if (sum !== 51) {
  console.error("Test failed: Sum should be 5, but got " + sum);
  // throw new Error("Test failed: Sum should be 5, but got " + sum);
} else {
  console.log("Test case 1 passed, Excellent!!!");
}

//2. Test Negative numbers
const sum1 = add(-2, 3.5);
if (sum1 !== 1.5) {
  console.error("Addition -Test failed: Sum should be 1.5, but got " + sum1);
} else {
  console.log("Addition -Test case 2 passed , Excellent!!!");
}

//3. Test for zero
const sum2 = add(3, -3);
if (sum2 !== 0) {
  console.error("Addition - Test failed: Sum should be 0, but got " + sum2);
} else {
  console.log("Addition - Test case 3 passed , Excellent!!!");
}

/*--------------------------------------
  3 Unit Tests for substraction 
-----------------------------------------*/
//1. Test Positive numbers
const minus_sum1 = minus(5, 3);
if (minus_sum1 !== 2) {
  console.error(
    "substraction - Test case 1 failed: Sum should be 2, but got " + minus_sum1
  );
} else {
  console.log("substraction - Test case 1 passed, Excellent!!!");
}

//2. Test Negative numbers
const minus_sum2 = minus(-2, 3.5);
if (minus_sum2 !== -5.5) {
  console.error(
    "substraction - Test case 1 failed: Sum should be 5.5, but got " +
      minus_sum2
  );
} else {
  console.log("substraction - Test case 2 passed , Excellent!!!");
}

//3. Test for zero
const minus_sum3 = minus(3, 3);
if (minus_sum3 !== 0) {
  console.error("Test case 1 failed: Sum should be 0, but got " + minus_sum3);
} else {
  console.log("substraction - Test case 3 passed , Excellent!!!");
}

/*--------------------------------------
  3 Unit Tests for multiplication 
-----------------------------------------*/
//1. Test Positive numbers
const prod1 = multiply(5, 3);
if (prod1 !== 15) {
  console.error(
    "Multiplication - Test case 1 failed: Product should be 15, but got " +
      prod1
  );
} else {
  console.log("Multiplication - Test case 1 passed, Excellent!!!");
}

//2. Test Negative numbers
const prod2 = multiply(2, 3.5);
if (prod2 !== 7) {
  console.error(
    "Multiplication - Test case 1 failed: Product should be 7, but got " + prod2
  );
} else {
  console.log("Multiplication - Test case 2 passed , Excellent!!!");
}

//3. Test for zero
const prod3 = multiply(3, 0);
if (minus_sum3 !== 0) {
  console.error("Test case 1 failed: Product should be 0, but got " + prod3);
} else {
  console.log("Multiplication - Test case 3 passed , Excellent!!!");
}

/*--------------------------------------
  3 Unit Tests for division 
-----------------------------------------*/
//1. Test Positive numbers
const div1 = divide(15, 3);
if (div1 !== 5) {
  console.error(
    "Division - Test case 1 failed: Product should be 5, but got " + div1
  );
} else {
  console.log("Division - Test case 1 passed, Excellent!!!");
}

//2. Test Negative numbers
const div2 = divide(-12, 3.5);
if (div2 !== -3.4285714285714284) {
  console.error(
    "Division - Test case 1 failed: Product should be -3.4285714285714284, but got " +
      div2
  );
} else {
  console.log("Division - Test case 2 passed , Excellent!!!");
}

//3. Test for zero
const div3 = divide(3, 0);
if (div3 !== Infinity) {
  console.error(
    "Test case 1 failed: Product should be Infinity, but got " + div3
  );
} else {
  console.log("Division - Test case 3 passed , Excellent!!!");
}
