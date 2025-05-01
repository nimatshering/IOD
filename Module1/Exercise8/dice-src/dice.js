function roll_dice() {
  const face = document.getElementById("selected_face").value;
  const dice_number = Math.floor(Math.random() * face) + 1;
  // document.getElementById("output").textContent = dice_number;
  document.getElementById("image").src = "../dice-ui/" + dice_number + ".png";
}
