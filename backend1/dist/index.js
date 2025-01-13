"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const GameManger_1 = require("./GameManger");
const wss = new ws_1.WebSocketServer({ port: 8080 });
const gameManager = new GameManger_1.GameManger();
wss.on('connection', function connection(ws) {
    gameManager.addUser(ws);
    ws.on("disconnect", () => gameManager.removeUser(ws));
});
