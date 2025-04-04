import ForeignCharacters from "../foreign.character.js";
function foreignCharacterRemove(dto) {
    if (dto.data.name) {
        const character = ForeignCharacters.get(dto.data.name);
        if (character) {
            character.deleteCharacterDiv();
            ForeignCharacters.delete(dto.data.name);
        }
    }
}
export default foreignCharacterRemove;
