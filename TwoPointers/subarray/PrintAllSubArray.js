const arr=[1, 5, 3, 9, 7, 8];
const len=arr.length;
for(let i=0;i<len;i++){
    for(let j=i;j<len;j++){
        process.stdout.write(" [ ")
        for(let k=i;k<=j;k++){
            process.stdout.write(arr[k]+',') 
    

        }
        process.stdout.write(" ] ")
       

    }   
    console.log()

}