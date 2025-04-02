class CharacterState {
    constructor(
        public lookDir: number,
        public state: string,
        public stateUpdate: boolean
    ) {}
}

export default CharacterState;