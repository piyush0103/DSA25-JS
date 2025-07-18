const findIndexOfTwoSum = (arr, k) => {
	const len = arr.length;
	if (len < 2) {
		return -1;
	}
	let start = 0;
	let end = len - 1;
	let sum = 0;
	while (start < end) {
		sum = arr[start] + arr[end];
		if (sum == k) {
			return [++start, ++end];
		}
		if (sum < k) {
			start++;
		} else {
			end--;
		}
	}
	return -1;
};
const arr = [2, 7, 11, 15];
console.log(findIndexOfTwoSum(arr, 9));
