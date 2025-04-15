const arr = [4, 8, 9, 7, 6, 2, 3];
console.log(arr + ' before sorting');
bubbleSort(arr);
console.log(arr + ' after sorting');

function bubbleSort(arr) {
	const len = arr.length;
	for (let i = 0; i < len - 1; i++) {
		let swapped = false;
		for (let j = 0; j < len - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				arr[j] += arr[j + 1];
				arr[j + 1] = arr[j] - arr[j + 1];
				arr[j] -= arr[j + 1];
				swapped = true;
			}
		}
		if (!swapped) {
			break;
		}
	}
}
