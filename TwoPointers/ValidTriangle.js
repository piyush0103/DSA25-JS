// Given an integer array nums, return the number of triplets chosen from the array that can make triangles if we take them as side lengths of a triangle.

var triangleNumber = function (arr) {
	let len = arr.length;
	if (len < 3) {
		return -1;
	}
    let count = 0;
    arr.sort((a,b)=>a-b);
	for (let i = len-1; i > 1; i--) {
		let left = 0;
		let right = i-1;
		
		while (left < right) {
			if (left == i || right == i) {
				continue;
			}
		if(arr[left]+arr[right]>arr[i]){
            count+=right-left;
            right--;
        }else{
            left++;
        }
		}
	}
    return count;
};
const nums = [4, 2, 3, 4];
console.log(triangleNumber(nums));
