

// ts-node 文件可直接执行ts文件
function quickSort(nums: number[]): number[] {
    if (nums.length <= 1) {
        return nums
    }
    let pivot = Math.floor(nums.length / 2)
    let center = nums.splice(pivot, 1)[0]
    let lefts: number[] = []
    let rights: number[] = []
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if (element < center) {
            lefts.push(element)
        } else {
            rights.push(element)
        }
    }
    return quickSort(lefts).concat(center, quickSort(rights))
}

const nums2: number[] = [10, 1, 32, 2, 43, 23, 5, 8]
// const nums2: number[] = [12, 22, 1, 4, 23, 2, 4, 77, 3, 18]
const res = quickSort(nums2)
console.log('res===', res);

