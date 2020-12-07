
// when the document is loaded, trigger the "documentLoaded" function
window.addEventListener('DOMContentLoaded', documentLoaded, false);

var startTime;
var limite;
var temporizador;

function documentLoaded() {
  "use strict";

  // listen for mouse clicks on the button
  document.getElementById("btnStart").addEventListener("click", startTimer);

  console.log("Document is succesfully loaded");
}

// when we click on the button, we save the current time, and the time limit. We then
// create a timer to execute the "updateTime" function once a second.
function startTimer() {

  "use strict";

  startTime = new Date();

  input.value = 10; // default starting counter when you click on numbers


  input.addEventListener("keydown", function keydown(evt) {
	if (evt.keyCode === 13) { // 13 is the code for ENTER
		//input.value = label.innerHTML;
	    limit = parseInt(input.value); //read limit from input

  limite = parseInt(document.getElementById("txtTempo").value);

  clearInterval(temporizador);
  temporizador = setInterval(updateTime, 1000);
}

function updateTime() {
  "use strict";

  // read the current time
  var currentTime = new Date();

  // calculate how many seconds passed since the start of the timer
  var elapsed = (currentTime.getTime() - startTime.getTime()) / 1000;

  // convert seconds to minutes and seconds (below 60)
  var minutos = Math.floor(elapsed / 60);
  var segundos = Math.floor(elapsed % 60);

  // pad with zeroes on the left to look better
  if (minutos < 10) {
    minutos = "0" + minutos;
  }
  if (segundos < 10) {
    segundos = "0" + segundos;
  }

  // show the elapsed time
  document.getElementById("clock").innerHTML = minutos + ":" + segundos;

  // check if we are above the time limit and set the color of the timer accordingly
  if (minutos >= limite) {
    document.getElementById("clock").className = "red";
  } else {
    document.getElementById("clock").className = "blue";
  }

}
