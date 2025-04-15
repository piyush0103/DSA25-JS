const arr = [1,1,2];
const listOfList = [];
const list = [];
const len = arr.length;
const hashed = new Array(len).fill(false);
console.log(hashed);
const permutation = (arr, listOfList, list, len, hashed) => {
    
	if (list.length == len) {
		listOfList.push(JSON.parse(JSON.stringify(list)));
	}
	for (let i = 0; i < len; i++) {
		if (hashed[i] == false) {
			list.push(arr[i]);
			hashed[i] = true;
			permutation(arr, listOfList, list, len, hashed);
			list.pop();
			hashed[i] = false;
		}
	}
};

permutation(arr, listOfList, list, len, hashed);
console.log(listOfList ,'heyy');
