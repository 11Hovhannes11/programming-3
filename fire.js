let LivingCreature = require('./livingcapture')
let random = require("./random");
module.exports = class Fire extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 16;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character, character1, character2, character3) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }
    mul() {

        var newCell = random(this.chooseCell(1 || 2 || 3 || 4));
        if (newCell) {
            var newFireE = new Fire(newCell[0], newCell[1], this.index);
            fireArr.push(newFireE);
            matrix[newCell[1]][newCell[0]] = 5;
        }
    }
    eat() {
        let foods = this.chooseCell(1, 2, 3, 4)
        let food = random(foods)
        if (food) {
            this.energy++;
            matrix[this.y][this.x] = 0
            let newX = food[0]
            let newY = food[1]
            matrix[newY][newX] = 5
            this.x = newX
            this.y = newY
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }

            for (var j in grassArr) {
                if (newX == grassArr[j].x && newY == grassArr[j].y) {
                    grassArr.splice(j, 1);
                    break;
                }
            }
            for (var t in predatorArr) {
                if (newX == predatorArr[t].x && newY == predatorArr[t].y) {
                    predatorArr.splice(t, 1);
                    break;
                }
            }
            for (var r in hunterArr) {
                if (newX == hunterArr[r].x && newY == hunterArr[r].y) {
                    hunterArr.splice(r, 1);
                    break;
                }
            }
            if (this.energy >= 10) {
                this.mul()
            }
        }
        else {
            this.move()
        }
    }
    move() {
        this.energy--;
        let emptyCells = this.chooseCell(0)
        let newCell = random(emptyCells)
        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[this.y][this.x] = 0
            matrix[newY][newX] = 5
            this.x = newX
            this.y = newY
        }
        if (this.energy <= 0) {
            this.die()
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in fireArr) {
            if (this.x == fireArr[i].x && this.y == fireArr[i].y) {
                fireArr.splice(i, 1);
                break;
            }
        }
    }
}
