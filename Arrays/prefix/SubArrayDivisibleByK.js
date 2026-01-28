const arr = [-1,2,9];
const k = 2;

const no_of_subArray = (arr, k) => {
    const div_map = new Map();
    let total = 0;
    let count = 0;
    div_map.set(0, 1);
    let remainder = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
        remainder = total % k;
        if(remainder<0){
            remainder+=k;
        }
        if (div_map.has(remainder)) {
            count += div_map.get(remainder);
            console.log(remainder,arr[i],'/////')
        }
        div_map.set(remainder, (div_map.get(remainder) || 0) + 1);


    }
    console.log(div_map)
    return count;
}

console.log(no_of_subArray(arr, k), 'no of sub arrray. ')