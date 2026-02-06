const arr=[-1,5,-10];
const circularArrMaxSum=(arr)=>{
    let total=arr[0];
    let currMaxSum=arr[0];
    let maxSum=arr[0];
    let currminSum=arr[0];
    let minSum=arr[0];

    for(let i=1;i<arr.length;i++){
        total+=arr[i];
        currMaxSum=Math.max((currMaxSum+arr[i]),arr[i]);
        maxSum=Math.max(currMaxSum,maxSum);

        currminSum=Math.min((currminSum+arr[i]),arr[i])
        minSum=Math.min(minSum,currminSum);

    }
    let circularSum=total-minSum;
    if(circularSum==0){
        return maxSum;
    }
    return Math.max(maxSum,circularSum);
}


console.log('found max circular array sum....... ',circularArrMaxSum(arr))