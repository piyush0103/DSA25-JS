const findClosestPoint = (arr, k) => {
	let x = [];
	let max = Number.MAX_VALUE;
	for (let i = 0; i < arr.length; i++) {
		let dist = findHypotenuse(arr[i]);
		console.log(dist, ' w ', i);
		if (dist >= max) {
			x.push(arr[i]);
			max = dist;
		} else if (dist < max && x.length > 0) {
			x.push(arr[i]);
			swap(x, x.length - 2, x.length - 1);
		} else {
			x.push(arr[i]);
			max = dist;
		}
		console.log(x, 'sss');
	}
	return x.splice(0, k);
};
const findHypotenuse = (arr) => {
	return Math.sqrt(Math.pow(arr[0], 2) + Math.pow(arr[1], 2));
};
const swap = (arr, x, y) => {
	let temp = arr[x];
	arr[x] = arr[y];
	arr[y] = temp;
};
const arr = [
	[3, 3],
	[5, -1],
	[-2, 4],
];
let k = 2;
console.log(findClosestPoint(arr, k), 'hello');
// findClosestPoint(arr, k);
