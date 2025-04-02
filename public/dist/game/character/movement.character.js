import CharacterState from "./vo/state.vo.js";
import Direction from "./vo/direction.vo.js";
import connection from "../websocket/connection.js";
import MessageDto from "../websocket/message.dto.js";
import localCharacter from "./local.character.js";
import Keys from "./vo/keys.vo.js";
class MovementCharacter {
    constructor(character) {
        this.character = character;
        this.keysLast = new Keys(Date.now());
        this.keys = new Keys(false);
        this.characterState = new CharacterState(8, 'Idle2', true);
        setInterval(this.move.bind(this), 10);
        setInterval(this.updateCharacterState.bind(this), 9);
    }
    keyDownEvent(event) {
        if ('wasd'.includes(event.key)) {
            this.keys.set(event.key, true);
            if (this.character.name === localCharacter.name) {
                connection.getInstance().send(new MessageDto('character', 'foreignCharacterKeydown', {
                    name: this.character.name,
                    event: { key: event.key }
                }));
            }
        }
    }
    keyUpEvent(event) {
        if ('wasd'.includes(event.key)) {
            this.keysLast.set(event.key, Date.now());
            this.keys.set(event.key, false);
            if (this.character.name === localCharacter.name) {
                connection.getInstance().send(new MessageDto('character', 'foreignCharacterKeyup', {
                    name: this.character.name,
                    event: { key: event.key }
                }));
            }
        }
        if (!this.keys.w && !this.keys.a && !this.keys.s && !this.keys.d) {
            this.characterState.state = `Idle2`;
            this.lastKeysLookMargin();
            this.characterState.stateUpdate = true;
        }
    }
    move() {
        const step = 1;
        const rect = this.character.parent.getBoundingClientRect();
        const top = rect.top;
        const left = rect.left;
        const dir = this.calculateDir(this.keys);
        this.character.parent.style.left = (left + step * dir.Move.x) + 'px';
        this.character.parent.style.top = (top + step * dir.Move.y) + 'px';
        this.character.parent.style.zIndex = Math.round((top + step * dir.Move.y) * 1000) + '';
        if ((dir.Move.x !== 0 || dir.Move.y !== 0) && (this.characterState.state !== `Walk` || this.characterState.lookDir !== dir.Look)) {
            this.characterState.lookDir = dir.Look;
            this.characterState.state = `Walk`;
            this.characterState.stateUpdate = true;
        }
    }
    calculateDir(keys) {
        let moveDir = { x: 0, y: 0 };
        if (keys.a && !keys.d)
            moveDir.x = -1;
        else if (keys.d && !keys.a)
            moveDir.x = 1;
        else
            moveDir.x = 0;
        if (keys.w && !keys.s)
            moveDir.y = -1;
        else if (keys.s && !keys.w)
            moveDir.y = 1;
        else
            moveDir.y = 0;
        const lookDirMap = (str) => {
            switch (str) {
                case '0,1': return 8;
                case '1,1': return 7;
                case '1,0': return 6;
                case '1,-1': return 5;
                case '0,-1': return 4;
                case '-1,-1': return 3;
                case '-1,0': return 2;
                case '-1,1': return 1;
            }
        };
        const lookDir = lookDirMap(moveDir.x + ',' + moveDir.y) || -1;
        return new Direction(moveDir, lookDir);
    }
    lastKeysLookMargin() {
        const keysArray = this.keysLast.entries();
        keysArray.sort((a, b) => +b[1] - +a[1]);
        const mostRecentKey = keysArray[0];
        const secondMostRecentKey = keysArray[1];
        const withinMargin = (+mostRecentKey[1] - +secondMostRecentKey[1]) <= 100;
        if (withinMargin) {
            const tempKeys = new Keys(false);
            tempKeys.set(mostRecentKey[0], true);
            tempKeys.set(secondMostRecentKey[0], true);
            this.characterState.lookDir = this.calculateDir(tempKeys).Look;
        }
    }
    updateCharacterState() {
        if (this.characterState.stateUpdate && this.characterState.lookDir !== -1) {
            this.character.image.src =
                "assets/knight/" + this.characterState.state +
                    "/Knight_" + this.characterState.state +
                    "_dir" + this.characterState.lookDir + ".gif";
            this.characterState.stateUpdate = false;
        }
    }
}
export default MovementCharacter;
