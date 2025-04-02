import MessageDto from "../../websocket/message.dto.js";
import ForeignCharacters from "../foreign.character.js";

function ForeignCharacterKeydown(dto: MessageDto) {
    if (dto.data.name !== undefined && dto.data.event !== undefined) {
        const character = ForeignCharacters.get(dto.data.name);
        if (character) {
            console.log(dto.data.name, " keys after ", character.movement.keys);
            console.log(JSON.stringify(dto.data));
            character.movement.keyDownEvent(dto.data.event);
            console.log(dto.data.name, " keys before ", character.movement.keys);
        }
    }
}

export default ForeignCharacterKeydown