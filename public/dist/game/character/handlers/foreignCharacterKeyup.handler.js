import ForeignCharacters from "../foreign.character.js";
function ForeignCharacterKeyup(dto) {
    if (dto.data.name !== undefined && dto.data.event !== undefined) {
        const character = ForeignCharacters.get(dto.data.name);
        if (character) {
            character.movement.keyUpEvent(dto.data.event);
        }
    }
}
export default ForeignCharacterKeyup;
