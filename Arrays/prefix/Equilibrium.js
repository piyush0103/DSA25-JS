const arr=[-7,1,5,2,-4,3];


function findEquilibriumIndex(arr){
   const indexes=[];
   const prefix=generatePrefixArr(arr);
   let leftSum=0;
   let rightsum=0;
   for(let i=0;i<prefix.length;i++){
    leftSum=prefix[i];
    rightsum=prefix[prefix.length-1]-leftSum;
    if(leftSum==rightsum){
        console.log(prefix[i],i,'ds')
        return i;
    }
   } 
}
function generatePrefixArr(arr){
    const prefx=[];
    prefx[0]=arr[0];
    for(let i=1;i<arr.length;i++){
        prefx[i]=arr[i]+prefx[i-1];
    }
    console.log(prefx)
    return prefx;
}


console.log(findEquilibriumIndex(arr))