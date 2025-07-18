const arr = [1, 2,3,4];
const len = arr.length;

const prefix = calculatePrefixSum(arr, len);

const sum = sumOFAllSubArray(prefix, len);

console.log('sum of all subarray is ', sum);

function sumOFAllSubArray() {
	let sum = 0;
	let diff = 0;
	for (let j = 0; j < len; j++) {
		if (j != 0) {
			diff = prefix[j - 1];
		}
		for (let i = j; i < len; i++) {
			sum += prefix[i] - diff;
		}
	}
	return sum;
}

function calculatePrefixSum(arr, len) {
	const prefix = new Array(len);
	for (let i = 0; i < len; i++) {
		if (i == 0) {
			prefix[i] = arr[i];
		} else {
			prefix[i] = prefix[i - 1] + arr[i];
		}
	}
	return prefix;
}
