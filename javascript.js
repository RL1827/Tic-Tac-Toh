const gameboard = (() =>{
    let player1 = "Player 1"
    let player2 = "Player 2"
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

    function checkRow = (Playername, number) => {
        let check = 0 
        let counter = 0
        let row = false
        let checklist = []
        let wincounter = 0
        if (Playername == player1){
            check = 1
            counter = 2
        } else if (Playername == player2){
            check = 2
            counter = 1
        } else{
            console.log("Unknown Player")
        }

        for (let i = 0; i < 3; i++){
            if (board[number][i] == check){
                wincounter += 1
            }

            if (wincounter == 3){
                return true
            }
            checkList.push(board[number][i])
        }
        if (wincounter == 3){
            return true
        }

        if (checkList.includes(check) && checkList.includes(counter)){
            return 3
        }
        return false
    }
})