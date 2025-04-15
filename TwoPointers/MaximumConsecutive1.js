const arr = [1, 1, 0, 1, 1, 1];
const max_consecutive_one = (arr) => {
	let len = 0;
	let max_len = Number.MIN_VALUE;
	let start = 0;
	let end = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == 1) {
			len = 1;
			start = i - 1;
			end = i + 1;
			while (start >= 0) {
				if (arr[start] == 1) {
					start--;
					len++;
				} else {
					break;
				}
			}
			while (end < arr.length) {
				if (arr[end] == 1) {
					end++;
					len++;
				} else {
					break;
				}
			}
			max_len = Math.max(max_len, len);
		}
	}

	return max_len;
};
console.log(max_consecutive_one(arr) + '  solved in javascript');
