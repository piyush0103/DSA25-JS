const arr = [4, 0, 1, 2, 3];
const listOfList = [];
const list = [];
const len = arr.length;
const hashed = new Array(len).fill(false);
arr.sort(function (a, b) {
	return a - b;
});
console.log(arr,'soted')
    const permutationDup = (arr, listOfList, list, len, hashed) => {
        if (list.length == len) {
            listOfList.push(JSON.parse(JSON.stringify(list)));
        }
        for (let i = 0; i < len; i++) {
            if ((i > 0 && arr[i] == arr[i - 1]&& hashed[i-1]==false) || hashed[i] != false) {
                
            } else {
                list.push(arr[i]);
                hashed[i] = true;
                permutationDup(arr, listOfList, list, len, hashed);
                list.pop();
                hashed[i] = false;
            }
        }
    };

    permutationDup(arr, listOfList, list, len, hashed);
    console.log(listOfList, 'duplicate removed');
