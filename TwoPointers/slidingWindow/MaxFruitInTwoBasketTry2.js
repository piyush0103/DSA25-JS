const fruits = [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4];
const pickFruitIntoBasket2 = (fruits) => {
	let l = 0;
	let map = new Map();
	let max_len=0;
	let len = 0;

	for (let i = 0; i < fruits.length; i++) {
		if (map.has(fruits[i])) {
			map.set(fruits[i], map.get(fruits[i]) + 1);
		} else {
			map.set(fruits[i], 1);
		}
        console.log(map)
		while (map.size > 2) {
			map.set(fruits[l], map.get(fruits[l]) - 1);
			if (map.get(fruits[l]) == 0) {
				map.delete(fruits[l]);
			}
			l++;
		}
		len = i - l + 1;
        console.log(len)
		max_len = len > max_len ? len : max_len;
	}
	return max_len;
};
