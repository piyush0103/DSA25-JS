const findkClosestElement = (arr, k, x) => {
	const len = arr.length;
	let res = [];
	let count = 0;
	let index = arr.indexOf(x);
	let left = index - 1;
	let right = index + 1;
	if (index >= 0) {
		while (count <= k && (left >= 0 || right < len)) {
			if (left >= 0) {
				res.push(arr[left]);
				left--;
				count++;
			}
			if (right < len) {
				res.push(arr[right]);
				right++;
				count++;
			}
		}
		return res;
	}
	return -1;
};

const arr = [1, 2, 3, 4, 5];

const k = 4;
const x = 3;
console.log(findkClosestElement(arr, k, x));
