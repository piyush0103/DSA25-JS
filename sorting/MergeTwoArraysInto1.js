const arr1 = [1, 2, 10, 15,0,0,0,0];
const arr2 = [5, 7, 8, 16];
console.log(arr1.length+" sdsd")

mergeSortedArrays1(arr1,4, arr2,arr2.length);

console.log(arr1);
console.log(arr2);

console.log('okkokko');

function mergeSortedArrays1 (nums1, m, nums2, n) {
    let l = m - 1;
    let r = n - 1;
    let right = m + n - 1;

    while (r >= 0) {
        if (l >= 0 && nums1[l] > nums2[r]) {
            nums1[right] = nums1[l];
            l--;
        } else {
            nums1[right] = nums2[r];
            r--;
        }
        right--;
    }    
};