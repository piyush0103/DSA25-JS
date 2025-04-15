const s1 = 'anagram';
const s2 = 'nagaram';

const checkAnagram = (s, t) => {
	if (s.length != t.length) {
		return false;
	}
	let map = new Map();

	for (let i of s) {
		map.set(i, map.get(i) + 1 || 1);
	}

	for (let i of t) {
		if (map.has(i)) {
			console.log('here ');
			map.set(i, map.get(i) - 1);
			if (map.get(i) == 0) {
				map.delete(i);
			}
		} else {
			return false;
		}
	}

	return map.size === 0;
};
const checkAnagram2=(s,t)=>{
    if (s.length !== t.length) {
        return false;
    }
    
    var freq = new Array(26).fill(0);
    for (var i = 0; i < s.length; i++) {
        freq[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        freq[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }
    
    for (var i = 0; i < freq.length; i++) {
        if (freq[i] !== 0) {
            return false;
        }
    }
    
    return true;
};

console.log(checkAnagram2(s1, s2));
