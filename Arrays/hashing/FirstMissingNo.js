const nums = [1, 2, 0];
const miss = findFirstPositiveMissingNo(nums);
console.log('first-positive-missing-no ', miss);

function findFirstPositiveMissingNo(arr) {
	arr.sort();
    console.log(arr)
	let elem = 0;
	for (let x in arr) {
		if (x == elem) {
			elem++;
		} else if (x > elem) {
			return elem;
		}
		return elem;
	}
}
