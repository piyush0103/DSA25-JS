const arr = [4, 8, 9, 7, 6, 2, 3];
console.log(arr + ' before sorting');
selectSort(arr);
console.log(arr + ' after sorting');

function selectSort(arr) {
	const len = arr.length;
	let select = 0;
	for (let i = 0; i < len - 1; i++) {
		for (let j = i + 1; j < len; j++) {
			if (arr[j] < arr[i]) {
				arr[i] += arr[j];
		arr[j] = arr[i] - arr[j];
		arr[i] -= arr[j];
			}
		}
	
	}
}
