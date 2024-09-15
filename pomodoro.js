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



// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}


