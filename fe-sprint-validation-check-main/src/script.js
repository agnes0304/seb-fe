// 동영상 강의에 나온 코드를 그대로 실습하세요
// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.
let userIdInput = document.querySelector('#username');
const pwInput = document.querySelector('#password');
const confirmPwInput = document.querySelector('#password-retype');
const successMsg = document.querySelector('.success-message');
const failureMsg = document.querySelector('.failure-message');
const missmatchMsg = document.querySelector('.mismatch-message');

function isMoreThan4Length(value) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요. -> Boolean 리턴
  return value.length >= 4
}

userIdInput.onkeyup = () => {
  if(isMoreThan4Length(userIdInput.value)){
    successMsg.classList.remove('hide');
    failureMsg.classList.add('hide')
  } else {
    successMsg.classList.add('hide');
    failureMsg.classList.remove('hide');
  }
}


function isMatch (password1, password2) {
  return password1===password2
}

confirmPwInput.onkeyup = () => {
  if(isMatch(pwInput.value, confirmPwInput.value)){
    missmatchMsg.classList.add('hide');
  } else {
    missmatchMsg.classList.remove('hide');
  }
}
