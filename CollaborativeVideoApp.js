
var UserQuestion;
var Answer1;
var Answer2;
var state = 1;

function countWords(str) {
  var words = str.trim().split(/\s+/).length;
  return words; 
}


function myFunction() {
    if (state === 1) {
        UserQuestion = document.getElementById("textArea").value;
        var numWords = countWords(UserQuestion);
      
        if (UserQuestion.length < 10) {
            alert("Questions must be at least 10 characters long");
        } else if (numWords < 4) {
            alert("Questions must be at least 4 words long");
        } else {
            document.getElementById("textArea").value = "";
            document.getElementById("textArea").placeholder = "Write answer";
            document.getElementById("prompt").innerHTML = "Answer?";
            state = state + 1;
        }
    }
    else if (state === 2) {
        Answer1 = document.getElementById("textArea").value;
        document.getElementById("textArea").value = "";
        document.getElementById("textArea").placeholder = "Write elaborated answer";
        document.getElementById("prompt").innerHTML = "Elaborated answer?";
        state = state + 1;
    }
    else if (state === 3) {
        Answer2 = document.getElementById("textArea").value;
        document.getElementById("prompt").value = "Elaborated answer?";

    }
}


