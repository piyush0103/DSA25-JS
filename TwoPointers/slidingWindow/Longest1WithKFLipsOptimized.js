const arr = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1];
const k = 3;

const findLongestOneWithKflips = (arr, k) => {
	let max_len = 0;
	let left = 0;
	let zero_count = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == 0) {
			zero_count++;
		}
		while (zero_count > k) {
			zero_count--;
			left++;
		}
        max_len=Math.max(max_len,(i-left+1))
	}
};
console.log(findLongestOneWithKflips(arr, k));
