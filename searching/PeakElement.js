const arr=[1,2,1,3,5,6,4]
console.log(findPeakElement(arr))
function findPeakElement(arr){
    let low = 0;
    let high = arr.length - 1;
    while (low < high) {
        let mid = low + Math.floor((high - low) / 2);
        if (arr[mid] > arr[mid + 1]) {
            high = mid;
        }
        if (arr[mid] < arr[mid + 1]) {
            low = mid + 1;
        }
    }
    return low;
}
