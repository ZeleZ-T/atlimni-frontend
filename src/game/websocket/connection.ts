import MessageDto from "./message.dto.js"
import CharacterHandle from "../character/handler.character.js";

class Connection {
    private static instance: Connection;
    socket: WebSocket;

    private constructor() {
        this.socket = new WebSocket('ws://' + '192.168.2.8' + '/ws?room=1');
        this.socket.onmessage = this.onMessage;
    }

    static getInstance() {
        if (!Connection.instance) {
            Connection.instance = new Connection();
        }
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