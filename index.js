var startButton = $("#start")
var stopButton = $("#stop")
var resetButton = $("#reset")
var pomodoro = $("#study-time")

const startBtn = document.querySelector("#start");

let timeout1;

document.getElementById('timer').innerHTML =
  "25" + ":" + "00";

function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if (s == 59) { m=m-1 }
  if (m < 0) {
    return
  }
  
  if (m == 15 && s == 0) {
    $('#15minleft').toast('show')
  }
  if (m == 5 && s == 0) {
    $('#5minleft').toast('show')
  }
  if (m == 1 && s == 0) {
    $('#1minleft').toast('show')
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

pomodoro.click(function(){
  document.getElementById('title-text').style.color="#13c2e0"
  document.getElementById('background').style.backgroundColor="#f1b1c1"
})
