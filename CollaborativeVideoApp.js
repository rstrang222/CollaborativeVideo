function getQuestion() {
  var x = document.getElementById("UserQuestion").value;
  console.log(x);
  document.getElementById("Question").style.display = "none";
  document.getElementById("Answer1").style.display = "block";
  
}

function getAnswer() {
  var y = document.getElementById("UserAnswer1").value;
  console.log(y);
  document.getElementById("Answer1").style.display = "none";
  document.getElementById("Answer2").style.display = "block";  
}

function getAnswer2() {
  var z = document.getElementById("UserAnswer2").value;
  console.log(z);

  
    
}
