const arr = [0,0]

function findSubArrWithSumK(arr, k) {
    let sumk = 0
    const map = { 0: 1 }
    let total = 0
    let count = 0

    for (let x of arr) {
        total += x;
        if (map[total - k] != undefined) {

            count += map[total - k]
        }
        map[total] = (map[total] || 0) + 1

    }
    return count;
}


console.log(findSubArrWithSumK(arr,0),'no of subarray with sum ==2')