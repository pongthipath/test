// import the game session module ES6
const GameSession = require('./models/gamesession') ;
const Player = require('./models/player') ;
const app = require('express')();

// create some books and get their descriptions
let gameSessions = [];
let players = [];
// console.log("First session - " + gameSessions[0].ToJSON());
// console.log("Second session - " + gameSessions[1].ToJSON());

// var keyword = "Game2";
// let foundSessionIndex = gameSessions.findIndex( (x) => x.sessionName == keyword );
// console.log("Try to find keyword sessionName = " + keyword);
// console.log("Found index at = " + foundSessionIndex);
// // console.log("so data is =" + gameSessions[foundSessionIndex].ToJSON());

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index/index.html');
});

app.get('/creategame/', function(req, res){
    // console.log("New session - " + newgameSessions);
    // console.log("First session - " + gameSessions[0].ToJSON());
        var newgameSessions = new GameSession();
        gameSessions.push(newgameSessions);
        if(gameSessions[0]){
            console.log("First session - " + gameSessions[0].sessionID);
            res.send(gameSessions[0]);
        }
        if(gameSessions){
            console.log("Second session - " + gameSessions[1].sessionID);
            res.send(gameSessions[1]);
        }
        console.log("Have " + gameSessions.length + " session.");
});

app.get('/createplayer/', function(req, res){
    var newPlayer = new Player();
    players.push(newPlayer);
    console.log("This player - " + players[0]);
    console.log("Have " + players.length + " in this session.");
    res.send(players[0]);
    return; 
});

app.get('/gamesession/:sessionID/player/:playerid', function(req, res){

});

app.listen('8080', function(){
    console.log("Server Started!")
});