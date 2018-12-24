
function timer (stop = false) {
  console.log(stop);
  let count = 0;
  const countTo = 100 * 10; // ms/s * s -- set stop time
  const delay = window.setInterval(() => {
    const msTens = countTo % 10;
    const msHundreds = Math.floor(countTo / 10) % 10;
    const secondOnes = Math.floor(countTo / 100) % 10;
    const secondTens = Math.floor(countTo / 1000) % 10;
    setDigits (msTens, msHundreds, secondOnes, secondTens);
    if (count < countTo) {
      count ++;
    } else if (stop === true) {
      window.clearInterval(delay);
    } else {
      window.clearInterval(delay);
      const digits = document.querySelectorAll(".digits");
      digits[0].childNodes.forEach(child => {
        child.className = "digit redDigit";
      });
    }
  }, 10); // execute every 10 ms
}


function resetTimer () {
  setDigits ("-", "-", "-", "-");
  const digits = document.querySelectorAll(".digits");
  digits[0].childNodes.forEach(child => {
    child.className = "digit";
  });
}


function setDigits (msTens, msHundreds, secondOnes, secondTens) {
  const digits = document.querySelectorAll(".digits");
  digits[0].childNodes.forEach(element => {
    if (element.id === "msTens") {
      element.textContent = msTens;
    } else if (element.id === "msHundreds") {
      element.textContent = msHundreds;
    } else if (element.id === "secondOnes") {
      element.textContent = secondOnes;
    } else if (element.id === "secondTens") {
      element.textContent = secondTens;
    }
  });
}

const startButton = document.querySelector("#startButton");
startButton.addEventListener("click", function(){
  return timer();
});
const stopButton = document.querySelector("#stopButton");
stopButton.addEventListener("click", function(){
  return timer(true);
});
const resetButton = document.querySelector("#resetButton");
resetButton.addEventListener("click", resetTimer);
