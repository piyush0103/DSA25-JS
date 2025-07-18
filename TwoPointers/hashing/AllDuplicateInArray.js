const arr=[4,3,2,7,8,2,3,1]

let idx=-1;
let num=0
 var list=[]
for(let i=0;i<arr.length;i++){
idx=arr[i]
if(idx<0){
    idx=(idx*-1)-1
}
else if(idx>0){
    idx=idx-1
}
if(arr[idx]>0){
    arr[idx]=-arr[idx]
}else{
list.push(Math.abs(arr[idx]))
}



}
console.log(list,' hey it works')