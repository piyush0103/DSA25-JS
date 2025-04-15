const arr = [4, 8, 9, 7, 6, 2, 3];
console.log(arr + ' before sorting');
quickSort(arr, 0, arr.length);
console.log(arr + ' after sorting');

function quickSort(arr, low, high) {
	if (low < high) {
		let pivot = partition(arr, low, high);
		quickSort(arr, low, pivot - 1);
		quickSort(arr, pivot + 1, high);
	}
}

function partition(arr, low, high) {
	let pivot = arr[high];
	let i = low - 1;
	for (let j = low; j < high; j++) {
		if (arr[j] <= pivot) {
			i++;
			arr[i] += arr[j];
			arr[j] = arr[i] - arr[j];
			arr[i] -= arr[j];
		}
	}
	if (high != i + 1) {
		arr[high] += arr[i + 1];
		arr[i + 1] = arr[high] - arr[i + 1];
		arr[high] -= arr[i + 1];
	}
}
