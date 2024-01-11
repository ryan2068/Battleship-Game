const gameBoard = require('./gameBoard')

test('2D board works', () => {
    let testBoard = new gameBoard('test')
    testBoard.board[3][5] = 'hello world'
    expect(testBoard.board).toEqual('hello world')
})

test('places ship in correct area', () => {
    let newBoard = new gameBoard('newBoard')
    newBoard.placeShip([2][4], 'submarine')
    expect(newBoard.board[2][4]).toBe('submarine')
})