const arr1 = [1, 2, 10, 15];
const arr2 = [5, 7, 8, 16];

mergeSortedArrays(arr1, arr2);

console.log(arr1);
console.log(arr2);

console.log('okkokko');

function mergeSortedArrays(arr1, arr2) {
	let n = arr1.length;
	let m = arr2.length;
	let i = n - 1;
	let j = 0;
	while (i >= 0 && j < m) {
		if (arr1[i] < arr2[j]) {
			i--;
		} else {
			arr1[i] += arr2[j];
			arr2[j] = arr1[i] - arr2[j];
			arr1[i] -= arr2[j];
            i--
        j++
		}
        
	}
}
