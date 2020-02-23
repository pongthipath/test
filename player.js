// GameSession.js
const shortid = require('shortid');
'use strict';

class Player {
    constructor(playerName) {
        this.playerName = playerName;
        this.playerID = shortid.generate();
    }

    ChangeSessionName(newPlayerName) {
        this.playerName = newPlayerName;
        return newPlayerName;
    }

    ChangeSessionID (newPlayerID) {
        this.playerID = newPlayerID;
        return newPlayerID;
    }

    ToJSON() {
        let jsonStr = {
            'playerName': this.playerName,
            'playerID' : this.playerID
        }
        return jsonStr;
    }
}


module.exports = Player;