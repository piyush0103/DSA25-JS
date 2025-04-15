const arr = [4, 0, 1, 2, 3];
const listOfList = [];
const list = [];
const len = arr.length;
// const hashed = new Array(len).fill(false);
// arr.sort(function (a, b) {
// 	return a - b;
// });
const hashed = new Array(len).fill(false);
const setUsingbackTracking = (arr, len, listOfList, list, start) => {
	for (let i = start; i < len; i++) {
		list.push(arr[i]);
		setUsingbackTracking(arr, len, listOfList, list,i+1);
        listOfList.push(JSON.parse(JSON.stringify(list)))
        list.pop();
	}
};

listOfList.push(list);
setUsingbackTracking(arr, len, listOfList, list, 0);
console.log(listOfList, 'oh that was nice');
