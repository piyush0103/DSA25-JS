const arr = [1, 3, 4, 2, 2];

const result = findDuplicate(arr);

console.log('we got the result ', result);
function findDuplicate(nums) {
	const len = nums.length;
	const arr = new Array(len + 1);
	for (let i = 0; i < arr.length; i++) {
		arr[i] = 0;
	}
	for (let i = 0; i < nums.length; i++) {
		arr[nums[i]]++;
	}
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > 1) {
			return i;
		}
	}
}
