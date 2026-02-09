import print2DMatrix from './UtilityMatrix.js';

const mat = [
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12],
	[13, 14, 15, 16],
];
print2DMatrix(mat);
const rows = mat.length;
const cols = mat[0].length;
const rotatedMatrix = Array.from({ length: cols }, () =>
	new Array(rows).fill(0)
);
rotateMatrix(mat, rotatedMatrix);
console.log(
	'=============================================================ROTATE MATRIX======================================================================='
);
print2DMatrix(rotatedMatrix);

function rotateMatrix(mat, rotatedMatrix) {
	const row = mat.length;
	const col = mat[0].length;
	let k = col - 1;
	for (let i = 0; i < row; i++) {
		let l = 0;
		for (let j = 0; j < col; j++) {
			rotatedMatrix[j][k] = mat[i][j];
		}
		k--;
	}
}
