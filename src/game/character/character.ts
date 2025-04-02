import MovementCharacter from "./movement.character.js";

class Character {
    movement: MovementCharacter;
    parent: HTMLElement;
    image: HTMLImageElement;
    name: string;

    constructor(x: number, y: number, name: string) {
        this.movement = new MovementCharacter(this);

        this.name = name;
        console.log(this.name);

        this.parent = this.createCharacterDiv();
        this.image = this.parent.lastChild as HTMLImageElement;

        document.body.appendChild(this.parent);

        this.parent.style.left = x + 'px';
        this.parent.style.top = y + 'px';
    }

    createCharacterDiv(): HTMLDivElement {
        const div = document.createElement('div');
        div.className = 'character';

        const h1 = document.createElement('h1');
        h1.className = 'player-name';
        h1.textContent = '| '+ this.name +' |';

        const img = document.createElement('img');
        img.className = 'character-img';
        img.src = 'assets/knight/Idle/Knight_Idle_dir8.gif';
        img.alt = 'Character';

        div.appendChild(h1);
        div.appendChild(img);

        return div;
    }

    deleteCharacterDiv() {
        this.parent.remove();
    }
}

export default Character;