require('mocha')
const chai = require('chai')
const expect = chai.expect
const Bee = require('../src/2-Bee')

describe('Bee class functionality', () => {
  var bee;

  beforeEach(() => bee = new Bee());

  it('`age` 속성은 `5`이어야 합니다', () => {
    expect(bee.age).to.equal(5);
  });

  it('`color` 속성은 `yellow`이어야 합니다', () => {
    expect(bee.color).to.equal('yellow');
  });

  it('`food` 속성은 Grub으로부터 상속받습니다', () => {
    expect(bee.food).to.equal('jelly');
  });

  it('`eat` 메서드는 Grub으로부터 상속받습니다', () => {
    expect(bee.eat).to.be.a('function');
  });

  it('`job` 속성은 `Keep on growing`이어야 합니다', () => {
    expect(bee.job).to.equal('Keep on growing');
  });

});
