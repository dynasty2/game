const box2 = document.querySelector("#box2")
const box3 = document.querySelector("#box3")
const box4 = document.querySelector("#box4")
const box5 = document.querySelector("#box5")
const startB = document.querySelector("#box8")
const submitB = document.querySelector("#box9")
const nextB = document.querySelector("#box10")

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
		startB.removeEventListener("click", arguments.callee);
})

// startB.removeEventListener("click", function(evt) {
// 			evt.preventDefault();
// 		});

submitB.addEventListener("click", function(evt) {
		evt.preventDefault();
		console.log(evt);
		console.log("You clicked Submit.") //need to figure out how to grade answers
		whatHappened()


		// if (wrong) {
		// 	console.log("Wrong answer. Better luck next time.")
		// } else { 
		// 	console.log("Correct!")
		// }
})

nextB.addEventListener("click", function(evt) {
		evt.preventDefault();
		console.log(evt);
		console.log("You clicked Next.")
		box2.style.background = "white";
		box3.style.background = "white";
		box4.style.background = "white";
		box5.style.background = "white";
		next()

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
let round = 0;

//These are the functions that allow the questions and corresponding answers to show once the 'start' button is pressed.
//I have them seperated, but need to find a way to cycle throughout.
// Can I keep them in an array like this? And access them one at a time?
// Ideally Start just starts and submit will just show the score.  
// Should I make a 'next' button?

function startRound() { 
	questionContent.innerText = questions[round];
	option1.innerText = answers[round][0];
	option2.innerText = answers[round][1];
	option3.innerText = answers[round][2];
	option4.innerText = answers[round][3];
	round++;
	// option1 = true;
	// option2 = false;
	// option3 = false;
	// option4 = false;	
}
		
function next() {
	questionContent.innerText = questions[round];
	option1.innerText = answers[round][0];
	option2.innerText = answers[round][1];
	option3.innerText = answers[round][2];
	option4.innerText = answers[round][3];
	round++;
	// option1 = true;
	// option2 = false;
	// option3 = false;
	// option4 = false;	
}

const update  = document.querySelector(".update");
const score = document.querySelector(".score")

function whatHappened() {
	update.innerText = "Wrong or Correct!"
	score.innerText = "Points!"
}

// function whatHappened() {
// 	update.innerText = "Wrong or Correct!"
// 	score.innerText = "Points!"
// }
