class Player {
    constructor(playerId) {
        this.playerId = playerId;
        this.position = { x: Math.ceil(Math.random() * 400), y: Math.ceil(Math.random() * 400) }
    }
    setXPosition(x) {
        this.position.x = x;
    }
    setYPosition(y) {
        this.position.y = y;
    }
}

module.exports = { Player }