const arr = [1, 4, -2, -2, 5, -4, 3];
const no = 0;
const subArraysum = (arr, k) => {
	let count = 0;
	let map = new Map();
	let prefix = [];
	prefix[0] = arr[0];
	for (let i = 1; i < arr.length; i++) {
		prefix[i] = prefix[i - 1] + arr[i];
	}
    
	for (let i = 0; i < arr.length; i++) {
		if (prefix[i] == k) {
			count++;
		}
		let sub = prefix[i] - k;
		if (map.has(sub)) {
			count += map.get(sub);
		}
		map.set(prefix[i], map.get(prefix[i])? 1+map.get(prefix[i]):1);
	}
    console.log(map)
    return count;
};

console.log(subArraysum(arr,0))