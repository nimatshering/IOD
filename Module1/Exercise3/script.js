function changeH1() {
  let text = document.getElementById("colOneTxt").textContent;
  document.getElementById("heading1").innerHTML = text;

  document.getElementById("heading1").style.color = "#FFFFFF";
  document.getElementById("heading1").style.backgroundColor = "red";
  // document.getElementById("heading1").innerHTML = "Column 1";
}

function changeH2() {
  let text = document.getElementById("colTwoTxt").textContent;
  document.getElementById("heading2").innerHTML = text;

  document.getElementById("heading2").style.color = "#FFFFFF";
  document.getElementById("heading2").style.backgroundColor = "blue";
  // document.getElementById("heading2").innerHTML = "Column 2";
}
