
function test1(datas: number[]) {
    for (let i = 0; i < datas.length - 1; i++) {
        for (let j = i + 1; j < datas.length; j++) {
            const d2 = datas[j];
            if (datas[i] > d2) {
                let r = datas[i]
                datas[i] = d2
                datas[j] = r
            }
        }
    }
    console.log('res===datas', datas);
}

const nums = [10, 1, 32, 2, 43, 23, 5, 8]
test1(nums)
