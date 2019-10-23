const box2 = document.querySelector("#box2")
const box3 = document.querySelector("#box3")
const box4 = document.querySelector("#box4")
const box5 = document.querySelector("#box5")
let answerBox = document.querySelectorAll(".box-for-answers")
const questionContent = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
let round = 0; round < 6; 
const startB = document.querySelector("#box8")
const submitB = document.querySelector("#box9")
const nextB = document.querySelector("#box10")
const update  = document.querySelector(".update");
const score = document.querySelector(".score")
let scoreboard = 0;
let selected;
let correctAnswer;

//Array for questions.
const questions = ["Which professional National Xball League team won the 2015 World Cup?", 
"Which team did Ollie Lang begin his professional career with?", 
"What team was on the cover of the 2009 PlayStation 2 NPPL video game?", 
"In what year did San Diego Dynasty and Edmonton Impact combine their rosters to create the team known as Dynapact?",
"What is the most sold paintball marker of all time?"];

//Array for answers (wrong and right)
const answers = [
["San Diego Dynasty", "Houston Heat", "Moscow Red Legion", "San Antonio X-Factor"],
["Los Angeles IronMen", "San Diego Dynasty", "Philly All-Americans", "Tampa-Bay Damage"],
["San Diego Dynasty", "Sacremento XSV", "Seattle Thunder", "Baltimore Revo"],
["2010", "2013", "2019", "2005"],
["Tippmann 98-Custom", "Planet Eclipse Etek5", "Spyder Fenix", "Empire Axe"]
]

box2.addEventListener("click", function(evt) {
		evt.preventDefault();
		console.log(evt);
		console.log("You clicked box 2.")
		box2.style.background = "tan";
		box3.style.background = "white";
		box4.style.background = "white";
		box5.style.background = "white";
})

box3.addEventListener("click", function(evt) {
		evt.preventDefault();
		console.log(evt);
		console.log("You clicked box 3.")
		box3.style.background = "tan";
		box2.style.background = "white";
		box4.style.background = "white";
		box5.style.background = "white";
})

box4.addEventListener("click", function(evt) {
		evt.preventDefault();
		console.log(evt);
		console.log("You clicked box 4.")
		box4.style.background = "tan";
		box5.style.background = "white";
		box2.style.background = "white";
		box3.style.background = "white";
})

box5.addEventListener("click", function(evt) {
		evt.preventDefault();
		console.log(evt);
		console.log("You clicked box 5.")
		box5.style.background = "tan";
		box2.style.background = "white";
		box3.style.background = "white";
		box4.style.background = "white";
})

startB.addEventListener("click", function(evt) {
		evt.preventDefault();
		console.log(evt);
		console.log("You clicked Start.") //figure out how to change which start function to use
		startRound() 
		startB.style.opacity = 0;
		nextB.style.opacity = 1;
		startB.removeEventListener("click", arguments.callee);
})

function startRound() { 
	questionContent.innerText = questions[round];
	option1.innerText = answers[round][0];
	option2.innerText = answers[round][1];
	option3.innerText = answers[round][2];
	option4.innerText = answers[round][3];
	round++;
	submitB.style.opacity = 1;
	nextB.style.opacity = 1;
}


submitB.addEventListener("click", function(evt) {
		evt.preventDefault();
		console.log(evt);
		console.log("You clicked Submit.") //need to figure out how to grade answers
		// box2.style.background = "white";
		// box3.style.background = "white";
		// box4.style.background = "white";
		// box5.style.background = "white";
		whatHappened()
})

function answer(sel) { //sel?
	console.log("answer() was called.")
 // 	if (round === 1) {
	// 	correctAnswer = answerBox[0]
	// } 
	switch (round) {
		case 1:
			correctAnswer = answerBox[0]
			break;
		case 2: 
			correctAnswer = answerBox[0]
			break;
		case 3:
			correctAnswer = answerBox[0]
			break;
		case 4:
			correctAnswer = answerBox[0]
			break;
		case 5:
			correctAnswer = answerBox[0]
		default:
			alert('round number exceeded question amount')
	}
	// console.log("answer() was called AGAIN.")
	console.log(sel);
	console.log(correctAnswer);
	grade(sel, correctAnswer)
}

function grade(s, cA) {
	console.log("grade() was called.")
	if (s === cA) {
    	update.innerText = ("That's right!")
    	scoreboard++ 
  } else {
    	update.innerText = ("better luck on next one!")
  }
  		box2.style.background = "white"; //checking to see if these work here.
		box3.style.background = "white";
		box4.style.background = "white";
		box5.style.background = "white";
}

nextB.addEventListener("click", function(evt) {
		evt.preventDefault();
		console.log(evt);
		console.log("You clicked Next.")
		next()
		// if (round > 4) {
		// 	nextB.removeEventListener("click", arguments.callee);
		// }
})

function next() { 
  box2.style.background = "white";
  box3.style.background = "white";
  box4.style.background = "white";
  box5.style.background = "white";
	questionContent.innerText = questions[round];
	option1.innerText = answers[round][0];
	option2.innerText = answers[round][1];
	option3.innerText = answers[round][2];
	option4.innerText = answers[round][3]; 
	update.innerText = "";
	round++;
	if (round === 5) {
		end()
	}
}

function end() {
	questionContent.innerText = "Good work. Try again?"
	option1.innerText = "";
	option2.innerText = "";
	option3.innerText = "";
	option4.innerText = "";
	round = 0;
	nextB.style.opacity = 0;
	submitB.style.opacity = 0;
		startB.style.opacity = 1;
		startB.addEventListener("click", function(evt) {
			evt.preventDefault();
			console.log(evt);
			console.log("You clicked Start.") //figure out how to change which start function to use
			startRound() 
			startB.removeEventListener("click", arguments.callee);
			startB.style.opacity = 0;
	})
}

function whatHappened() {
	console.log("whatHappened() was called.")
for (let i = 0; i < answerBox.length; i++) {
	if (answerBox[i].style.background === 'tan') {
		selected = answerBox[i];
		}
	}
	//console.log(selected);
	answer(selected)
}

