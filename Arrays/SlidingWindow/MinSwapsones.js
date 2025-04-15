const nums = [0, 1, 0, 1, 1, 0, 0];
console.log(findMinSwaps(nums), 'found');

function findMinSwaps(nums) {
	const n = nums.length;

	let windowSize = nums.reduce(function (x, y) {
		return x + y;
	}, 0);

	let slide1s = 0;
	for (let i = 0; i < windowSize; i++) {
		slide1s += nums[i];
	}
	let max1s = slide1s;
	for (let i = 0; i < n; i++) {
		if (nums[(windowSize + i) % n] == 1) {
			slide1s++;
		}

		if (nums[i] == 1) {
			slide1s--;
		}

		max1s = Math.max(max1s, slide1s);
	}

	return windowSize - max1s;
}
