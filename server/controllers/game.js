class Game {
    constructor() {
        this.players = []
    }

    addPlayer(player) {
        const { position, playerId } = player;
        if (typeof playerId !== 'string' || typeof position !== 'object') return;
        this.players.push(player)
        console.log(`player ${playerId} created`)
    }

    removePlayer(playerId) {
        this.players = this.players.filter(p => p.playerId !== playerId)
    }

    getPlayer(playerId) {
        return this.players.find(p => p.playerId === playerId)
    }
}

module.exports = { Game } 