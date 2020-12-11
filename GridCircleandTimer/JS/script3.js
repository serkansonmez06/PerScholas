window.addEventListener('DOMContentLoaded', documentLoaded);

function documentLoaded() {
  // document.getElementsByClassName("container")[0].addEventListener("click", clicked);
  console.log("page document loaded");
  startTimer();
}

var startTime; // to calculate the time duration, we need start time.
var timeLimit; //the time we get from the text box - user's value.
var temp; //To set the clearInterval
var minutes, seconds, currentTime, elapsedTime;
var secondsFormatted, minutesFormatted, formattedTime;
var checkMinutes, checkSeconds;

//This function will get the time interval interval entered from the text box and will
// calculate the start time and the time elapsed
function startTimer(){
  startTime = new Date().getTime();// instead we can do thisDate = new Date();thisDate.getTime();
  console.log(timeLimit);
  temp = setInterval(updateTime, 1000); //Learn about this
  }

function updateTime(){
  console.log("inside updateTime");
  var currentTime = new Date().getTime();
  var elapsedTime = (currentTime - startTime)/1000; // to convert into milli seconds to seconds

  //to convert the elapsed time to minutes and into seconds format
  minutes = Math.floor(elapsedTime / 60);
  seconds = Math.floor(elapsedTime % 60);
  //Formatting the time for single digit minutes and seconds adding 0 before

  if(minutes < 10 ){
    minutesFormatted = "0" + minutes;
  } else {minutesFormatted = minutes;}
  if (seconds < 10){
    secondsFormatted = "0" + seconds;
  } else { secondsFormatted = seconds; }
  //displaying the elapsed time
  formattedTime = minutesFormatted+":"+secondsFormatted;
   document.getElementById("label1").innerHTML = minutesFormatted;
   document.getElementById("label2").innerHTML = secondsFormatted;
   console.log(minutes+" minutes");
   console.log(seconds+" seconds");
   console.log(timeLimit);
   if (minutes >= checkMinutes && seconds >=checkSeconds) {
     document.getElementById("clock").className = "timeIsUp";
     console.log("Time is Up");
   } else {
     document.getElementById("clock").className = "timer";
     //console.log("It's Ticking");
   }
}

function enterTime(){
   clearInterval(temp); // this will stop the timer
   document.getElementById("label1").contentEditable="true";
   document.getElementById("label2").contentEditable="true";
   minutes = document.getElementById("label1").innerHTML;
   checkMinutes = parseInt(minutes);
   checkSeconds = parseInt(seconds);
   console.log(minutes);
   seconds = document.getElementById("label2").innerHTML;
   console.log(seconds);
   timeLimit = parseInt(minutes*60)+parseInt(seconds);//
   clock.addEventListener("keydown", function keydown(evt) {

     // 13 is the code for ENTER
     if (evt.keyCode === 13) {
       //timeLimit = document.getElementById("label1").innerHTML;
       console.log(timeLimit);
       document.getElementById("label1").contentEditable="false";
       document.getElementById("label2").contentEditable="false";
       startTimer();

       // its important to remove the keydown listener, otherwise in a subsequent edit
       // we will end up with several keydown listeners running
       clock.removeEventListener("keydown", keydown);
     }
   });

}
