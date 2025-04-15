const arr = [1, 3, 4, 2, 2];

const duplicate = findDuplicateUsingSlowFast(arr);
console.log("found duplicate ",duplicate)

function findDuplicateUsingSlowFast(num) {
	let slow = num[0];
	let fast = num[0];

	do {
		slow = num[slow];
		fast = num[num[fast]];
	} while (slow != fast);

	let slow2 = num[0];

	while (slow != slow2) {
		slow = num[slow];
		slow2 = num[slow2];
	}
	return slow2;
}
