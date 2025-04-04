class Keys {
    constructor(initial) {
        this.w = initial;
        this.a = initial;
        this.s = initial;
        this.d = initial;
    }
    set(key, value) {
        switch (key) {
            case 'w':
                this.w = value;
                break;
            case 'a':
                this.a = value;
                break;
            case 's':
                this.s = value;
                break;
            case 'd':
                this.d = value;
                break;
        }
    }
    entries() {
        return [['w', this.w], ['a', this.a], ['s', this.s], ['d', this.d]];
    }
}
export default Keys;
