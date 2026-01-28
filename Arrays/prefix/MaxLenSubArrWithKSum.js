
const arr = [6, -3, 1, 2, -3]
const k = 3;

const maxx_len = (arr, k) => {
    const map = new Map();
    map.set(0, -1)
    let total = 0;
    let max_len = 0;
    let len = 0;

    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
        if (map.has(total - k)) {
            len = (i - (map.get(total - k)))

            max_len = max_len > len ? max_len : len;
        } else {
            map.set(total, i);
        }
    }

    return max_len;
}

console.log(maxx_len(arr, k), 'heyyy this too work....')