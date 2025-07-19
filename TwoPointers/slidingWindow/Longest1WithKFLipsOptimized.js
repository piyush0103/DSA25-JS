const arr = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1];
const k = 3;

const findLongestOneWithKflips = (arr, k) => {
	let max_len = 0;
	let left = 0;
	let zero_count = 0;
	for (let right = 0; right < arr.length; right++) {
		if (arr[right] == 0) {
			zero_count++;
		}
		while (zero_count > k) {
			if(arr[left]==0){
				zero_count--;
			}

			left++;
		}
        max_len=Math.max(max_len,(right-left+1))
	}
	return max_len;
};
console.log(findLongestOneWithKflips(arr, k));
