const arr =[[0,1,0],[1,1,1],[0,1,0]]
const target=0;

function printMatrix(matrix){
      let row=matrix.length;
    let col=matrix[0].length;

    for(let i=0;i<row;i++){
        System.out.print(" [ ");
        for(let j=0;j<col;j++){
            System.out.print(matrix[i][j]+", ");
        }
        System.out.println(" ] ");
        System.out.println();
    }
}
}
const countSubMatricesTarget=(matrix,target)=>{
 let row=matrix.length;
 let col= matrix[0].length;
let count=0;
const prefix_SubMatrix=Array.from({length:row+1},()=>new Array(col+1).fill(0));
console.log('printing prefix_matrix...',prefix_SubMatrix)
for(let i=0;i<row;i++){
    for(letj=0;j<col;j++){
        prefix_SubMatrix[i+1][j+1]=prefix_SubMatrix[i+1][j]+prefix_SubMatrix[i][j+1]-prefix_SubMatrix[i][j]+matrix[i][j];
    }
}
console.log('printing submarix....')
printMatrix(prefix_SubMatrix);


}