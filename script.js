et timer = 0;
let intervalId = null;

// Start Timer
document.getElementById("startTimer").onclick = function() {

    // Prevent multiple intervals from running
    if (intervalId === null) {
        intervalId = setInterval(function() {
            timer++;
            document.getElementById("timerDisplay").innerHTML = timer;
        }, 1000);
    }
};

// Stop Timer
document.getElementById("stopTimer").onclick = function() {
    clearInterval(intervalId);
    intervalId = null;
};

// Reset Timer
document.getElementById("resetTimer").onclick = function() {
    clearInterval(intervalId);
    intervalId = null;
    timer = 0;
    document.getElementById("timerDisplay").innerHTML = timer;
};


