// GameSession.js
const shortid = require('shortid');
// const Player = require('./player');
'use strict';

class GameSession {
    constructor(sessionName) {
        this.sessionName = sessionName;
        this.sessionID = shortid.generate();
        //this.playerID = playerID;
        //this.playerName = playerName;
    }

    ChangeSessionName(newSessionName) {
        this.sessionName = newSessionName;
        console.log(jsonStr);
        return newSessionName;
    }

    ChangeSessionID (newSessionID) {
        this.sessionID = newSessionID;
        return newSessionID;
    }

    ToJSON(data) {
        let jsonStr = {
            'sessionName' : this.sessionName,
            'sessionID' : this.sessionID,
            'playerData':{
                'playerID' : String,
                'playerName' : String
            }
        }
        console.log(jsonStr);
        return jsonStr;
    }
}


module.exports = GameSession;