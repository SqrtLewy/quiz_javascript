function complete(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var correctanswer = 0;


	if (question1 == "true") {
		correctanswer++;
}
	if (question2 == "false") {
		correctanswer++;
}	
	if (question3 == "true") {
		correctanswer++;
}	

	var messages = ["Good job!", "Not bad!", "You must work out!"];
	var score;

	if (correctanswer == 0) {
		score = 2;
	}

	if (correctanswer > 0 && correctanswer < 3) {
		score = 1;
	}

	if (correctanswer == 3) {
		score = 0;
	}

	document.getElementById("seeresults").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("score").innerHTML = "Your score: " + correctanswer + ".";
	}
