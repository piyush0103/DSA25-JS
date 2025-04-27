const minAbsoluteDiff = (arr) => {
	const len = arr.length;
	let min = Number.MAX_VALUE;
	let x = [];
	if (len < 2) {
		return arr[0];
	}

	arr.sort((a, b) => a - b);
	for (let i = 0; i < len - 1; i++) {
		let diff = arr[i + 1] - arr[i];
		if (diff <= min) {
			min = diff;
		}
	}
	let i = 0;

	while (i < len - 1) {
        let diff = arr[i + 1] - arr[i];
		if (diff <= min) {
			x.push([arr[i], arr[i + 1]]);
			i = i + 1;
		} else {
			i++;
		}
	}
	return x;
};
const arr = [40, 11, 26, 27, -20];
console.log(minAbsoluteDiff(arr), 'hmmm');
