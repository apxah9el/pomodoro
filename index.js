var startButton = $("#start")
var stopButton = $("#stop")
var resetButton =$("#reset")

const startBtn = document.querySelector("#start");

let timeout1;

document.getElementById('timer').innerHTML =
  "25" + ":" + "00";

function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(m<0){
    return
  } 
  
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  console.log(m)
  timeout1 = setTimeout(startTimer, 1000)
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}

function stopTimer () {
    clearTimeout(timeout1)
}

startButton.click(function(){
    startBtn.disabled = true;
    startTimer()
})

stopButton.click(function(){
    startBtn.disabled = false;
    stopTimer()
})

resetButton.click(function(){
    document.getElementById('timer').innerHTML =
    "25" + ":" + "00";
})