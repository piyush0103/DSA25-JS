const str = 'pwwkew';

const findLongestDistinctString = (str) => {
	let len = 0;
	let max_len = 0;
	let start = 0;
	const map = new Map();
	for (let i = 0; i < str.length; i++) {
		while (map.has(str[i])) {
            map.delete(str[i])
			start++
        }
        map.set(str[i], i);
        len=i-start+1;
        max_len=len>max_len?len:max_len
        console.log(start+"          xxx")
	}
	console.log(map);
	return max_len;
};
console.log(findLongestDistinctString(str) + ' solved');
