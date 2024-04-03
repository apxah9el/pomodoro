var startButtonLong = $("#startLong")
var stopButtonLong = $("#stopLong")
var resetButtonLong =$("#resetLong")

const startBtnLong = document.querySelector("#startLong");

let timeoutLong;

document.getElementById('timerLong').innerHTML =
  "15" + ":" + "00";

function startTimerLong() {
  var presentTime = document.getElementById('timerLong').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecondLong((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(m<0){
    return
  } 
  
  document.getElementById('timerLong').innerHTML =
    m + ":" + s;
  console.log(m)
  timeoutLong = setTimeout(startTimerLong, 1000)
}

function checkSecondLong(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}

function stopTimerLong () {
    clearTimeout(timeoutLong)
}

startButtonLong.click(function(){
    startBtnLong.disabled = true;
    startTimerLong()
})

stopButtonLong.click(function(){
    startBtnLong.disabled = false;
    stopTimerLong()
})

resetButtonLong.click(function(){
    document.getElementById('timerLong').innerHTML =
    "15" + ":" + "00";
})