const nums = [1, 2, 2, 4];

var findDuplicateAndMissing = function (nums) {
	const n = nums.length;
	const map = new Map();
	for (let i = 1; i <= n; i++) {
		map.set(i, 0);
	}

	for (const x of nums) {
		map.set(x, map.get(x) - 1);
	}
console.log("printing map ",map)
	let duplicate = 0;
	let missing = 0;

	for (const [key, value] of map.entries()) {
		if (value == -2) {
			duplicate = key;
		}
		if (value == 0) {
			missing = key;
		}
	}
	return [duplicate, missing];
};

console.log(findDuplicateAndMissing(nums))