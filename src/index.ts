import localCharacter from "./game/character/local.character.js";
import connection from "./game/websocket/connection.js";

declare global {
    interface Window {
        env: {
            GAME_SERVICE: string;
        };
    }
}

const local = localCharacter;

const gameService = window.env.GAME_SERVICE;
connection.init(gameService);
console.log("Using API URL:", gameService);
