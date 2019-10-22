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
})

box8.addEventListener("click", function(evt) {
		evt.preventDefault();
		console.log(evt);
		console.log("You clicked box Submit.")
})

const questions = [
["Which professional National Xball League team won the 2015 World Cup?"]
]

const answers = [
["San Diego Dynasty", "Houston Heat", "Moscow Red Legion", "San Antonio X-Factor"]
]

