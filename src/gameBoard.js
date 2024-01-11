class gameBoard {
    constructor(player) {
        this.player = player
        this.board = []
        for (let i = 0; i < 10, i++) {
            this.board.push(["", "", "", "", "", "", "", "", "", ""]) 
        }
    }
}