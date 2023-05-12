const Bee = require('./2-Bee');

class HoneyMakerBee extends Bee {
  // TODO..
  constructor() {
    super();
    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;
  }

  makeHoney() {
    this.honeyPot = this.honeyPot + 1
    return this.honeyPot;
  }
  giveHoney() {
    this.honeyPot = this.honeyPot - 1
    return this.honeyPot;
  }
}

module.exports = HoneyMakerBee;
