const arr=[2,2,1,1,2,3];
console.log(finduniqueNumber(arr), 'heyy here it is')


function finduniqueNumber(arr){
let result=arr[0];
for(let i=1;i<arr.length;i++){
    result^=arr[i];
}
return result
}