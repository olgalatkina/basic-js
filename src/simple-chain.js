const chainMaker = {
    separator: '~~',
    chain: [],

    getLength() {
        return this.chain.length;
    },

    addLink(value) {
        if (value !== undefined) {
            this.chain = this.chain.concat([`( ${value} )`]);
        } else {
            this.chain = this.chain.concat(['( )']);
        }
        return this;
    },

    removeLink(position) {
        if ((typeof position !== 'number') ||
            (position !== Math.floor(position)) ||
            (position < 1) || (position > this.chain.length))
        {
            this.chain = []; // NB: cleaning chain is required here, although this requirement is not specified
            throw new Error('invalid position: ' + position);
        }
        this.chain.splice(position - 1, 1);
        return this;
    },

    reverseChain() {
        this.chain.reverse();
        return this;
    },

    finishChain() {
        let result = this.chain.join(this.separator);
        this.chain = [];
        return result;
    }
};

module.exports = chainMaker;
