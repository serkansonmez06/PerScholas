

var colors = ["blue", "orange", "red", "green"];

let elements = document.getElementsByClassName("gridBox");
var len = elements.length;

var currentColorIndex = 0;
var colorsLength = colors.length;

function colorChangeOnclik() {

  console.log("before increment" + currentColorIndex);
  if (currentColorIndex > colorsLength) {
    currentColorIndex = 0;
  } else {
    for (i = 0; i < len; i++)
      elements[i].style.backgroundColor = colors[currentColorIndex];
  }
    currentColorIndex++;
    console.log("after increment" + currentColorIndex);

    if(currentColorIndex >= colorsLength)
    currentColorIndex = 0;
}
