const path = require("path");
const { getDataFromFilePromise } = require("./02_promiseConstructor");

const user1Path = path.join(__dirname, "files/user1.json");
const user2Path = path.join(__dirname, "files/user2.json");

const readAllUsersAsyncAwait = async () => {
  const u1 = await getDataFromFilePromise(user1Path);
  const u2 = await getDataFromFilePromise(user2Path);
  const result = `[${u1}, ${u2}]`;
  const jsonResult = JSON.parse(result);
  return jsonResult;

};

readAllUsersAsyncAwait();

module.exports = {
  readAllUsersAsyncAwait,
};

// readAllUsersChaining, readAllUsers와 같은 결과를 리턴합니다.
// 이번에는 async 및 await 키워드를 사용해서 해결해야 합니다.
