class Calculator {
  constructor() {
    // this.id = Date.now();
    this.id = Math.floor(Math.random() * 65536); //Random integer from 0 to 65535
  }
  #log = (value) => {
    console.log(`[Calculator :${this.id}]:${value}`);
  };

  //add nmber
  add(num1, num2) {
    const value = num1 + num2;
    this.#log(value);
    return value;
  }

  //subtract number
  subtract(num1, num2) {
    const value = num1 - num2;
    this.#log(value);
    return value;
  }

  //multiply number
  multiply(num1, num2) {
    const value = num1 * num2;
    this.#log(value);
    return value;
  }

  //divide number
  divide(num1, num2) {
    const value = parseFloat(num1 / num2.toFixed(2));
    this.#log(value);
    return value;
  }
}

module.exports = Calculator;
