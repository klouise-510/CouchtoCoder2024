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


function inIframe() {
  try {
      return window.self !== window.top;
  } catch (e) {
      return true;
  }
}

  var colors = [
    '#490A3D',
    '#BD1550',
    '#E97F02',
    '#F8CA00',
    '#8A9B0F',
    '#69D2E7',
    '#FA6900',
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#77B1A9',
    '#73A857'
  ];

var quotes = [
  ["You only live once, but if you do it right, once is enough.","Mae West"],
  ["I am so clever that sometimes I don't understand a single word of what I am saying.","Oscar Wilde"],
  ["Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.","Albert Einstein"],
["The most beautiful experience we can have is the mysterious. It is the fundamental emotion that stands at the cradle of true art and true science.","Albert Einstein"]
["It is our choices, Harry, that show what we truly are, far more than our abilities.","J.K. Rowling, Harry Potter and the Chamber of Secrets"],
["All men who have turned out worth anything have had the chief hand in their own education.","Walter Scott"],
["Trust yourself. You know more than you think you do.","Benjamin Spock"],
["No one can make you feel inferior without your consent.","Eleanor Roosevelt, This is My Story"],
["To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.","Ralph Waldo Emerson"],
["Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.","H. Jackson Brown Jr., P.S. I Love You"]
];


var currentQuote = "";
var currentAuthor = "";
var randomquote = "";
var randomcolor = "";

function getQuote() {
randomquote = Math.floor(Math.random() * quotes.length);
randomcolor = Math.floor(Math.random() * colors.length);
  currentQuote = quotes[randomquote][0];
  currentAuthor = quotes[randomquote][1];
if (inIframe()) {
  $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=aLamm&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
}

$(document).ready(function () {
    $('html body').animate({
        backgroundColor: colors[randomcolor],
        color: colors[randomcolor]
    }, 500);
    $('#newquote, .social-icons .fa-twitter').animate({ backgroundColor: colors[randomcolor] }, 500);
    $('blockquote footer').animate({ color: colors[randomcolor] }, 500);	
    $('blockquote').animate({ borderLeftColor: colors[randomcolor] }, 500);
    $('#quotetext').animate({ opacity: 0 }, 500, function () {
        $(this).animate({ opacity: 1 }, 500);
        $(this).text(currentQuote);
    });
    $('#quotesource').animate({ opacity: 0 }, 500, function () {
        $(this).animate({ opacity: 1 }, 500);
        $(this).text(currentAuthor);
    });
  });    
}

function openURL(url) {
  window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}

getQuote();

$(document).ready(function () {
  $('#newquote').on('click', getQuote);
  $('#tweetquote').on('click', function () {
      if (!inIframe()) {
          openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
      }
  });
});