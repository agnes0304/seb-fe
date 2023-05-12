const Bee = require('./2-Bee');

class ForagerBee extends Bee {
  // TODO..
  constructor() {
    super();
    this.age = 10;
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
  }
  forage(t) {
    return this.treasureChest.push(t);
  }
}

module.exports = ForagerBee;
