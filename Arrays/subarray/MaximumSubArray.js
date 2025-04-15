const arr=[-2,1,-3,4,-1,2,1,-5,4]
const findMaxSubArray=(arr)=>{
    let maxSum=Number.MIN_VALUE;
    let sum=0;
    for(let x of arr){
        sum+=x;
        if(sum>maxSum){
            maxSum=sum;
        }
        if(sum<0){
            sum=0;
        }
    }
    return maxSum;
}
console.log(findMaxSubArray(arr)+"   hjoye")