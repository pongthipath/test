// GameSession.js
const shortid = require('shortid');
// const Player = require('./player');
'use strict';

class GameSession {
    constructor(sessionName, playerID, playerName) {
        this.sessionName = sessionName;
        this.sessionID = shortid.generate();
        // this.playerID = playerID;
        // this.playerName = playerName;
    }

    ChangeSessionName(newSessionName) {
        this.sessionName = newSessionName;
        return newSessionName;
    }

    ChangeSessionID (newSessionID) {
        this.sessionID = newSessionID;
        return newSessionID;
    }

    ToJSON() {
        let jsonStr = {
            'sessionName' : this.sessionName,
            'sessionID' : this.sessionID,
            'playerData' : {
                
            }
        }
        return jsonStr;
    }
}


module.exports = GameSession;