const GameBoard = require('./gameBoard');

test('2D board works', () => {
  const testBoard = new GameBoard('test');
  testBoard.board[3][5] = 'hello world';
  expect(testBoard.board[3][5]).toEqual('hello world');
});

test('places ship in correct area', () => {
  const newBoard = new GameBoard('newBoard');
  newBoard.placeShip([2], [4], 'submarine');
  expect(newBoard.board[2][4]).toBe('submarine');
});

test('recieves attacks', () => {
    const newBoard = new GameBoard('test')
    let newShip = new Ship('testShip', 3);
})
