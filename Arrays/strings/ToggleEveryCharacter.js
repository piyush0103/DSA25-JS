var str = 'HeyEvery';
console.log(toggle(str));
function toggle(str) {
	let result = '';
	for (let i = 0; i < str.length; i++) {
	console.log(String.fromCharCode(str[i].charCodeAt(0)^(1<<5)),' heyy')
	}

return result;
}