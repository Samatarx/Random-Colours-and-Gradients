const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const col = document.querySelector(".col").style;
const grad = document.querySelector(".grad").style;

function repeat() {
function getRandom() {
    return Math.floor(Math.random() * hex.length);
  }

  let hexcol = "#";
  let hexcol2 = "#";
  let hexcol3 = "#";
  //Returns a random value from the getRandom() function and then combines 6 values with the # to form a hex code
  for (var i = 0; i < 6; i++) {
    hexcol += hex[getRandom()];
    hexcol2 += hex[getRandom()];
    hexcol3 += hex[getRandom()];
  }

  col.backgroundColor = hexcol;

    //randomly selects a number between 1-360 to be used as the gradient angle
    const gradient = Math.floor(Math.random() * 360);

    //Changes the background color to match the randomly generated colours
    grad.backgroundImage = `linear-gradient(${gradient}deg, ${hexcol2} , ${hexcol3})`;}

const reload = setInterval(repeat, 2000)