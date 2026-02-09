import print2DMatrix from './UtilityMatrix.js';

const mat = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
print2DMatrix(mat);
const rows = mat.length;
const cols = mat[0].length;
const arr = Array.from({ length: cols }, () => new Array(rows).fill(0));
findTransposeMatrix(mat, arr);
console.log(
	'========================================================================================================TRANSPOSING================================================================================='
);
print2DMatrix(arr);

function findTransposeMatrix(mat, arr) {
	for (let i = 0; i < mat[0].length; i++) {
		for (let j = 0; j < mat.length; j++) {
			arr[i][j] = mat[j][i];
		}
	}
}
