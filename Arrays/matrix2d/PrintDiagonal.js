const arr = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

console.log(' printing 2f=d matrix');

for (let i = 0; i < arr.length; i++) {
	for (let j = 0; j < arr[0].length; j++) {
		process.stdout.write(' | ' + arr[i][j]);
	}
	console.log();
}
console.log("=====================================================================")

printLeftRightDiagonal(arr);
console.log("=====================================================================")
printRightLeftDiagonal(arr);

console.log(' printing diagonal matrix');

function printLeftRightDiagonal(arr) {
	for (let i = 0; i < arr.length; i++) {
		console.log(' | ' + arr[i][i]);
	}
}
function printRightLeftDiagonal(arr) {
	let j = arr[0].length - 1;
	for (let i = 0; i < arr.length; i++) {
		console.log(' | ' + arr[i][j]);
		j--;
	}
}
