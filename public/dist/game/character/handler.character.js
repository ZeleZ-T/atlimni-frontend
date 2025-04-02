import foreignCharacterAdd from "./handlers/foreignCharacterAdd.handler.js";
import foreignCharacterRemove from "./handlers/foreignCharacterRemove.handler.js";
import ForeignCharacterKeyup from "./handlers/foreignCharacterKeyup.handler.js";
import ForeignCharacterKeydown from "./handlers/foreignCharacterKeydown.handler.js";
const handlers = new Map([
    ['foreignCharacterAdd', foreignCharacterAdd],
    ['foreignCharacterRemove', foreignCharacterRemove],
    ['foreignCharacterKeydown', ForeignCharacterKeydown],
    ['foreignCharacterKeyup', ForeignCharacterKeyup],
]);
function CharacterHandle(dto) {
    if (dto.type !== undefined) {
        const handler = handlers.get(dto.type);
        if (handler)
            handler(dto);
    }
}
export default CharacterHandle;
