function startTimer() {
  let timer = document.getElementById("timer");



}

function clearTimer() {
  let timer = document.getElementById("timer");
  timer.value = null;
}

function addToTimer() {
  let timer = document.getElementById("timer");
  timer.stepUp();
}

function subtractFromTimer() {
  let timer = document.getElementById("timer");
  timer.stepDown();
}
