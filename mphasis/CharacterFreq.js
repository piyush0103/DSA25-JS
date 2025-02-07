const str = 'aabbccc';
console.log(printCharacterFreq(str));
console.log(printCharacterFreq(str).length);

function printCharacterFreq(str) {
	const freq = new Array('z'.charCodeAt(0) - 'A'.charCodeAt(0) + 7);
	const arr = str.split('')
	arr.forEach((x) => {
		freq[x - 'A'.charCodeAt(0)]+=1;
	});

let returnStr = '';
let count = 0;
console.log(freq)
for (let i = 0; i < freq.length; i++) {
	if (freq[i] > 0) {
		returnStr += String.fromCharCode(i + 'A'.charCodeAt(0));
		count = freq[i];
		returnStr += count;
	}
}
return returnStr;
}