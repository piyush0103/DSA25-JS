
const arr=[1,5,6,8,8,8]

function elemGreaterThanItself(array){
    let max=array[0];
    let max_count=0;
    for(let i=1; i<array.length; i++){
        if(array[i]>max){
            max=array[i];
            max_count=1;
        }
        else if(max==array[i]){
            max_count++;
        }
    
    }
    console.log(max_count,'sd'
    )
    return array.length-max_count;
}
console.log(elemGreaterThanItself(arr))