console.log(111);





// const fs = require('fs');
// // callback实现promise的链式调用
// function promisify(fn) {
//     const func1 = (...str: any) => {
//         return new Promise((resolve,reject)=>{
//             fn(...str, (err, data)=>{
//                 if (err) {
//                     return reject(err)
//                 }
//                 resolve(data)
//             })
//         })
//     }
//   return func1
// }

// const readFile = promisify(fs.readFile);

// readFile('./index.tsx', 'utf-8')
//   .then((data) => {console.log(data)})
//   .catch((err) => {console.error(err)})