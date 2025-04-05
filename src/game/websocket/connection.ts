import MessageDto from "./message.dto.js"
import CharacterHandle from "../character/handler.character.js";
import localCharacter from "../character/local.character.js";

class Connection {
    private static instance: Connection;
    public static gameServiceHost: string;
    socket: WebSocket;

    private constructor() {
        this.socket = new WebSocket('ws://' + Connection.gameServiceHost + '/ws?room=1&user=' + localCharacter.name);
        this.socket.onmessage = this.onMessage;
    }

    static init(gameServiceHost: string) {
        Connection.gameServiceHost = gameServiceHost;
        Connection.instance = new Connection();
    }

    static getInstance() {
        return Connection.instance;
    }

    onMessage(event: MessageEvent) {
        const dto = JSON.parse(event.data) as MessageDto;
        if (dto.handler !== undefined) {
            switch (dto.handler) {
                case 'character':
                    CharacterHandle(dto);
                    break;
            }
        }
    }

    send(data: MessageDto) {
        this.socket.send(JSON.stringify(data));
    }
}

export default Connection;