new Promise((resolve, reject) => {
    console.log('res===1');
    resolve('')
}).then(()=>{
    console.log('res===4');
})
console.log('res===3');
