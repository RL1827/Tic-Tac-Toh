const gameboard = (() =>{
    let player1 = "Player 1"
    let player2 = "Player 1"
    let board = [[0,0,0],[0,0,0],[0,0,0]]

    const add(name, position){
        let positioning = position.split()
        let row = positioning[0]
        let column = positioning[1]
        if (name == this.player1 && this.board[row][column] == 0){
            this.board[row][column] = 1
        } else if (name == this.player2 && this.board[row][column] == 0){
            this.board[row][column] = 2
        } else{
            return false;
        }
    }
})