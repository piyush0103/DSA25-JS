const arr=[1,3,5,6]
const target=5;
console.log(findposition(arr,target))


function findposition(nums, target) {
    const len=nums.length;
    let low=0
    let high=len-1;

    while(low<=high){
        let mid=Math.floor((low+high)/2)
        if(nums[mid]==target){
            return mid;
        }
        if(nums[mid]>target){
            high=mid-1;
        }
        if(nums[mid]<target){
            low=mid+1;
        }
    }
    return low;
}