class VigenereCipheringMachine {

    constructor(direction = true) {
        this.direction = direction;
        this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        this.VigenereMatrix = this.getSquareMatrix(this.alphabet);
    }

    getSquareMatrix(alphabet) {

        let matrix = [];
        for (let i = 0; i < alphabet.length; i++) {
            matrix[i] = alphabet.slice(i).concat(alphabet.slice(0, i));
        }
        return matrix;
    }

    encrypt(message, key) {

        if (!message || !key)
            throw new Error;

        message = message.toUpperCase();
        key = key.toUpperCase();

        let word = '';

        for (let i = 0, j = 0; i < message.length; i++ , j++) {

            if (!this.alphabet.includes(message[i])) {
                word += message[i];
                j--;
                continue;
            }

            word += this.VigenereMatrix[this.alphabet.indexOf(message[i])][this.alphabet.indexOf(key[j % key.length])];

        }

        return (this.direction) ? word : word.split('').reverse().join('');
    }

    decrypt(message, key) {

        if (!message || !key)
            throw new Error;

        message = message.toUpperCase();
        key = key.toUpperCase();

        let word = "";

        for (let i = 0, j = 0; i < message.length; i++ , j++) {

            if (!this.alphabet.includes(message[i])) {
                word += message[i];
                j--;
                continue;
            }
            
            let row = this.alphabet.indexOf(key[j % key.length])
            word += this.alphabet[this.VigenereMatrix[row].indexOf(message[i])];

        }
        return (this.direction) ? word : word.split('').reverse().join('');
    }
}

module.exports = VigenereCipheringMachine;
