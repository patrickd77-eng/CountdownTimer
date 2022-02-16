function startTimer() {
  let timer = document.getElementById("timer");

  if (!isNaN(timer.value) || timer.value.trim().length == 0) {
    while (parseInt(timer.value) < 0) {
      timer.value = timer.value - 1;
    }
  } else {
    alert(
      "Error, the timer had either no value or an incorrect value. Please try again."
    );
    timer.value = "";
  }
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
