const minDiff = (arr1, arr2, arr3) => {
	let len1 = arr1.length;
	let len2 = arr2.length;
	let len3 = arr3.length;
	let res = 0;
	let minDiff = Number.MAX_VALUE;
	let diff = 0;

	for (let i = 0; i < len1; i++) {
		
    let x = binarySearch(arr1[i], arr2, 0, len2 - 1, arr2[res]);
    let y = binarySearch(arr1[i], arr3, 0, len3 - 1, arr3[res]);
		console.log(arr1[i] + ' xx ' + x + ' yy  ' + y);
		diff = Math.max(arr1[i], x, y) - Math.min(arr1[i], x, y);
		minDiff = diff < minDiff ? diff : minDiff;
	}
	return minDiff;
};


const binarySearch = (x, arr, low, high,res) => {
   
	if (low <= high) {
        
		let mid = Math.floor(low + Math.floor((high - low) / 2));
		
        if (Math.abs(x - arr[mid]) < Math.abs(x - res)) {
			res = arr[mid];
     
		} else if (Math.abs(x - arr[mid]) == Math.abs(x - res)) {
			res = Math.max(arr[mid], res);
		}
		if (arr[mid] == x) {
			res= arr[mid];
		}
		if (arr[mid] > x) {
			return binarySearch(x, arr, low, mid - 1,res);
		} else  {
		return	binarySearch(x, arr, mid + 1, high,res);
		}
        
	}
	return res;
};
const arr1 = [5, 8, 10, 15];
const arr2 = [6, 9, 15, 78, 89];
const arr3 = [2, 3, 6, 6, 8, 8, 10];


let x=minDiff(arr1, arr2, arr3);
console.log(x+"")