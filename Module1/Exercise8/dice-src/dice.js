function roll_dice() {
  const face = document.getElementById("selected_face").value;
  let dice_number = rollnow(face);
  // document.getElementById("output").textContent = dice_number;
  document.getElementById("image").src = "../dice-ui/" + dice_number + ".png";
}

//dice rolling
function rollnow(face) {
  return Math.floor(Math.random() * face) + 1;
}

/*--------------------------------------
  Unit Testing
----------------------------------------*/
//1. Test Positive numbers
const roll_positive = rollnow(6);
if (roll_positive > 10) {
  console.error(
    "Positive number - Test case 1 failed: Dice face should be greater then 10, but got " +
      roll_positive
  );
} else {
  console.log("Positive number - Test case 1 passed, Excellent!!!");
}

//2. Test negative numbers
const roll_negative = rollnow(6);
if (roll_negative < 0) {
  console.error(
    "Negative number - Test case 2 failed: Dice face should not be negative, but got " +
      roll_negative
  );
} else {
  console.log("Negative number - Test case 2 passed, Excellent!!!");
}

//3. Zero
const roll_sero = rollnow(6);
if (roll_sero == 0) {
  console.error(
    "Zero - Test case 3 failed: Dice face should not be zero, but got " +
      roll_sero
  );
} else {
  console.log("Zero - Test case 3 passed, Excellent!!!");
}
