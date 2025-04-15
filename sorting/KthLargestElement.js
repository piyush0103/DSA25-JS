const arr = [3, 2, 1, 5, 6, 4];
const k = 2;

// UsingBubbleSort

const findKthLargestNo = (arr, k) => {
	let len = arr.length;
	let swapped = false;
	let swapCount = k - 1;
	for (let i = 0; i < len - 1; i++) {
		for (let j = 0; j < len - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				swapped = true;
				arr[j] += arr[j + 1];
				arr[j + 1] = arr[j] - arr[j + 1];
				arr[j] -= arr[j + 1];
				swapCount--;
				if (swapCount == 0) {
					break;
				}
			}
		}
		if (swapped == false) {
			break;
		}
	}
	return arr[len - k];
};
console.log(findKthLargestNo(arr, k), 'heyy');
