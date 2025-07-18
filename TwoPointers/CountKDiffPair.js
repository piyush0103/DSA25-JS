
// Given an array of integers nums and an integer k, return the number of unique k-diff pairs in the array.

// A k-diff pair is an integer pair (nums[i], nums[j]), where the following are true:

// 0 <= i, j < nums.length
// i != j
// |nums[i] - nums[j]| == k



const kdiffPair = (arr, k) => {
	let len = arr.length;
	let count = 0;
    let prev = Number.MAX_VALUE
let start=0;
arr.sort((a,b)=>a-b)
console.log(arr)
for(let end=start;end<len;end++){
    while(start<end && (arr[end]-arr[start])>k){
        start++;
    }
        if(start!=end && prev!=arr[start]&& ((arr[end]-arr[start])==k)){
            console.log("is irt")
            count++;
            prev=arr[start];
        }
    }
    return count;
}


const arr = [3, 1, 4, 1, 5];
const k = 2;

console.log(kdiffPair(arr, k));
