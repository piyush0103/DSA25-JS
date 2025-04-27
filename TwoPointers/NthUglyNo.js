const findNthUglyNo = (num) => {
	let uglyCount = 0;
	let ugly = 0;
	let n = 1;
	while (uglyCount != num) {
		if (checkUgly(n)) {
			ugly = n;
			uglyCount++;
			console.log(ugly + ' xx'+uglyCount);
		}
		n++;
	}
	return ugly;
};
const checkUgly = (n) => {
	while (n > 1) {
		if (n % 2 == 0) {
			n = n / 2;
		} else if (n % 3 == 0) {
			n = n / 3;
		} else if (n % 5 == 0) {
			n = n / 5;
		} else {
			return false;
		}
		
	}
    return n == 1;
};

console.log(findNthUglyNo(10));
