const pro1 = async () => {
  return new Promise((resolve, reject) => {
    console.log("res===1");
    resolve("1");
    console.log("res===2");
  });
};
const p2 = async () => {
  const c = await pro1();
  console.log('res===c', c);
};
p2();
// let wake = (time: number) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`${time / 1000}秒后醒来`);
//     }, time);
//   });
// };
// let wake2 = (time: number) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         reject(`${time / 1000}秒后醒来 error`);
//       }, time);
//     });
//   };

// let p1 = wake(3000);
// let p2 = wake(2000);
// let p3 = wake2(1000);

// const proAll = async () => {
//   console.log("res===1");
//   await Promise.all([p1, p2, p3])
//     .then((result) => {
//       console.log("res===all", result); // [ '3秒后醒来', '2秒后醒来' ]
//     })
//     .catch((error) => {
//       console.log("res===all error", error);
//     });
//   console.log("res===2");
//   let p4 = wake(2000);
// };
// proAll();

// Promise.race([p1, p2])
//   .then((result) => {
//     console.log("res===race", result); // [ '3秒后醒来', '2秒后醒来' ]
//   })
//   .catch((error) => {
//     console.log(error);
//   });
