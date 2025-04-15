// subset usinf bit manipulation

const arr = [4, 0, 1, 2, 3];
const listOfList = [];
const list = [];
const len = arr.length;
// const hashed = new Array(len).fill(false);
// arr.sort(function (a, b) {
// 	return a - b;
// });

const subsetUsingbitManipulation = (arr, len, listOfList, list) => {
	for (let j = 0; j < 1 << len; j++) {
		list = [];
		for (let i = 0; i < len; i++) {
			if ((j & (1 << i)) != 0) {
				list.push(arr[i]);
			}
		}
		listOfList.push(JSON.parse(JSON.stringify(list)));
	}
};

subsetUsingbitManipulation(arr, len, listOfList, list);
console.log(listOfList, 'oh that was nice');
