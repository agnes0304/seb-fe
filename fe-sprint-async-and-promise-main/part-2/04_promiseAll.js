const path = require('path');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');

const readAllUsers = () => {
  // TODO: Promise.all을 이용해 작성합니다
  const u1 = getDataFromFilePromise(user1Path);
  const u2 = getDataFromFilePromise(user2Path);

  return Promise.all([u1, u2]).then(([u1, u2])=>{
    const u1json = JSON.parse(u1);
    const u2json = JSON.parse(u2);
    const result = [u1json, u2json];
    return result;
  })

}

readAllUsers()

module.exports = {
  readAllUsers
}

//ReadAllUsersChaining과 정확한 값을 리턴함.
