// need to to consider edge for pair with difference zero in this case duplicate element also need to be considered

const kdiffPair = (arr, k) => {
	let len = arr.length;
	let count = 0;
	const repeatSet = new Set();
	const set = new Set();
	for (let x of arr) {
		set.add(x);
		if (set.has(x)) {
			repeatSet.add(x);
		}
	}
	console.log(set);
	if (k == 0) {
		return repeatSet.size();
	}
	for (let x of set) {
		if (set.has(x + k)) {
			count++;
		}
	}
	return count;
};
const arr = [3, 1, 4, 1, 5];
const k = 2;

console.log(kdiffPair(arr, k));
