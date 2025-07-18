var solve = function (arr) {
    let runningSum = 0, expectedSum = 0, chunks = 0;
        for (let i = 0; i < arr.length; i++) {
            runningSum += arr[i];
            expectedSum += i;
            console.log(runningSum+"    "+expectedSum)
            if (runningSum === expectedSum) {
                chunks++;
            }
        }
        return chunks;
    
};

console.log(solve([4,3,2,1,0]))