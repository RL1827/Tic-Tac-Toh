const gameboard = (() =>{
    let player1 = "Player 1"
    let player2 = "Player 2"
    let current = player1
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

    function checkColumn(Playername, number){
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
            if (board[i][number] == check){
                wincounter += 1
            }

            if (wincounter == 3){
                return true
            }
            checkList.push(board[i][number])
        }
        if (wincounter == 3){
            return true
        }

        if (checkList.includes(check) && checkList.includes(counter)){
            return 3
        }
        return false
    }

    function checkFirstDiagonal(Playername){
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

        for (let i = 0, j = 2; i < 3, j >= 0; i++, j--){
            if (board[i][j] == check){
                wincounter += 1
            }

            if (wincounter == 3){
                return true
            }
            checkList.push(board[i][j])
        }

        if (wincounter == 3){
                return true
        }

        if (checkList.includes(check) && checkList.includes(counter)){
            return 3
        }
        return false
    }
    
    function switchTurn(current){
        if (current == player1){
            current == player2
        } else{
            current == player1
        }
        let switching = document.querySelector(".turn")
        switching.textContent= `Current Turn: ${current}`
    }

    let listening = document.querySelector(".box")
    listening.addEventListener("click", ()=>{
        recordCounter = 0
        if current == player1{
            recordCounter = 1
        } else{
            recordCounter = 2
        }
        let elements = event.target.elements
        for (let target of elements){
            switch(target.id){
                case "one":
                    board[0][0] = recordCounter
                    break
                case "two":
                    board[0][1] = recordCounter
                    break
                case "three":
                    board[0][2] = recordCounter
                    break
                case "four":
                    board[1][0] = recordCounter
                    break
                case "five":
                    board[1][1] = recordCounter
                    break
                case "six":
                    board[1][2] = recordCounter
                    break
                case "seven":
                    board[2][0] = recordCounter
                    break
                case "eight":
                    board[2][1] = recordCounter
                    break
                case "nine":
                    board[2][2] = recordCounter
                    break
            }
        }
    })

})