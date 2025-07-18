const getSmallerCountArr = (arr) => {
	//   let count=  arr.map(a => Object.assign({a}, a));
	//   let clone2=arr.map(a => ({
	//     return {...a}}));

	let count = JSON.parse(JSON.stringify(arr));
	let count1 = count.sort((a, b) => a - b);
	let ans = [];
	console.log(count1);
	for (let i = 0; i < arr.length; i++) {
		const index = binarySearch(count1, arr[i]);
		ans[i] = index;
		count1.splice(index, 1);
	}
	return ans;
};
const binarySearch = (arr, target) => {
	let low = 0;
	let high = arr.length - 1;
    let mid=0;
	while (low <= high) {
		let mid = Math.floor(low + (high - low) / 2);
     
		if (arr[mid] < target) {
			low = mid + 1;
		} else {
			high = mid - 1;
		}
	}
    if(arr[low]==target){
        return low;
    }
    return mid;
};
const arr = [27,2,4,21 ,4,4,15];
console.log(getSmallerCountArr(arr), 'heyy');
