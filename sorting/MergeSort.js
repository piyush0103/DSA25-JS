let arr = [9, 1, 2, 6, 4, 5, 0, 3];
mergeSort(arr, 0, arr.length - 1);
console.log(arr, 'sorted after merge sort');

function mergeSort(arr, low, high) {
	if (low < high) {
		let mid = Math.floor(low + (high - low) / 2);

		mergeSort(arr, low, mid);
		mergeSort(arr, mid + 1, high);

		merge(arr, low, mid, high);
	}
}

function merge(arr, low, mid, high) {
	const l = mid - low + 1;
	const r = high - mid;
	console.log(l + '  c ' + r);
	let left = new Array(l);
	let right = new Array(r);

	for (let i = 0; i < l; i++) {
		left[i] = arr[low + i];
	}
	for (let j = 0; j < r; j++) {
		right[j] = arr[mid + 1 + j];
	}

	console.log(left + ' hey');
	console.log(right + ' right');
	let i = 0,
		j = 0,
		k = low;

	while (i < l && j < r) {
		if (left[i] <= right[j]) {
			arr[k] = left[i];
			i++;
		} else {
			arr[k] = right[j];
			j++;
		}
		k++;
	}

	while (j < r){ arr[k] = right[j];
	j++;
	k++;
    }
	while (i < l) {
		arr[k] = left[i];
		i++;
		k++;
	}
}
