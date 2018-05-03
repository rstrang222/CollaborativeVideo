
var UserQuestion;
var Answer1;
var Answer2;
var state = 1;

function countWords(str) {
  var words = str.trim().split(/\s+/).length;
  return words; 
}


function myFunction() {
    var textArea = document.getElementById("textArea");
    var prompt = document.getElementById("prompt");
    var lastUserInput = document.getElementById("lastUserInput");
    var nextStepButton = document.getElementById("nextStep");
    var UserText = textArea.value;
    var numWords = countWords(UserText);
    var lastChar = UserText.slice(-1);
    
    if (state === 1) {          // the user is asked to write a question

      
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
            prompt.innerHTML = "Next, please write an answer to you question.";
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
            prompt.innerHTML = "Finally, can you elaborate on your answer? (optional)";
            lastUserInput.innerHTML = "your answer: " + Answer1;  
            textArea.value = "";
            textArea.placeholder = "Write your elaborated answer here";
            state = state + 1;          
        }

    }
    else if (state === 3) {     // the user is asked if they want to elaborate on their answer

        Answer2 = textArea.value;
        
        if (Answer2 === "") {
            userQuestion.innerHTML = "your answer: " + Answer1;
        }
        else {
            lastUserInput.innerHTML = "your elaborated answer: " + Answer2; 
        }
        textArea.value = "";
        textArea.placeholder = ""; 
        nextStepButton.innerHTML="Continue watching video";
        state = state+1;
        }
       
    }



