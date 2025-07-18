const arr = [10,5,6,9,8,7,6,21];
console.log(arr + ' before sorting');
quickSort(arr, 0, arr.length-1);
console.log(arr+ ' after sorting');

function quickSort(arr, low, high) {
	if (low < high) {
		let mid = partition(arr, low, high);
		quickSort(arr, low, mid - 1);
		quickSort(arr, mid + 1, high);
	}
}

function partition(arr, low, high) {
	let pivot = arr[high];
	let j = low - 1;
	for (let i = low; i < high; i++) {
		if (pivot >= arr[i]) {
			j++;
			swap(arr, i, j);
		}
	}
	j++;
	swap(arr, high, j);
	return j;
}

function swap(arr, i, j) {
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}
