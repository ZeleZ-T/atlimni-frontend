import MessageDto from "../../websocket/message.dto.js";
import ForeignCharacters from "../foreign.character.js";
import Character from "../character.js";
import connection from "../../websocket/connection.js";
import localCharacter from "../local.character.js";
function foreignCharacterAdd(dto) {
    if (dto.data.name !== undefined && dto.data.x !== undefined && dto.data.y !== undefined) {
        if (!ForeignCharacters.has(dto.data.name)) {
            const character = new Character(dto.data.x, dto.data.y, dto.data.name);
            ForeignCharacters.set(dto.data.name, character);
            connection.getInstance().send(new MessageDto('character', 'foreignCharacterAdd', {
                x: localCharacter.parent.offsetWidth,
                y: localCharacter.parent.offsetHeight,
                name: localCharacter.name
            }));
        }
    }
}
export default foreignCharacterAdd;
