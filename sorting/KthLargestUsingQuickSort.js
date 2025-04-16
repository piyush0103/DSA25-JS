const arr = [3,2,1,5,6,4];
const len = arr.length;
const k = len - 2;

const quickSelect = (arr, low, high,k) => {
	let partition = partitionW(arr, low, high);
	if (k == partition) {
        console.log(' when ',partition)
        console.log(arr[k])
		return arr[partition];
	}
	if (k > partition) {
		quickSelect(arr, partition + 1, high,k);
	} else {
		quickSelect(arr, low, partition - 1,k);
	}
    return arr[k]
};
const partitionW = (arr, low, high) => {
	const pivot = arr[high];
	let j = low - 1;
	for (let i = low; i < high; i++) {
		if (pivot > arr[i]) {
			j++;
            // console.log(arr,' before')
			swap(arr, i, j);
            // console.log(arr,' after')

		}
	}
	
	swap(arr, high, j+1);
	return j+1;
};
function swap(arr, i, j) {
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

console.log(quickSelect(arr,0,len-1,k),'heyyy')
