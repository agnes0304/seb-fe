const path = require("path");
const { getDataFromFilePromise } = require("./02_promiseConstructor");

const user1Path = path.join(__dirname, "files/user1.json");
const user2Path = path.join(__dirname, "files/user2.json");

// HINT: getDataFromFilePromise(user1Path) 및
// getDataFromFilePromise(user2Path)를 이용해 작성합니다
const readAllUsersChaining = () => {
  return getDataFromFilePromise(user1Path)
    .then((u1json) => {
      // 클로저 활용 -> 내부 함수에서 사용 가능.
      return getDataFromFilePromise(user2Path).then((u2json) => {
        return `[${u1json}, ${u2json}]`;
      });
    })
    .then((arr) => JSON.parse(arr));
};

readAllUsersChaining();

module.exports = {
  readAllUsersChaining,
};
