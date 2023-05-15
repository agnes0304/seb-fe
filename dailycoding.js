// 003
function powerOfTwo(num) {
  //Number.isInteger, Math.log2, Math.log 사용금지
  // 2의 거듭제곱인지 확인하고 리턴.
  // while 사용(나머지가 나오는 순간 false)

  // 1(2^0) 처리, 홀수 처리
  if (num === 1) {
    return true;
  } else if (num % 2 === 1) {
    return false;
  }
  // 짝수 처리: while 사용해서 나머지 나오는 순간 break. false 리턴
  // 지금 계속 여기서 false로 나와야 하는게 막히고 있어.
  // 짝수가 와 -> 2로 나눠 -> 홀수가 아니면 -> 다시 나눠 -> ... 1이 되면 true
  // 짝수가 와 -> 2로 나눠 -> 홀수야 -> false
  // flag를 false로 둬. 계속 나눠서 1이 되면 flag를 true로 바꾸고 리턴.
  // 반복해야 하는건 얘가 홀수인지 아닌지 체크하고 계속 나누는게 필요함.

  let flag = false;
  while (!flag) {
    // num = num / 2;
    if (num === 1) {
      flag = true;
    } else if (num % 2 !== 0) {
      break;
    } else {
      num = num / 2;
    }
  }
  return flag;
}

// 짝수처리 하는 부분이 간결함
// let powered = 2;
// while (powered < num) {
//   powered = powered * 2;
// }

// return powered === num;

// 004
function firstCharacter(str) {
  // 띄어쓰기 있는 문자열 입력 -> 그 앞글자로 이뤄진 문자열 리턴
  // 연속 공백은 없음.
  // 빈 문자열은 빈 문자열 리턴
  if (str.length === 0) {
    return "";
  }

  // 공백으로 split, 배열 돌면서 인덱스 0인거 스트링에 합쳐
  let result = "";
  let words = str.split(" ");
  // console.log(words);
  for (word of words) {
    // console.log(word);
    result += word[0];
  }
  return result;
}

// console.log(firstCharacter("Hello this is jiwoo"));

// 005
function firstReverse(str) {
  
}
