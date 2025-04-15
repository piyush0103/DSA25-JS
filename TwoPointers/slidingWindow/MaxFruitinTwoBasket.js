const fruits = [3,3,3,1,2,1,1,2,3,3,4];
const pickFruitIntoBasket = (fruits) => {
	let max_len = 0;
	let max_len2 = 0;
	let len = 0;
	let map = new Map();
	for (let i = 0; i < fruits.length; i++) {
		if (map.has(fruits[i])) {
			map.set(fruits[i], map.get(fruits[i]) + 1);
		} else {
			map.set(fruits[i], 1);
		}
	}
	map.forEach((value, key) => {
		if (value > max_len) {
			max_len = value;
		}
		if (max_len > max_len2) {
			let temp = max_len2;
			max_len2 = max_len;
			max_len = temp;
		}
	});
	console.log(map);
	return max_len + max_len2;
};
console.log(pickFruitIntoBasket(fruits) + ' oee');
