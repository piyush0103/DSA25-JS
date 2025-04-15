const arr=[1,5,6,9]



const list=[]
for(let i=0;i<4;i++){
    // list.push(arr)
    // list.push(JSON.parse(JSON.stringify(arr)))
//    list.push(arr.map((a)=>Object.assign(a,{})));
// list.push(arr.map(a=>({...a})))
   
}
console.log(list)
arr[0]=99;
arr[1]=56;
arr[2]="sdsd";
console.log("====================================================")
console.log(list)