const gameboard = (() => {
    let player1 = "Player 1";
    let player2 = "Player 2";
    let current = player1;
    const board = [[0,0,0],[0,0,0],[0,0,0]];
    let gameOver = false;

    const turnEl = document.querySelector(".turn");   // ← moved up

    const idToCell = {
        one:   [0,0], two:   [0,1], three: [0,2],
        four:  [1,0], five:  [1,1], six:   [1,2],
        seven: [2,0], eight: [2,1], nine:  [2,2]
    };

    function start(p1Name, p2Name) {
        player1 = p1Name;
        player2 = p2Name;
        current = player1;
        board.forEach(row => row.fill(0));
        gameOver = false;
        render();
        turnEl.textContent = `Current Turn: ${current}`;
    }

    function add(name, row, col) {
        if (board[row][col] !== 0) return false;
        if (name === player1) board[row][col] = 1;
        else if (name === player2) board[row][col] = 2;
        else return false;
        return true;
    }

    const markOf = (name) => (name === player1 ? 1 : 2);

    function checkRow(name, row) { return board[row].every(v => v === markOf(name)); }
    function checkColumn(name, col) { return board.every(r => r[col] === markOf(name)); }
    function checkMainDiagonal(name) {
        const m = markOf(name);
        return board[0][0] === m && board[1][1] === m && board[2][2] === m;
    }
    function checkAntiDiagonal(name) {
        const m = markOf(name);
        return board[0][2] === m && board[1][1] === m && board[2][0] === m;
    }
    function hasWon(name) {
        for (let i = 0; i < 3; i++) {
            if (checkRow(name, i) || checkColumn(name, i)) return true;
        }
        return checkMainDiagonal(name) || checkAntiDiagonal(name);
    }
    function isDraw() {
        return board.every(row => row.every(v => v !== 0));
    }

    function switchTurn() {
        current = current === player1 ? player2 : player1;
        turnEl.textContent = `Current Turn: ${current}`;
    }

    function render() {
        for (const [id, [r, c]] of Object.entries(idToCell)) {
            const cell = document.getElementById(id);
            cell.textContent = board[r][c] === 1 ? "X"
                             : board[r][c] === 2 ? "O"
                             : "";
        }
    }

    document.querySelector(".parent").addEventListener("click", (event) => {
        if (gameOver) return;
        const cell = event.target.closest(".box");
        if (!cell || !idToCell[cell.id]) return;
        const [row, col] = idToCell[cell.id];
        if (!add(current, row, col)) return;
        render();
        if (hasWon(current)) { gameOver = true; turnEl.textContent = `${current} wins!`; return; }
        if (isDraw())        { gameOver = true; turnEl.textContent = "Draw!"; return; }
        switchTurn();
    });

    return { start };   // ← FIX: return an object, not the function
})();

function showScreen(id) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

document.getElementById("start-btn").addEventListener("click", () => {
    const p1 = document.getElementById("p1-name").value.trim() || "Player 1";
    const p2 = document.getElementById("p2-name").value.trim() || "Player 2";
    gameboard.start(p1, p2);
    showScreen("game-screen");
});

document.getElementById("restart-btn").addEventListener("click", () =>{
    showScreen("start-screen");
})