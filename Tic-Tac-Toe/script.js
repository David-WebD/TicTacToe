// DavidWebD, 26/05/2023.
// Tic Tac Toe Game, 
// ©️2023


// Arr to select all the boxes. 
let boxes = [
  ...document.querySelectorAll(`.box`)
];
let box;
let playerXTurn = true; 

boxes.forEach(box => {
  box.addEventListener("click", () => {

// Determines players turn. 
  if (playerXTurn == true){
    box.textContent = "X";
    playerXTurn = false; 
  } else if(playerXTurn == false){
    box.textContent = "O";
    playerXTurn = true;
  }

  if(box.textContent == "X"){
    box.style.color = "crimson";
  } else if(box.textContent == "O"){
    box.style.color = "blue"; 
  }
    
    game();

// Disables boxes after player selection. 
    box.id = "disabled"
    if(box.id == "disabled"){
    box.disabled = true;
    }

  })
})


// Determines the winning conditions for the TicTacToe. 
function game(){
  if(boxes[0].textContent  == "X" && boxes[1].textContent == "X" && boxes[2].textContent =="X"){
    playerOne.textContent = playerOneScore += 1;
    alert("Player 1 Wins");
  } else if(boxes[3].textContent  == "X" && boxes[4].textContent == "X" && boxes[5].textContent =="X"){
    playerOne.textContent = playerOneScore += 1;
    alert("Player 1 Wins");
  } else if(boxes[6].textContent  == "X" && boxes[7].textContent == "X" && boxes[8].textContent =="X"){
    playerOne.textContent = playerOneScore += 1;
    alert("Player 1 Wins");
  } else if(boxes[0].textContent  == "X" && boxes[3].textContent == "X" && boxes[6].textContent =="X"){
    playerOne.textContent = playerOneScore += 1;
    alert("Player 1 Wins");
  } else if(boxes[1].textContent  == "X" && boxes[4].textContent == "X" && boxes[7].textContent =="X"){
    playerOne.textContent = playerOneScore += 1;
    alert("Player 1 Wins");
  } else if(boxes[2].textContent  == "X" && boxes[5].textContent == "X" && boxes[8].textContent =="X"){
    playerOne.textContent = playerOneScore += 1;
    alert("Player 1 Wins");
  } else if(boxes[0].textContent  == "X" && boxes[4].textContent == "X" && boxes[8].textContent =="X"){
    playerOne.textContent = playerOneScore += 1;
    alert("Player 1 Wins");
  } else if(boxes[2].textContent  == "X" && boxes[4].textContent == "X" && boxes[6].textContent =="X"){
    playerOne.textContent = playerOneScore += 1;
    alert("Player 1 Wins");
  }


  if(boxes[0].textContent  == "O" && boxes[1].textContent == "O" && boxes[2].textContent =="O"){
    playerTwo.textContent = playerTwoScore += 1;
    alert("Player 2 Wins");
  } else if(boxes[3].textContent  == "O" && boxes[4].textContent == "O" && boxes[5].textContent =="O"){
    playerTwo.textContent = playerTwoScore += 1;
    alert("Player 2 Wins");
  } else if(boxes[6].textContent  == "O" && boxes[7].textContent == "O" && boxes[8].textContent =="O"){
    playerTwo.textContent = playerTwoScore += 1;
    alert("Player 2 Wins");
  } else if(boxes[0].textContent  == "O" && boxes[3].textContent == "O" && boxes[6].textContent =="O"){
    playerTwo.textContent = playerTwoScore += 1;
    alert("Player 2 Wins");
  } else if(boxes[1].textContent  == "O" && boxes[4].textContent == "O" && boxes[7].textContent =="O"){
    playerTwo.textContent = playerTwoScore += 1;
    alert("Player 2 Wins");
  } else if(boxes[2].textContent  == "O" && boxes[5].textContent == "O" && boxes[8].textContent =="O"){
    playerTwo.textContent = playerTwoScore += 1;
    alert("Player 2 Wins");
  } else if(boxes[0].textContent  == "O" && boxes[4].textContent == "O" && boxes[8].textContent =="O"){
    playerTwo.textContent = playerTwoScore += 1;
    alert("Player 2 Wins");
  } else if(boxes[2].textContent  == "O" && boxes[4].textContent == "O" && boxes[6].textContent =="o"){
    playerTwo.textContent = playerTwoScore += 1;
    alert("Player 2 Wins");
  }

} 


// Resets Boards
function reset(){
  boxes.forEach(element =>{
    element.removeAttribute("disabled", "");
    element.innerHTML = ""
    element.id = "";
  })
}


// Defualt values for Player Scores. 
let playerOneScore = 0;
let playerTwoScore = 0; 
let playerOne = document.querySelector(".playerOne");
let playerTwo = document.querySelector(".playerTwo");

playerOne.textContent = playerOneScore;
playerTwo.textContent = playerTwoScore; 

