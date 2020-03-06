const chainMaker = {

  array: [],

  getLength() {
    return this.array.length;
  },

  addLink(value) {
    this.array.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (typeof position == 'number' && position > 0 && position <= this.array.length) {
      this.array.splice(position - 1, 1);
      return this;
    }
    else {
      this.array.length = 0;
      throw Error('invalid position');
    }
  },

  reverseChain() {
    this.array.reverse();
    return this;
  },
  
  finishChain() {
    let chain = this.array.join('~~');
    this.array.length = 0;
    return chain;
  }
};

module.exports = chainMaker;
