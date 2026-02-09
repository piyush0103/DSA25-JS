function print2DMatrix(arr){
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            process.stdout.write(" | " + arr[i][j]+" | ");

        }
       console.log()
    }
}

export default print2DMatrix