import print2DMatrix from "./UtilityMatrix.js";

const mat = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
    ];
    print2DMatrix(mat);
transposeMaytrixWithoutSpace(mat);
console.log("=============================================================TRANSPOSE MATRIX=======================================================================");
print2DMatrix(mat);
console.log("=============================================================ROTATE WITHOUT SPACE MATRIX=======================================================================");
rotateMatrixWithoutSpace(mat);
print2DMatrix(mat);


function rotateMatrixWithoutSpace( mat) {
let temp = 0;
for (let i = 0; i < mat.length; i++) {
let start = 0;
let end = mat[0].length - 1;
while (start < end) {
    temp = mat[i][start];
    mat[i][start] = mat[i][end];
    mat[i][end] = temp;
    start++;
    end--;

}
}

}

 function transposeMaytrixWithoutSpace( mat) {
let temp = 0;
for (let i = 0; i < mat.length; i++) {
for (let j = i; j < mat[0].length; j++) {
    temp = mat[j][i];
    mat[j][i] = mat[i][j];
    mat[i][j] = temp;
}

}
}

