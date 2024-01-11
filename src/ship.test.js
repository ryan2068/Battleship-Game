const Ship = require("./ship");

test("hit method works correctly", () => {
  const testShip = new Ship("submarine", 3);
  testShip.hit();
  expect(testShip.health).toBe(2);
  expect(testShip.isSunk).toBe(false);
});

test("isSunk method works correctly", () => {
  const testShip = new Ship("carrier", 2);
  testShip.hit();
  testShip.hit();
  expect(testShip.isSunk).toBe(true);
});
