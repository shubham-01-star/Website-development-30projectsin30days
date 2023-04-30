const screenDisplay = document.querySelector('.screen');

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";

//get all the cells on the game board
let cells = document.querySelectorAll(".cell");

//get the reset button and massage elements
let resetButton = document.querySelector("#reset");

let messageElement = document.querySelector("#message");

//Add event listeners to each cell 
cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
        //check cell if it is already occupied or the game is over 
        if (board[index] === "" && !isGameOver()) {
            board[index] = currentPlayer;
            cell.classList.add(currentPlayer.toLowerCase());
            cell.innerHTML = currentPlayer;

            //Check if the game is over after current move
            if (isGameOver()) {
                screenDisplay.textContent = currentPlayer + " Player has won the game.";
                // messageElement.innerHTML = currentPlayer + "wins!";
                cells.forEach((cell) => cell.removeEventListener("click", handleCellClick));
                
            }
            else if (!board.includes("")) {
            //Update the message if the game is Draw
                cells.forEach((cell) => cell.removeEventListener("click", handleCellClick));
                // messageElement.innerHTML = "It's Draw!";
                screenDisplay.textContent = currentPlayer + " It's Draw!";
            }
            else {
                currentPlayer = currentPlayer === "X" ? "O" : "X";
                // messageElement.innerHTML = currentPlayer + "'s turn";
                screenDisplay.textContent = currentPlayer + " 's turn";
            }
        }

    });
});

resetButton.addEventListener("click", () => {
    board = ["", "", "", "", "", "", "", "", ""];

    currentPlayer = "X";

    cells.forEach((cell) => {
        cell.classList.remove("x", "o");
        cell.innerHTML = "";
    });
    screenDisplay.textContent = "X's turn";
    // messageElement.innerHTML = "X's turn ";
    cells.forEach((cell) => cell.removeEventListener("click", handleCellClick));
})

//check the game status and winner possibilities
function isGameOver() {
    //define the possible winning combinations
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    return winningCombos.some((combo) => {
        return (
            board[combo[0]] !== "" &&
            board[combo[0]] === board[combo[1]] &&
            board[combo[1]] === board[combo[2]]
        );

    });

}

function handleCellClick() {
    console.log("Cell clicked")
}