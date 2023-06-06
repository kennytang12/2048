const BOARD_SIZE = 4

let board = []

function initializeBoard(){
    for(let i = 0; i < 4; i++){
        let row = []
        for(let j = 0; j < 4; j++){
            row.push(0)
        }
        board.push(row)
    }
}

function printBoard() {
    board.forEach((row) => {
        console.log(row.join(" "))
    })
}

function main(){
    initializeBoard()
    printBoard()
}

main()