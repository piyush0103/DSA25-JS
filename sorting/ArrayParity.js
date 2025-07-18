const sortByParuty = (arr) => {
	let evenCount = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			evenCount++;
		}
	}
	let j = arr.length - 1;
    let i=0;
	while (i < evenCount) {
		if (arr[i] % 2 != 0 && arr[j] % 2 == 0) {
			swap(arr, i, j);
		} else if (arr[i] % 2 == 0) {
			i++;
		} else if (arr[j] % 2 != 0) {
			j--;
		}
	}
};
const swap = (arr, i, j) => {
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
};
const arr = [3, 1, 2, 4];
sortByParuty(arr);
console.log(arr, 'heyy');
