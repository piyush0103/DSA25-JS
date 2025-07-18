const findKPairWithSmallestSum = (arr1, arr2, k) => {
	let len1 = arr1.length;
	let len2 = arr2.length;
	const res = [];
	let count = 0;
	let pointer1 = 0;
	let pointer2 = 0;

	while (count != k) {
		if (arr1[pointer1] < arr2[pointer2]) {
			while (pointer2 < len2) {
				res.push([arr1[pointer1], arr2[pointer2]]);
				pointer2++;
				count++;
			}
			pointer1++;
		} else {
			while (pointer1 < len1) {
				res.push([arr2[pointer2], arr1[pointer1]]);
				pointer2++;
				count++;
			}
			pointer2++;
		}
	}
	return res;
};
const arr1 = [1, 7, 11];
const arr2 = [2, 4, 6];
const k = 3;

console.log(findKPairWithSmallestSum(arr1, arr2, k));
