const Grub = require('./1-Grub');

class Bee extends Grub {
  // TODO..
  constructor (food, age) {
    super(food);
    this.age = age;
    this.color = 'yellow';
    this.job = 'Keep on growing';
  }
}

module.exports = Bee;

const bee1 = new Bee('coke', 10);
console.log(bee1)