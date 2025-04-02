import MessageDto from "../../websocket/message.dto.js";
import ForeignCharacters from "../foreign.character.js";

function foreignCharacterRemove(dto: MessageDto) {
    if (dto.data.name) {
        const character = ForeignCharacters.get(dto.data.name);
        if (character) {
            character.deleteCharacterDiv();
            ForeignCharacters.delete(dto.data.name);
        }
    }
}

export default foreignCharacterRemove