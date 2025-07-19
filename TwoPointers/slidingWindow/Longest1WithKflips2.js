// finding longest 1 with k flips
// sliding window

const arr = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1]

function findLongestone(arr) {
// here if no of flips are exhausted then move the left pointer
    let start = 0
    let k = 3;
let end=0;
    for ( end = 0; end < arr.length; end++) {
        if (arr[end] == 0) {
            k--
        }
        
        if(k<0){
            if(arr[start++]==0){
                k++;
            }
        }
    }
return end-start;
}

console.log(findLongestone(arr),'what')