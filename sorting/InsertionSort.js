// The insertion sort is used when:

// the array is has a small number of elements
// there are only a few elements left to be sorted


const arr = [4, 8, 9, 7, 6, 2, 3];
console.log(arr + ' before sorting');
insertSort(arr);
console.log(arr + ' after sorting');

function insertSort(arr) {
	const len = arr.length;
	for (let i = 1; i < len; i++) {
		let j = i - 1;
		let insert = arr[i];
		while (j >= 0 && arr[j] > insert) {
			arr[j + 1] = arr[j];
			j--;
		}
		arr[j+1] = insert;
	}
}
