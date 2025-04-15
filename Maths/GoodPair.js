const arr=[1,1,1,3,4,4,4,5,5];

console.log(findNoOfGoodPair(arr))

function findNoOfGoodPair(arr){
    const hash=new Array(101);
    hash.fill(0);
    console.log(hash)
    let res=0;

    for(let i=0;i<arr.length;i++){
        res+=hash[arr[i]]++;
    }
    return res;
}