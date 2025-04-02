import localCharacter from "./game/character/local.character.js";
import connection from "./game/websocket/connection.js";
import MessageDto from "./game/websocket/message.dto.js";
const local = localCharacter;
const socket = connection.getInstance();
socket.socket.onopen = () => {
    socket.send(new MessageDto('character', 'foreignCharacterAdd', {
        x: local.parent.offsetWidth,
        y: local.parent.offsetHeight,
        name: local.name
    }));
};
socket.socket.onclose = () => {
    socket.send(new MessageDto('character', 'foreignCharacterRemove', {
        name: local.name
    }));
};
