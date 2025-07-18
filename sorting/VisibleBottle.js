function min_visible_bottles(arr, n) {
    let m = new Map();
    let ans = 0;
    for (let i = 0; i < n; i++) {
        if(m.has(arr[i])){
            m.set(arr[i], m.get(arr[i]) + 1)
        }else{
            m.set(arr[i], 1)
        }
        ans = Math.max(ans, m.get(arr[i]));
    }

    console.log("Minimum number of " + 
    "Visible Bottles are: " + ans );
}

// Driver code

    let n = 8;
    let arr = [1, 1, 2, 3, 4, 5, 5, 4];

    // Find the solution
    min_visible_bottles(arr, n);
