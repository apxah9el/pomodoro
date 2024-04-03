var startButtonShort = $("#startShort")
var stopButtonShort = $("#stopShort")
var resetButtonShort =$("#resetShort")

const startBtnShort = document.querySelector("#startShort");

let timeoutShort;

document.getElementById('timerShort').innerHTML =
  "5" + ":" + "00";

function startTimerShort() {
  var presentTime = document.getElementById('timerShort').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecondShort((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(m<0){
    return
  } 
  
  document.getElementById('timerShort').innerHTML =
    m + ":" + s;
  console.log(m)
  timeoutShort = setTimeout(startTimerShort, 1000)
}

function checkSecondShort(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}

function stopTimerShort () {
    clearTimeout(timeoutShort)
}

startButtonShort.click(function(){
    startBtnShort.disabled = true;
    startTimerShort()
})

stopButtonShort.click(function(){
    startBtnShort.disabled = false;
    stopTimerShort()
})

resetButtonShort.click(function(){
    document.getElementById('timerShort').innerHTML =
    "5" + ":" + "00";
})