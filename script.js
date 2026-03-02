let seconds = 0;
let timeinv = null;

const starttimer = document.getElementById("startTimer");
const stoptimer = document.getElementById("stopTimer");
const resettimer = document.getElementById("resetTimer");
const timerdisplay = document.getElementById("timerDisplay");

starttimer.addEventListener("click", function() {
    if (timeinv === null) {
        timeinv = setInterval(function() {
            seconds++;
            timerdisplay.textContent = seconds + " seconds";
        }, 1000);}

});

stoptimer.addEventListener("click", function() {
    if (timeinv !== null) {
        clearInterval(timeinv);
        timeinv = null;
    }
});

resettimer.addEventListener("click", function() {    
    clearInterval(timeinv);
    seconds = 0;
    timerdisplay.textContent = "0 seconds";
});




