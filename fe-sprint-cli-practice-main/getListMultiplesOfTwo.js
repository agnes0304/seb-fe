const range = require('range'); // range 모듈을 불러옵니다

function getListMultiplesOfTwo(upTo) {
  // TODO
  // 5를 넣으면 2,4
  // 20을 넣으면 2~20까지 짝수
  // 증가값이 2, 시작은 2부터 시작하면 되니까
  // 마지막 끝나는 값만 제대로 입력하면 되는 거잖아요?

  let num = Number(upTo)+2
  let evenNum = (range.range(2, num, 2));
  return evenNum
}

module.exports = getListMultiplesOfTwo;
