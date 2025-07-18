const findKClosest = (arr, k, x) => {
    let res=[];
	let start = 0;
	let end = arr.length - 1;
	while (end - start >= k) {
		if (Math.abs(x - arr[start]) > Math.abs(arr[end] - x)) {
			start++;
		} else {
			end--;
		}
	}

	for (let i = start; i <= end; i++) {
		res.push(arr[i]);
	}
	return res;
};
const arr=[1,2,3,4,5,6,7];
const k=4
const x=3


console.log(findKClosest(arr,k,x))