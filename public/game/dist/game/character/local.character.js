import Character from "./character.js";
const localCharacter = new Character(0, 0, localStorage.getItem('username') ||
    'Player' + Math.floor(Math.random() * 1000));
window.addEventListener('keydown', localCharacter.movement.keyDownEvent.bind(localCharacter.movement));
window.addEventListener('keyup', localCharacter.movement.keyUpEvent.bind(localCharacter.movement));
export default localCharacter;
