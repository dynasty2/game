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
		console.log("You clicked Start.")
		// startRound()
		// startRound2()
		// startRound3()
		// startRound4()
		startRound5()
})

box8.addEventListener("click", function(evt) {
		evt.preventDefault();
		console.log(evt);
		console.log("You clicked box Submit.")
})

const questions = ["Which professional National Xball League team won the 2015 World Cup?", 
"Which team did Ollie Lang begin his professional career with?", 
"What teamn was on the cover of the 2009 PlayStation 2 NPPL video game?", 
"In what year did San Diego Dynasty and Edmonton Impact combine their rosters to create the team known as Dynapact?",
"What is the most sold paintball marker of all time?"];



const answers = [
["San Diego Dynasty", "Houston Heat", "Moscow Red Legion", "San Antonio X-Factor"],
["Los Angeles IronMen", "San Diego Dynasty", "Philly All-Americans", "Tampa-Bay Damage"],
["San Diego Dynasty", "Sacremento XSV", "Seattle Thunder", "Baltimore Revo"],
["2010", "2013", "2019", "2005"],
["Tippmann 98-Custom", "Planet Eclipse Etek5", "Spyder Fenix", "Empire Axe"]


const questionContent = document.querySelector(".question")
const round = 0;

function startRound() { 
	questionContent.innerText = questions[0]		
}
		
function startRound2() {
	questionContent.innerText = questions[1]
}

function startRound3() {
	questionContent.innerText = questions[2]
}

function startRound4() {
	questionContent.innerText = questions[3]
}

function startRound5() {
	questionContent.innerText = questions[4]
}






