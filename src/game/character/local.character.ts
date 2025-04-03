import Character from "./character.js";

const localCharacter = new Character(
    0,
    0,
    Math.random().toString(36).substring(7)
    );

window.addEventListener('keydown', localCharacter.movement.keyDownEvent.bind(localCharacter.movement));
window.addEventListener('keyup', localCharacter.movement.keyUpEvent.bind(localCharacter.movement));

export default localCharacter