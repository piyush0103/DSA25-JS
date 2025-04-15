const arr = [0, 7, 2, 3, 1, 2, 4, 3];
const len = 4;
let start = 0;
let max_sum = Number.MIN_VALUE;
let curr_sum = 0;
if (arr.length < len)
{
    console.log("Invalid");

}
for (let end = 0; end < arr.length; end++) {
    curr_sum += arr[end];
    if ((end - start + 1) >= len) {
        max_sum = Math.max(max_sum, curr_sum);
        console.log("max_sum :: " + max_sum + "  start :: " + start + "  end::" + end);
        curr_sum -= arr[start++];
    }

}
console.log("Max sum= " + max_sum);

