// const sleep = (wait) => {
//   return new Promise((resolve) => {
//     setTimeout(resolve, wait);
//   });
// }

const sleep = (wait) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('hello');
    }, wait);
  });
};

// catch test
// const sleep = (wait) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error('에러'));
//     }, wait);
//   });
// };
