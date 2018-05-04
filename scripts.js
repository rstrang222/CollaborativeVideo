var TOTAL_VIDEO_LENGTH = 300; // seconds
var QUESTION_START = 10; 
var ANSWER_START = 140; 

var tag = document.createElement('script');
var vidID = "2ouhoxXkmkc"; 
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var UserQuestion;
var Answer1;
var Answer2;
var finalAnswer; 
var state = 1;

var player;
var videoReady = false; 
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '360',
      width: '640',
      videoId: vidID,
      controls: 0,
      modestbranding: 1, 
      events: {
        'onReady': onPlayerReady,
      }
    });
}

function onPlayerReady(event) {
    var playElem = document.getElementById('player');
  
    if (playElem.src.indexOf("&controls=0") === -1) {
//      playElem.src += "&controls=0"; // remove controls
//      playElem.src += "&rel=0"; 
      playElem.style.display="block"; // showPlayer();
    }

    event.target.playVideo();
    videoReady = true; 
}

// P5
function setup() {
    frameRate(60);
}

function draw() {
    if (videoReady) {
        checkPosition();
    }
}

var questionStarted = false; 
var questionFinished = false; 
var answerStarted = false; 
var answerFinished = false; 
function checkPosition() {  
    var currentTime = player.getCurrentTime();
    if (currentTime > QUESTION_START && currentTime < QUESTION_START + 1 && !questionStarted) {
        runQuestion(); 
    } else if (currentTime > ANSWER_START && currentTime < ANSWER_START + 1 && !answerStarted) {
        runAnswer(); 
    } if (questionStarted && !questionFinished && (currentTime>QUESTION_START)) {
      player.seekTo(QUESTION_START); 
      player.pauseVideo();
    }
}

function runQuestion() {
  player.seekTo(QUESTION_START); 
  player.pauseVideo();
  questionStarted = true; 
  document.getElementById("questionBox").style.display = "flex";
}

function endQuestion() {
  questionFinished = true; 
  document.getElementById("questionBox").style.display = "none"; 
  player.playVideo(); 
}

function runAnswer() {
  answerStarted = true;
  console.log("ANSWER"); 
  player.pauseVideo();
}

function countWords(str) {
  var words = str.trim().split(/\s+/).length;
  return words; 
}


function myFunction() {
    var textArea = document.getElementById("textArea");
    var prompt = document.getElementById("prompt");
    var lastUserInput = document.getElementById("lastUserInput");
    var nextStepButton = document.getElementById("nextStep");
    var UserText = textArea.value.trim();
    var numWords = countWords(UserText);
    var lastChar = UserText.slice(-1);
    
    if (state === 1) { // the user is asked to write a question
        if (UserText.length < 10) {
            alert("Questions must be at least 10 characters long");
        } else if (numWords < 4) {
            alert("Questions must be at least 4 words long");
        } else if (lastChar != "?") {
            alert("Questions end with a '?'");
        } else {
            lastUserInput.innerHTML = "your question: " + UserText;
            textArea.value = "";
            textArea.placeholder = "Write your answer here";
            prompt.innerHTML = "Next, please write an answer to your question.";
            state = state + 1;
        }
    }
    else if (state === 2) {     // the user is asked to write an answer to their question
        
        if (UserText.length < 10) {
            alert("Answers must be at least 10 characters long");
        } else if (numWords < 4) {
            alert("Answers must be at least 4 words long");
        } else {
            Answer1 = textArea.value;
            prompt.innerHTML = "Finally, can you add to your answer? (optional)";
            lastUserInput.innerHTML = "your answer: " + Answer1;  
            textArea.value = "";
            textArea.placeholder = "Write your elaborated answer here";
            state = state + 1;          
        }

    } else if (state === 3) {     // the user is asked if they want to elaborate on their answer
        
        Answer2 = textArea.value;
        
        if (Answer2 === "") {
            finalAnswer = Answer1; 
            userQuestion.innerHTML = "your answer: " + finalAnswer;
        } else {
            finalAnswer = Answer1 + " " + Answer2;
            lastUserInput.innerHTML = "your updated answer: " + finalAnswer; 
        }
        textArea.value = "";
        textArea.placeholder = ""; 
        nextStepButton.innerHTML="Continue watching video";
        state = state+1;
    } else if (state === 4) {
        endQuestion(); 
    }
       
}       


//player.seekTo(QUIZ2_CORRECT); 
//player.playVideo();