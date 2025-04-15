const arr = [1, 2, 1, 3, 2, 5];
console.log(findTwoDistinctElement(arr), 'found this');

function findTwoDistinctElement(arr) {
	let res = 0;
	let p = 0,
		q = 0;
	arr.forEach((element) => {

		res ^= element;
	});
	res = res & (~(res - 1));

	for (let i = 0; i < arr.length; i++) {
		if ((arr[i] & res) == 0) {
            
			p ^= arr[i];
		} else {
			q ^= arr[i];
		}
		
	}
    return [p, q];
}
