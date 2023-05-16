const path = require("path");
const { getDataFromFilePromise } = require("./02_promiseConstructor");

const user1Path = path.join(__dirname, "files/user1.json");
const user2Path = path.join(__dirname, "files/user2.json");

// HINT: getDataFromFilePromise(user1Path) 및
// getDataFromFilePromise(user2Path)를 이용해 작성합니다
const readAllUsersChaining = () => {
  // fs모듈 직접 사용금지
  // json파일 불러오고 두 파일을 합쳐서 최종적으로 두 객체가 담긴 array를 생성.
  return getDataFromFilePromise(user1Path)
    .then((u1json) => {
      // 클로저 활용 -> 내부 함수에서 사용 가능.
      return getDataFromFilePromise(user2Path).then((u2json) => {
        // return `[${u1json}, ${u2json}]`;
        return '['+u1json+','+u2json+']';
      });
    })
    .then((arr) => JSON.parse(arr));
  // const u1json = getDataFromFilePromise(user1Path);
  // const u2json = getDataFromFilePromise(user2Path);
  // u1json u2json이 합쳐져야 함. ,로 ','
};

readAllUsersChaining();

module.exports = {
  readAllUsersChaining,
};

// user1.json content
// {
//   "name": "김코딩",
//   "age": 26,
//   "sex": "Male",
//   "company": {
//     "name": "코드스테이츠"
//   }
// }

// user2.json content
// {
//   "name": "박해커",
//   "age": 40,
//   "sex": "Female",
//   "company": {
//     "name": "Anonymous"
//   }
// }
