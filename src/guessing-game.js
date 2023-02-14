class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        let mid = Math.ceil((this.min + this.max) / 2);
        return mid;
    }

    lower() {
        this.max = Math.ceil((this.min + this.max) / 2);
    }

    greater() {
        this.min =  Math.ceil((this.min + this.max) / 2);
    }
}

module.exports = GuessingGame;
