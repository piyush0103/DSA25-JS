const arr=[1, 4, -2, -2, 5, -4, 3]
const no=0;
const subArraysum=(arr,no)=>{
    let set=new Set();
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
        if(arr[i]==0||sum==no||set.has(sum)){
            return true;
        }
        set.add(sum)
    }
}
console.log(subArraysum(arr,no))