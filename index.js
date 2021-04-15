// let tablica = []
// let tablica2 = ["ok", "spoko", "styczen"]
let btnTab =  document.getElementsByClassName("paper")
let btn1 = btnTab[0]
// console.log(btn1)

btn1.addEventListener("click", kliknieto_przycisk)

let btnTab2 = document.getElementsByClassName("rock")
let btn2 = btnTab2[0]
// console.log(btn2)

btn2.addEventListener("click", kliknieto_przycisk)

let btnTab3 = document.getElementsByClassName("scissors")
let btn3 = btnTab3[0]
// console.log(btn3)

btn3.addEventListener("click", kliknieto_przycisk)

function kliknieto_przycisk(){
 	let player = this.innerText.toLowerCase()
	let tab = ["paper", "rock", "scissors"]
	let randomNumber = Math.floor(Math.random() * 3)
	let computer = tab[randomNumber]
	if(player == "paper"){
		document.getElementsByClassName("tableimage")[0].setAttribute("src", "paper.jpg")
		if(computer == "paper"){
			console.log(player, " ", computer, " tie")
			document.getElementsByClassName("tableimage")[1].setAttribute("src", "paper.jpg")
		}
		else if(computer == "rock"){
			console.log(player, " ", computer, " you win")
			document.getElementsByClassName("tableimage")[1].setAttribute("src", "rock.jpg")
			let previous = parseInt(document.getElementsByClassName("thpadding")[2].innerText)
			let current = previous + 1
			document.getElementsByClassName("thpadding")[2].innerText = current
		}
		else{
			console.log(player, " ", computer, " You lose")
			document.getElementsByClassName("tableimage")[1].setAttribute("src", "scissors.jpg")
			let previous = parseInt(document.getElementsByClassName("thpadding")[3].innerText)
			let current = previous + 1
			document.getElementsByClassName("thpadding")[3].innerText = current
		}
	}
	else if(player == "rock"){
		document.getElementsByClassName("tableimage")[0].setAttribute("src", "rock.jpg")
		if(computer == "paper"){
			document.getElementsByClassName("tableimage")[1].setAttribute("src", "paper.jpg")
			console.log(player, " ", computer, " You lose")
			let previous = parseInt(document.getElementsByClassName("thpadding")[3].innerText)
			let current = previous + 1
			document.getElementsByClassName("thpadding")[3].innerText = current
		}
		else if(computer == "rock"){
			document.getElementsByClassName("tableimage")[1].setAttribute("src", "rock.jpg")
			console.log(player, " ", computer, " tie")
		}
		else{
			document.getElementsByClassName("tableimage")[1].setAttribute("src", "scissors.jpg")
			console.log(player, " ", computer, " you win")
			let previous = parseInt(document.getElementsByClassName("thpadding")[2].innerText)
			let current = previous + 1
			document.getElementsByClassName("thpadding")[2].innerText = current
		}
	}
	else if(player == "scissors"){
		document.getElementsByClassName("tableimage")[0].setAttribute("src", "scissors.jpg")
		if(computer == "paper"){
			document.getElementsByClassName("tableimage")[1].setAttribute("src", "paper.jpg")
			console.log(player, " ", computer, " you win")
			let previous = parseInt(document.getElementsByClassName("thpadding")[2].innerText)
			let current = previous + 1
			document.getElementsByClassName("thpadding")[2].innerText = current
		}
		else if(computer == "rock"){
			document.getElementsByClassName("tableimage")[1].setAttribute("src", "rock.jpg")
			console.log(player, " ", computer, " You lose")
			let previous = parseInt(document.getElementsByClassName("thpadding")[3].innerText)
			let current = previous + 1
			document.getElementsByClassName("thpadding")[3].innerText = current
		}
		else{
			document.getElementsByClassName("tableimage")[1].setAttribute("src", "scissors.jpg")
			console.log(player, " ", computer, " tie")
		}
	}
	let playerScore = parseInt(document.getElementsByClassName("thpadding")[2].innerText)
	if(playerScore > 2){
		document.getElementById("winner").innerText = "You are the winner"
		let allButtons = document.getElementsByTagName("button")
		
	}

	let computerScore = parseInt(document.getElementsByClassName("thpadding")[3].innerText)
	if(computerScore > 2){
		document.getElementById("winner").innerText = "Pc is the winner"
		this.removeEventListener("click",kliknieto_przycisk)
	}
}
// let main = {}

// let variable1 = "ok"
// let variable2 = "spoko"
// let f1 = function(){
// 	console.log("spoko")
// }

// main.variable1 = variable1
// main.variable2 = variable2
// main.f1 = f1

// console.log(main.variable1)
// console.log(main.variable2)
// main.f1()