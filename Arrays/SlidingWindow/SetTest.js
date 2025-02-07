let s = new Set();

s.add(50);
s.add(30);
s.add(40);
s.add(20);
s.add(10);

// using entries to get iterator
let e = s.entries();

// each iterator is array of [value, value]
console.log(e.next().value);

console.log(e.next().value);

console.log(e.next().value);