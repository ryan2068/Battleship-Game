const ship = require('./ship')

test('hit method works correctly', () => {
    let testShip = new ship(3)
    testShip.hit()
    expect(testShip.health).toBe(2)
    expect(testShip.isSunk).toBe(false)
})

test('isSunk method works correctly', () => {
    let testShip = new ship(2)
    testShip.hit()
    testShip.hit()
    expect(testShip.isSunk).toBe(true)
})