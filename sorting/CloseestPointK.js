const findClosestPoints=(arr,k)=>{
   return arr.sort((a,b)=>Math.sqrt(Math.pow(a[0],2)+Math.pow(a[1],2)-Math.pow(b[0],2)+Math.pow(b[1],2))).slice(0,k)
}

const arr = [
	[3, 3],
	[5, -1],
	[-2, 4],
];
let k = 2;
console.log(findClosestPoints(arr, k), 'hello');