let turn = 'O';
let total_turn = 0;
const winner = [
    [0,1,2], [3,4,5], [6,7,8], // rows
    [0,3,6], [1,4,7], [2,5,8], // columns
    [0,4,8], [2,4,6]           // diagonals
];

let board_array = new Array(9).fill("E");

function checkWinner() {
    for (let [i0, i1, i2] of winner) {
        if (
            board_array[i0] !== "E" &&
            board_array[i0] === board_array[i1] &&
            board_array[i1] === board_array[i2]
        ) {
            return true;
        }
    }
    return false;
}

const board = document.querySelector('.board');

function printer(event) {
    const element = event.target;

    // only act on cells
    if (!element.classList.contains("cell")) return;

    if (board_array[element.id] === "E") {
        total_turn++;
        if (turn === 'O') {
            element.innerHTML = "O";
            board_array[element.id] = "O";
            if (checkWinner()) {
                document.getElementById('winningMessage').innerHTML = "Winner is O";
                board.removeEventListener('click', printer);
                return;
            }
            turn = "X";
        } else {
            element.innerHTML = "X";
            board_array[element.id] = "X";
            if (checkWinner()) {
                document.getElementById('winningMessage').innerHTML = "Winner is X";
                board.removeEventListener('click', printer);
                return;
            }
            turn = "O";
        }

        // Check for draw
        if (total_turn === 9) {
            document.getElementById('winningMessage').innerHTML = "Match is Draw";
            board.removeEventListener('click', printer);
        }
    }
}

board.addEventListener('click', printer);

// reset match
const Restart = document.getElementById("restartButton");
Restart.addEventListener('click', () => {
    // clear board UI
    const cells = document.getElementsByClassName('cell');
    Array.from(cells).forEach((cell) => {
        cell.innerHTML = "";
    });

    turn = "O";
    total_turn = 0;
    board_array = new Array(9).fill("E");
    document.getElementById('winningMessage').innerHTML = "";
    board.addEventListener("click", printer);
});
