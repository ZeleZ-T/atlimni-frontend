import MessageDto from "../websocket/message.dto.js";
import foreignCharacterAdd from "./handlers/foreignCharacterAdd.handler.js";
import foreignCharacterRemove from "./handlers/foreignCharacterRemove.handler.js";
import ForeignCharacterKeyup from "./handlers/foreignCharacterKeyup.handler.js";
import ForeignCharacterKeydown from "./handlers/foreignCharacterKeydown.handler.js";

const handlers = new Map<string, (dto: MessageDto) => void>(
    [
        ['foreignCharacterAdd', foreignCharacterAdd],
        ['foreignCharacterRemove', foreignCharacterRemove],
        ['foreignCharacterKeydown', ForeignCharacterKeydown],
        ['foreignCharacterKeyup', ForeignCharacterKeyup],
    ]
);

function CharacterHandle(dto: MessageDto) {
    if (dto.type !== undefined) {
        const handler = handlers.get(dto.type);
        if (handler) handler(dto);
    }
}

export default CharacterHandle;