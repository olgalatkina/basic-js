class VigenereCipheringMachine {

    constructor(mode) {
        if (mode === undefined) {
            mode = true; // true by default
        }
        if (typeof mode != 'boolean') {
            throw new Error('wrong mode: ' + mode);
        }
        this.mode = mode ? 'direct' : 'reverse';
    }

    encrypt(message, key) {
        // Check input parameters: throw Error if
        // a parameter is missed or is not a text
        if (message === undefined ||
            typeof message !== 'string') {
            throw new Error('wrong message: ' + message);
        }
        if (key === undefined ||
            typeof key !== 'string') {
            throw new Error('wrong key: ' + key);
        }

        // Convert to upper case...
        // Converting to array is not necessary,
        // but sort of convenient for my style:
        let msgArr = message.toUpperCase().split('');
        let keyArr = key.toUpperCase().split('');

        // I will add charters to output message
        // encrypting them one-by-one:
        let encryptedMessage = '';

        // This would count letters in the input message.
        // Note that some input may contain other sorts of
        // characters, not letters, like space symbols, etc.
        let lettersCounter = 0;

        for (let i = 0; i < msgArr.length; i++) {
            // Get current character of the input message
            let msgChar = msgArr[i];

            // Get the corresponding character of the key
            let keyChar = keyArr[lettersCounter % keyArr.length];

            // If current character is not a letter,
            // then just add it to the output message
            // without encrypting:
            if (msgChar < 'A' || msgChar > 'Z') {
                encryptedMessage += msgChar;
                continue;
            }

            // OK, now we know that the current character
            // is a letter, so we increment the counter:
            lettersCounter++;

            // Get the character's ASCII code
            let msgCode = msgChar.charCodeAt(0);
            let keyCode = keyChar.charCodeAt(0);

            // Get index in the English alphabet
            let msgIdx = msgCode - 'A'.charCodeAt(0);
            let keyIdx = keyCode - 'A'.charCodeAt(0);

            // Vigenère encryption
            let encryptedIdx = msgIdx + keyIdx;
            if (encryptedIdx >= 26) {
                encryptedIdx -= 26;
            }

            // Index to code
            let encryptedCode = encryptedIdx + 'A'.charCodeAt(0);

            // Code to character
            let encryptedChar = String.fromCharCode(encryptedCode);

            // Add encrypted character to output message
            encryptedMessage += encryptedChar;
        }

        return encryptedMessage;
    }

    decrypt(encryptedMessage, key) {
        if (encryptedMessage === undefined ||
            typeof encryptedMessage !== 'string') {
            throw new Error('wrong message: ' + encryptedMessage);
        }
        if (key === undefined ||
            typeof key !== 'string') {
            throw new Error('wrong key: ' + key);
        }

        let msgArr = encryptedMessage.toUpperCase().split('');
        let keyArr = key.toUpperCase().split('');

        if (this.mode === 'reverse') {
            msgArr = msgArr.reverse();
        }

        let decryptedMessage = '';
        let lettersCounter = 0;

        for (let i = 0; i < msgArr.length; i++) {
            let msgChar = msgArr[i];

            let keyChar = keyArr[lettersCounter % keyArr.length];

            if (msgChar < 'A' || msgChar > 'Z') {
                decryptedMessage += msgChar;
                continue;
            }

            lettersCounter++;

            let msgCode = msgChar.charCodeAt(0);
            let keyCode = keyChar.charCodeAt(0);

            let msgIdx = msgCode - 'A'.charCodeAt(0);
            let keyIdx = keyCode - 'A'.charCodeAt(0);

            // Vigenère decryption
            let decryptedIdx = msgIdx - keyIdx;
            if (decryptedIdx < 0) {
                decryptedIdx += 26;
            }

            let decryptedCode = decryptedIdx + 'A'.charCodeAt(0);
            let decryptedChar = String.fromCharCode(decryptedCode);

            decryptedMessage += decryptedChar;
        }

        if (this.mode === 'reverse') {
            decryptedMessage = decryptedMessage.split('').reverse().join('');
        }

        return decryptedMessage;
    }
}

module.exports = VigenereCipheringMachine;
