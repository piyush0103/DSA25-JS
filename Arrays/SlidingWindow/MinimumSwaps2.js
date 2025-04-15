let arr = [8, 1, 1, 8, 2, 5, 8];
let elem = 8;
console.log(findMinSwap(arr, elem));


function findMinSwap( arr, elem) {
//count no of elem and create a window of that size
let elemCount = 0;
let n = arr.length;
let minSwaps = Number.MAX_VALUE;
for (let i = 0; i < arr.length; i++) {
    if (elem == arr[i]) {
        elemCount++;
    }
}
let start = 0;
let end = elemCount - 1;
let winCount = 0;
let outSideWindowCount = 0;
for (let i = start; i <= end; i++) {
    if (arr[i] == elem) {
        winCount++;
    }
}
while (start < (n - elemCount) && end < n) {
    if (start == 0 && end == elemCount - 1) {
        outSideWindowCount = elemCount - winCount;
        minSwaps = Math.min(minSwaps, outSideWindowCount);
    } else {
        if (arr[end] == elem) {
            winCount++;
        }
        if (arr[start-1] == elem) {
            winCount--;
        }
        outSideWindowCount = elemCount - winCount;
        minSwaps = Math.min(minSwaps, outSideWindowCount);

    }
    start++;
    end++;
}
return minSwaps == Number.MAX_VALUE ? 0 : minSwaps;
}