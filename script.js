let seconds = 0;
let intervalid = null;

const startTimer = document.getElementById("startTimer");
const stopTimer = document.getElementById("stopTimer");
const resetTimer = document.getElementById("resetTimer");
const timerDisplay = document.getElementById("timerDisplay");

startTimer.addEventListener("click", function() {
    if (intervalid === null) {
        intervalid = setInterval(function() {
            seconds++;
            timerdisplay.textContent = seconds + " seconds";
        }, 1000);}

});

stopTimer.addEventListener("click", function() {
    if (intervalid !== null) {
        clearInterval(intervalid);
        timeinv = null;
    }
});

resetTimer.addEventListener("click", function() {    
    clearInterval(intervalid);
    seconds = 0;
    timerDisplay.textContent = "0 seconds";
});


