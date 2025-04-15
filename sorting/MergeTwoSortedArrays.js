const arr1=[1,2,10,15]
const arr2=[5,7,8,16]

mergeSortedArrays(arr1,arr2)

console.log(arr1)
console.log(arr2)

console.log("okkokko")



function mergeSortedArrays(arr1,arr2){
    let n=arr1.length
    let m=arr2.length


    for(let i=m-1;i>=0;i--){
        if(arr1[n-1]>arr2[i]){
            let last=arr1[n-1]
            let j=n-2
            while(j>=0&&arr1[j]>arr2[i]){
                arr1[j+1]=arr1[j]
                j--
            }
            arr1[j+1]=arr2[i]
            arr2[i]=last;
        }
    }



}