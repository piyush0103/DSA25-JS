
const binarySearch = (x, arr, low, high,res) => {
   
	if (low <= high) {
        console.log(low+"  = "+high)
		let mid = Math.floor(low + Math.floor((high - low) / 2));
		// console.log(arr[mid]+"   "+(Math.abs(x - arr[mid]))+"   "+(Math.abs(x - res)))
        if (Math.abs(x - arr[mid]) < Math.abs(x - res)) {
			res = arr[mid];
            console.log(res+" ss")
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
const arr=[6, 9, 15, 78, 89]
let low=0;
let high=arr.length-1;
let res=arr[0]
console.log(binarySearch(9,arr,low,high,res))
