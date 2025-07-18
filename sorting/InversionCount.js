const merge = (arr, low, high) => {
    let res=0;
	if (low < high) {
		let mid = Math.floor(low + (high - low) / 2);
		res+= merge(arr, low, mid);
		res+= merge(arr, mid + 1, high);
		res+= sort(arr, low, mid, high);
	}
    return res;
};
const sort = (arr, low, mid, high) => {
	const n1 = mid - low + 1;
	const n2 = high - mid;
	console.log(mid, '  hehe');
    let left = arr.slice(low, mid + 1);
    let right = arr.slice(mid + 1, high + 1);
	
	console.log(left, right);
	let res = 0;
	let i = 0,
		j = 0,
		k = low;

	while (i < n1 && j < n2) {
		if (left[i] <= right[j]) {
			arr[k] = left[i];
			i++;
		} else {
			arr[k] = right[j];
			j++;
			res += (n1 - i);
		}

		k++;
	}
	while (i < n1) {
		arr[k] = left[i];
		k++;
		i++;
	}
	while (j < n2) {
		arr[k] = right[j];
		k++;
		j++;
	}
    console.log(res+" xxxxxxx")
    return res;
};
const arr = [4, 3, 2, 1];
console.log(merge(arr, 0, arr.length - 1));

