const arr = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1];
const k = 3;

const findLongestOneWithKflips = (arr, k) => {
	let len = 0;
	let max_len = 0;
	let flips = k;
	let start = 0;
	let end = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == 1) {
			flips = k;
			len = 0;
			start = i;
			end = i ;
			while (start >= 0) {
				if (arr[start] == 1) {
				} else if (arr[start] == 0 && flips >= 0) {
					if (i == 11) {
						console.log(start + ' xxxx  ' + len);
					}

					flips--;
				}
				if (arr[start] == 0 && flips < 0) {
					break;
				}
				start--;
			}
			while (end < arr.length) {
				if (arr[end] == 1) {
				} else if (arr[end] == 0 && flips >= 0) {
					flips--;
				}
				if (arr[end] == 0 && flips < 0) {
					break;
				}
				end++;
			}

			console.log(start + '   ' + end + ' dd');
			len = end - (start + 1);
			max_len = len > max_len ? len : max_len;
		}
	}
	return max_len;
};

console.log(findLongestOneWithKflips(arr, k) + ' solved ');
