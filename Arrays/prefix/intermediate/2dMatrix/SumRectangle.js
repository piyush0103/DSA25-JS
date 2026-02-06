class NumMatrix {
    constructor(matrix){
        if(!matrix||matrix.length==0||matrix[0].length==0){
            return;
        }
        let row=matrix.length;
        let col=matrix[0].length;
        console.log(matrix)
        this.prefixMat=Array.from({length:row+1},()=>new Array(col+1).fill(0))
        console.log(this.prefixMat,'ok')
        for(let i=0;i<row;i++){
            for(let j=0;j<col;j++){
                this.prefixMat[i+1][j+1]=this.prefixMat[i][j+1]+this.prefixMat[i+1][j]-this.prefixMat[i][j]+matrix[i][j];
            }
        }
        console.log("prefix 2d matrix.....  ",this.prefixMat)
    }
sumRange(row1,col1,row2,col2){
    console.log(this.prefixMat,'inside method')
    return this.prefixMat[row2+1][col2+1]-this.prefixMat[row2+1][col1]-this.prefixMat[row1][col2+1]-this.prefixMat[row1][col1];
}
}

const arr=[[1,2,3],[4,5,6],[7,8,9]]
const matixObj=new NumMatrix(arr);
const sum=matixObj.sumRange(1,1,2,2);
console.log(sum,'rectangle sum..')
