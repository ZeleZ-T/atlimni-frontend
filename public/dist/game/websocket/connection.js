import CharacterHandle from "../character/handler.character.js";
class Connection {
    constructor() {
        this.socket = new WebSocket('ws://' + '192.168.2.8' + '/ws?room=1');
        this.socket.onmessage = this.onMessage;
    }
    static getInstance() {
        if (!Connection.instance) {
            Connection.instance = new Connection();
        }
        return Connection.instance;
    }
    onMessage(event) {
        const dto = JSON.parse(event.data);
        if (dto.handler !== undefined) {
            switch (dto.handler) {
                case 'character':
                    CharacterHandle(dto);
                    break;
            }
        }
    }
    send(data) {
        this.socket.send(JSON.stringify(data));
    }
}
export default Connection;
