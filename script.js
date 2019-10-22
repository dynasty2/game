const box2 = document.querySelector("#box2")
const box3 = document.querySelector("#box3")
const box4 = document.querySelector("#box4")
const box5 = document.querySelector("#box5")
const start = document.querySelector("#box7")
const submit =document.querySelector("#box8")

box2.addEventListener("click", function(evt) {
		evt.preventDefault();
		console.log(evt);
		console.log("You clicked box 2.")
})

box3.addEventListener("click", function(evt) {
		evt.preventDefault();
		console.log(evt);
		console.log("You clicked box 3.")
})

box4.addEventListener("click", function(evt) {
		evt.preventDefault();
		console.log(evt);
		console.log("You clicked box 4.")
})

box5.addEventListener("click", function(evt) {
		evt.preventDefault();
		console.log(evt);
		console.log("You clicked box 5.")
})

box7.addEventListener("click", function(evt) {
		evt.preventDefault();
		console.log(evt);
		console.log("You clicked Start.") //figure out how to change which start function to use

		// startRound() 
		// startRound2()
		// startRound3()
		// startRound4()
		// startRound5()
})

box8.addEventListener("click", function(evt) {
		evt.preventDefault();
		console.log(evt);
		console.log("You clicked box Submit.") //need to figure out how to grade answers
		whatHappened()


		// if (wrong) {
		// 	console.log("Wrong answer. Better luck next time.")
		// } else { 
		// 	console.log("Correct!")
		// }
})

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

//these variables reference the boxes which will show the questions and answers
const questionContent = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const round = 0;

//These are the functions that allow the questions and corresponding answers to show once the 'start' button is pressed.
//I have them seperated, but need to find a way to cycle throughout.
// Can I keep them in an array like this? And access them one at a time?
// Ideally Start just starts and submit will just show the score.  
// Should I make a 'next' button?

const startFunctions = [
function startRound() { 
	[questionContent.innerText = questions[0];
	option1.innerText = answers[0][0];
	option2.innerText = answers[0][1];
	option3.innerText = answers[0][2];
	option4.innerText = answers[0][3];	
},
		
function startRound2() {
	questionContent.innerText = questions[1];
	option1.innerText = answers[1][0];
	option2.innerText = answers[1][1];
	option3.innerText = answers[1][2];
	option4.innerText = answers[1][3];	
},

function startRound3() {
	questionContent.innerText = questions[2];
	option1.innerText = answers[2][0];
	option2.innerText = answers[2][1];
	option3.innerText = answers[2][2];
	option4.innerText = answers[2][3];	
},

function startRound4() {
	questionContent.innerText = questions[3];
	option1.innerText = answers[3][0];
	option2.innerText = answers[3][1];
	option3.innerText = answers[3][2];
	option4.innerText = answers[3][3];	
},

function startRound5() {
	questionContent.innerText = questions[4];
	option1.innerText = answers[4][0];
	option2.innerText = answers[4][1];
	option3.innerText = answers[4][2];
	option4.innerText = answers[4][3];	
}
]


const score  = document.querySelector(".score");

function whatHappened() {
	score.innerText = "(wrong.) or (Correct!). Your score is (points)."
}





