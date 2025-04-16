function countAndMerge(arr, l, m, r) {
	// Counts in two subarrays
	let n1 = m - l + 1,
		n2 = r - m;

	// Set up two arrays for left and right halves
	let left = arr.slice(l, m + 1);
	let right = arr.slice(m + 1, r + 1);

	// Initialize inversion count (or result)
	// and merge two halves
	let res = 0;
	let i = 0,
		j = 0,
		k = l;
	while (i < n1 && j < n2) {
		// No increment in inversion count
		// if left[] has a smaller or equal element
		if (left[i] <= right[j]){
			arr[k++] = left[i++];
		}
		else {
			arr[k++] = right[j++];
			res += n1 - i;
		}
	}

	// Merge remaining elements
	while (i < n1) {
		arr[k++] = left[i++];
	}
	while (j < n2) {
		arr[k++] = right[j++];
	}

	console.log(res + ' xxxxxxx');
	return res;
}

// Function to count inversions in the array
function countInv(arr, l, r) {
	let res = 0;
	if (l < r) {
		let m = Math.floor((r + l) / 2);

		// Recursively count inversions
		// in the left and right halves
		res += countInv(arr, l, m);
		res += countInv(arr, m + 1, r);

		// Count inversions such that greater element is in
		// the left half and smaller in the right half
		res += countAndMerge(arr, l, m, r);
	}
	return res;
}

function inversionCount(arr) {
	return countInv(arr, 0, arr.length - 1);
}

// Driver Code
let arr = [4, 3, 2, 1];
console.log(inversionCount(arr));
