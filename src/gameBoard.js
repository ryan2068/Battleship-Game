const alertSunkShip = require('./domContent')

class gameBoard {
  constructor(player) {
    this.player = player;
    this.board = [];
    for (let i = 0; i < 10; i += 1) {
      this.board.push(['', '', '', '', '', '', '', '', '', '']);
    }
  }

  placeShip(column, row, ship) {
    this.board[column][row] = ship;
  }

  receiveAttack(column, row) {
    if (this.board[column][row] !== '') {
      this.board[column][row].hit();
      if (this.board[column][row].isSunk === true) {
        alertSunkShip(this.player, this.board[column][row].name);
      }
      this.board[column][row] = 'hit';
    } else {
      this.board[column][row] = 'miss';
    }
  }

  reportMisses() {
    const missLog = [];
    for (let i = 0; i < this.board.length; i += 1) {
      for (let j = 0; j < this.board[i].length; j += 1) {
        if (this.board[i][j] === 'miss') {
          missLog.push((i, j));
        }
      }
    }
    return missLog;
  }

  
  
}
module.exports = gameBoard;
