var playerTurn = true;
var computerMoveTimeout = 0;

// Returns an array of 9 <td> elements that make up the game board. The first 3 
// elements are the top row, the next 3 the middle row, and the last 3 the 
// bottom row. 
function getGameBoard() {
    var gameBoardTable = document.getElementById("gameBoard");
    var result = [];
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            result.push(gameBoardTable.rows[i].cells[j]);
        }
    }
    return result;
}

function start() {
    // Setup the click event for the "New game" button
    var newBtn = document.getElementById("newGameButton");
    newBtn.addEventListener("click", newGame);

    // Create click-event listeners for each cell in the game board
    var cells = getGameBoard();
    for (let cell of cells) {
        cell.addEventListener("click", function() { cellClicked(cell); });
    }

    // Call the newGame function to make sure the board is clear
    newGame();
}

function newGame() {
    clearTimeout(computerMoveTimeout); 
    computerMoveTimeout = 0;
    var gameBoardTable = document.getElementById("gameBoard");
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            gameBoardTable.rows[i].cells[j].innerHTML = "&nbsp;"; 
        }
    }
    playerTurn = true; 
    document.getElementById("turnInfo").innerHTML = "Your turn";
}

function cellClicked(cell) {
    if(playerTurn == true && cell.innerHTML == "&nbsp;"){
        cell.innerHTML = "X"; 
        cell.style.setProperty("color", "red"); 
        playerTurn = false;
        switchTurn();
    }
}

function switchTurn() {
    var xOCount = 0;
    var gameBoardTable = document.getElementById("gameBoard"); 
    if((gameBoardTable.rows[0].cells[0].innerHTML == "X" && 							   
    gameBoardTable.rows[0].cells[1].innerHTML == "X" &&
   gameBoardTable.rows[0].cells[2].innerHTML == "X") ||
   (gameBoardTable.rows[1].cells[0].innerHTML == "X" && 							   
    gameBoardTable.rows[1].cells[1].innerHTML == "X" &&
   gameBoardTable.rows[1].cells[2].innerHTML == "X") ||
   (gameBoardTable.rows[2].cells[0].innerHTML == "X" && 							   
    gameBoardTable.rows[2].cells[1].innerHTML == "X" &&
   gameBoardTable.rows[2].cells[2].innerHTML == "X") ||
   (gameBoardTable.rows[0].cells[0].innerHTML == "X" && 							   
    gameBoardTable.rows[1].cells[0].innerHTML == "X" &&
   gameBoardTable.rows[2].cells[0].innerHTML == "X") ||
   (gameBoardTable.rows[0].cells[1].innerHTML == "X" && 							   
    gameBoardTable.rows[1].cells[1].innerHTML == "X" &&
   gameBoardTable.rows[2].cells[1].innerHTML == "X") ||
   (gameBoardTable.rows[0].cells[2].innerHTML == "X" && 							   
    gameBoardTable.rows[1].cells[2].innerHTML == "X" &&
   gameBoardTable.rows[2].cells[2].innerHTML == "X") ||
   (gameBoardTable.rows[0].cells[0].innerHTML == "X" && 							   
    gameBoardTable.rows[1].cells[1].innerHTML == "X" &&
   gameBoardTable.rows[2].cells[2].innerHTML == "X") ||
   (gameBoardTable.rows[0].cells[2].innerHTML == "X" && 							   
    gameBoardTable.rows[1].cells[1].innerHTML == "X" &&
    gameBoardTable.rows[2].cells[0].innerHTML == "X")){
        document.getElementById("turnInfo").innerHTML = "You win!";
        playerTurn =false;
        return;
    }

    if((gameBoardTable.rows[0].cells[0].innerHTML == "O" && 							   
        gameBoardTable.rows[0].cells[1].innerHTML == "O" &&
       gameBoardTable.rows[0].cells[2].innerHTML == "O") ||
       (gameBoardTable.rows[1].cells[0].innerHTML == "O" && 							   
        gameBoardTable.rows[1].cells[1].innerHTML == "O" &&
       gameBoardTable.rows[1].cells[2].innerHTML == "O") ||
       (gameBoardTable.rows[2].cells[0].innerHTML == "O" && 							   
        gameBoardTable.rows[2].cells[1].innerHTML == "O" &&
        gameBoardTable.rows[2].cells[2].innerHTML == "O") ||
        (gameBoardTable.rows[0].cells[0].innerHTML == "O" && 							   
        gameBoardTable.rows[1].cells[0].innerHTML == "O" &&
        gameBoardTable.rows[2].cells[0].innerHTML == "O") ||
        (gameBoardTable.rows[0].cells[1].innerHTML == "O" && 							   
        gameBoardTable.rows[1].cells[1].innerHTML == "O" &&
        gameBoardTable.rows[2].cells[1].innerHTML == "O") ||
        (gameBoardTable.rows[0].cells[2].innerHTML == "O" && 							   
        gameBoardTable.rows[1].cells[2].innerHTML == "O" &&
        gameBoardTable.rows[2].cells[2].innerHTML == "O") ||
        (gameBoardTable.rows[0].cells[0].innerHTML == "O" && 							   
        gameBoardTable.rows[1].cells[1].innerHTML == "O" &&
        gameBoardTable.rows[2].cells[2].innerHTML == "O") ||
        (gameBoardTable.rows[0].cells[2].innerHTML == "O" && 							   
        gameBoardTable.rows[1].cells[1].innerHTML == "O" &&
        gameBoardTable.rows[2].cells[0].innerHTML == "O")){
        document.getElementById("turnInfo").innerHTML = "Computer wins!";
        playerTurn =false;
        return;
       }
    
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if(gameBoardTable.rows[i].cells[j].innerHTML == "X" || gameBoardTable.rows[i].cells[j].innerHTML == "O"){
                xOCount++;
            }
        }
    }
    if(xOCount == 9){
        document.getElementById("turnInfo").innerHTML = "Draw game";
        playerTurn =false;
        return;
    }
    
       
    if(playerTurn == false){
        document.getElementById("turnInfo").innerHTML = "Computer's turn";
        computerMoveTimeout = setTimeout(makeComputerMove, 1000);  
    } 
    if(playerTurn == true){
        document.getElementById("turnInfo").innerHTML = "Your turn";
    }
}

function makeComputerMove() {
    var gameBoardTable = document.getElementById("gameBoard");
    var rand1; 
    var rand2;
    var moveMade = true;
    while(moveMade){
        rand1 = Math.floor(Math.random() * 3); 
        rand2 = Math.floor(Math.random() * 3);
        if(gameBoardTable.rows[rand1].cells[rand2].innerHTML == "&nbsp;"){
            gameBoardTable.rows[rand1].cells[rand2].innerHTML = "O";
            gameBoardTable.rows[rand1].cells[rand2].style.setProperty("color", "blue");
            moveMade = false;
            playerTurn = true;
            switchTurn();
        }
    }
} 

