require('mocha');
const chai = require('chai');
const expect = chai.expect;
const Grub = require('../src/1-Grub');

describe('Grub class functionality', () => {
  var grub;

  beforeEach(() => (grub = new Grub()));

  it('`age` 속성은 `0`이어야 합니다', () => {
    expect(grub.age).to.equal(0);
  });

  it('`color` 속성은 `pink`이어야 합니다', () => {
    expect(grub.color).to.equal('pink');
  });

  it('`food` 속성은 `jelly`이어야 합니다', () => {
    expect(grub.food).to.equal('jelly');
  });

  it('`eat` 메서드가 존재해야 합니다', () => {
    expect(grub.eat).to.be.a('function');
  });

  it('`eat` 메서드는 `Mmmmmmmmm jelly`를 리턴합니다.', () => {
    expect(grub.eat()).to.equal('Mmmmmmmmm jelly');
  });
});
