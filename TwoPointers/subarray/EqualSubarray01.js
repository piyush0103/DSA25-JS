//  carry forword prefix summ two pointeer  

const findSubArray = (arr) => {
	let len = arr.length;
	let maxLen = Number.MIN_VALUE;
	let sum = 0;
	for (let i = 0; i < len; i++) {
		arr[i] = arr[i] == 0 ? -1 : 1;
	}
	let map = new Map();
	map.set(0, -1);
	for (let i = 0; i < len; i++) {
		sum += arr[i];
		if (map.has(sum)) {
			let end = map.get(sum);
            let curr_len=i-end;
			maxLen = curr_len>maxLen?curr_len:maxLen;
		} else {
			map.set(sum, i);
		}
	}
	return maxLen;
};

const findSubArraylenOptimized=(nums)=>{
    let mp = new Map();
    let sum = 0;
    let subArrayLength = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i] === 0 ? -1 : 1;
        if (sum === 0) {
            subArrayLength = i + 1;
        } else if (mp.has(sum)) {
            subArrayLength = Math.max(subArrayLength, i - mp.get(sum));
        } else {
            mp.set(sum, i);
        }
    }
    return subArrayLength;
};

const arr = [0, 1, 1, 1, 1, 1, 0, 0, 0];

console.log(findSubArraylenOptimized(arr));
