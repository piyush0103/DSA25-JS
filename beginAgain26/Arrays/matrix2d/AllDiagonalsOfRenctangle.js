import print2DMatrix from "./UtilityMatrix.js";

const arr = [
	[1, 2, 3, 4, 5],
	[6, 7, 8, 9, 10],
	[11, 12, 13, 14, 15],
	[16, 17, 18, 19, 20],
];
print2DMatrix(arr);
console.log(
	'=============================================================================MATRIX==================================================================================='
);

console.log(
	'=============================================================================DIAGONAL==================================================================================='
);
// printAllRightToleftDiagonal(arr);
printAllleftRightDiagonal(arr);

function printAllleftRightDiagonal(arr) {
	const row = arr.length;
	const col = arr[0].length;
	if (row < col) {
		console.log('print from left to right');
		for (let i = 0; i < row; i++) {
			let srow = i;
			printDiagonalInner(arr, srow, srow);
		}
		console.log('print from  right to left');
		for (let i = row - 1; i >= 0; i--) {
			printDiagonalOuter(arr, i, row - 1);
		}
	} else {
	}
}

function printDiagonalOuter(arr, srow, col) {
	let j = 4;
	for (let i = srow; i <= col; i++) {
		console.log(' | ' + arr[i][j] + ' | ');
		j--;
	}
	console.log(
		'=============================================================================DIAGONAL==================================================================================='
	);
}

function printDiagonalInner(arr, srow, srow1) {
	let j = 0;
	for (let i = srow; i >= 0; i--) {
		console.log(arr[j][i]);
		j++;
	}
	console.log(
		'=============================================================================DIAGONAL==================================================================================='
	);
}
