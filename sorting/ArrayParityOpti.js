const sortByParuty = (arr) => {

	while (i < arr.length) {
	if(arr[i]%2==0){
        arr.unshift(arr[i])
    }
    else{
        
    }

	}
};
const swap = (arr, i, j) => {
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
};
const arr = [3, 1, 2, 4];
sortByParuty(arr);
console.log(arr, 'heyy');
