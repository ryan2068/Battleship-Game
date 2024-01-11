class ship {
    constructor(length, name) {
        this.name = name
        this.length = length
        this.health = length
        this.isSunk = false
    }

    hit() {
        this.health -= 1
        this.checkSunk()


    }

    checkHealth() {
        return this.health
    }

    checkSunk() {
        if (this.health <= 0) {
            this.isSunk = true
        }
        else {
            this.isSunk = false
        }
    }

    partialHit() {
        if (this.health > 0 && this.health < this.length) {
            return true
        }
        else {
            return false
        }
    }
}

module.exports = ship