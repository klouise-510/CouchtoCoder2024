// Variables to store timer and time values
let timer;
let minutes = 25;
let seconds = 0;

// Function to start or pause the timer
function startTimer() {
    if (!timer) {
        timer = setInterval(updateTimer, 1000);
        document.getElementById("startBtn").innerHTML = "Pause";
    } else {
        clearInterval(timer);
        timer = null;
        document.getElementById("startBtn").innerHTML = "Resume";
    }
}

// Function to reset the timer
function resetTimer() {
    clearInterval(timer);
    timer = null;
    minutes = 25;
    seconds = 0;
    updateTimerDisplay();
    document.getElementById("startBtn").innerHTML = "Start";
}

// Function to update the timer every second
function updateTimer() {
    if (minutes === 0 && seconds === 0) {
        clearInterval(timer);
        timer = null;
        alert("Pomodoro session completed!");
        resetTimer();
    } else {
        if (seconds === 0) {
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }
        updateTimerDisplay();
    }
}

// Function to update the timer display
function updateTimerDisplay() {
    const timerDisplay = document.getElementById("timer");
    timerDisplay.innerHTML = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}
