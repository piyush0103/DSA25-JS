const arr = [1, 1, 0, 1, 1, 1];
const max_consecutive_one = (arr) => {
	let len = 0;
	let max_len = 0;
	for (let i = 0; i < arr.length; i++) {
		arr[i] == 1 ? len++ : (len = 0);
		max_len = len>max_len?len:max_len
	}
	return max_len;
};
console.log(max_consecutive_one(arr), ' hey solvced');
