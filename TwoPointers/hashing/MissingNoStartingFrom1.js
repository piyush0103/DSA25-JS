const arr=[4,3,2,7,8,2,3,1]

const len=arr.length

const miss=[]
for(let x of arr){
    miss[x-1]=x;

}

console.log(miss)
const elem=[]
for(let i=0;i<len;i++){
    if(miss[i]==null){
        elem.push(i+1)
    }
}

console.log(elem)