const arr = [3, 2, 4];
const k = 6;

const findPairWithOnpass = (arr, k) => {
    const pairObj = {}
    let required = 0
    for (let i = 0; i < arr.length; i++) {
        required = k - arr[i]
        if (required in pairObj) {
            return [pairObj[required], i]
        } else {
            pairObj[arr[i]] = i;
        }
    }

}

console.log(findPairWithOnpass(arr,k))
console.log('heyy printing ...')