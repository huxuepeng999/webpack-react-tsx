// react 钩子函数

setTimeout(()=>{
    console.log(4)
}, 0)
console.log(0);
const a11 = new Promise((resolve, reject)=>{
    console.log(1)
    resolve('1')
})
console.log(3)
a11.then(()=>{
    console.log(2)
})
const a22 = new Promise((resolve, reject)=>{
    console.log(5)
    resolve('2')
})
a22.then(()=>{
    console.log(6)
})


// async function test12(numbers: number[], time: number) {

//     // async function t2(num: number, target: number) {
//     //     setTimeout(()=>{
//     //         console.log(num);
//     //     }, target)
//     // }

//     for (let i = 0; i < numbers.length; i++) {
//         // await t2(numbers[i], time * i)
//         setTimeout(()=>{
//             console.log(numbers[i]);
//         }, time * i)
//     }
// }
// test12([1, 2, 3], 2000)




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