import MessageDto from "../../websocket/message.dto.js";
import ForeignCharacters from "../foreign.character.js";
import Character from "../character.js";

function foreignCharacterAdd(dto: MessageDto) {
    if (dto.data.name !== undefined && dto.data.x !== undefined && dto.data.y !== undefined) {
        if (!ForeignCharacters.has(dto.data.name)) {
            const character = new Character(dto.data.x, dto.data.y, dto.data.name);
            ForeignCharacters.set(dto.data.name, character)
        }
    }
}

export default foreignCharacterAdd