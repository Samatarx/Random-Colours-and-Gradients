const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const background = document.body.style;
const textColor = document.querySelector(".hexcode").style;
const button = document.getElementById("btn");
const text = document.querySelector("span");
const letters = document.querySelector("letter");

//Selects a random number from the hex array defined above
function getRandom() {
  return Math.floor(Math.random() * hex.length);
}

//This function creates a randomly generated colour once the button is pressed
button.addEventListener("click", function () {
  let hexcol = "#";
  //Returns a random value from the getRandom() function and then combines 6 values with the # to form a hex code
  for (var i = 0; i < 6; i++) {
    hexcol += hex[getRandom()];
  }

  //Changes the background color to match the randomly generated colours
  background.backgroundColor = hexcol;
  textColor.color = hexcol;
  text.innerHTML = hexcol;

  // This area changes the text area and provides the CSS properties in a easy to copy format
  document.querySelector("textarea").innerHTML = `background-color: ${hexcol};`;
});

//Button copies the textarea into the clipboard
const copytextarea = document.querySelector(".copybtn");

copytextarea.addEventListener("click", function () {
  var copyText = document.getElementById("copy");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("CSS Properties have been copied!");
});
