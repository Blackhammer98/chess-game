

import { WebSocketServer } from 'ws';
import { GameManger } from './GameManger';

const wss = new WebSocketServer({ port: 8080 });

const gameManager = new GameManger();

wss.on('connection', function connection(ws) {
 
    gameManager.addUser(ws)

  ws.on("disconnect",() => gameManager.removeUser(ws))
});