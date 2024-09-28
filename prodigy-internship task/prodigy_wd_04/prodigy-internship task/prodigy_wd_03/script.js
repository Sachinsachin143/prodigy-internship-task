let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

const cells = document.querySelectorAll('.cell');
const resetBtn = document.getElementById('reset-btn');

cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        if (gameOver || gameBoard[index] !== '') return;
        gameBoard[index] = currentPlayer;
        cell.textContent = currentPlayer;
        checkWin();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    });
});

resetBtn.addEventListener('click', () => {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    cells.forEach((cell) => cell.textContent = '');
    currentPlayer = 'X';
    gameOver = false;
});

function checkWin() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (const condition of winConditions) {
        if (gameBoard[condition[0]] === gameBoard[condition[1]] &&
            gameBoard[condition[1]] === gameBoard[condition[2]] &&
            gameBoard[condition[0]] !== '') {
            gameOver = true;
            alert(`Player ${gameBoard[condition[0]]} wins!`);
            return;
        }
    }
}