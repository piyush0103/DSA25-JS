// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.



// ALMOST RIGHT approach

const findMaxWaterContainer = (height) => {
	let len = height.length;
	let waterContained = 0;
	let maxWater = -1;
	let start = 0;
	let end = len - 1;


		waterContained = (end - start) * Math.min(height[start], height[end]);
		console.log(waterContained + ' areasdsd');
		maxWater = Math.max(waterContained, maxWater);

		let k = 1;

		for (let j = start; j < end; j++) {
			if (height[j] > height[start] + k) {
				start = j;
				
			}
            
			k++;
		}
		let l = 1;

		for (let i = end; i > start; i--) {
			if (height[i] > height[end] + l) {
				end = i;
			}
           
			l++;
		}
        waterContained = (end - start) * Math.min(height[start], height[end]);
		console.log(waterContained + ' areasdsd');
		maxWater = Math.max(waterContained, maxWater);
        console.log(start+" "+end)
	
	return maxWater;
};

// const findMaxWaterContainer = (height) => {
// let len = height.length;
// let waterContained = 0;
// let maxWater =-1;
// let start = 0;
// let end = len - 1;

// while (start < end) {
//     waterContained = (end - start) * Math.min(height[start], height[end]);
//     maxWater = Math.max(waterContained, maxWater);
//     let j = start;
//     let k=1;
//     while (height[j] <= height[start] + k&&j<end) {
//         j++;
//         k++;
//     }
//     start = j;
//     let i = end ;
//     let l=1;
//     while (height[i] <= height[end] + l&&i<start) {
//         i--;
//         l++;
//     }
//     end = i;
// }
// return maxWater;
// }; 


const height = [1, 2, 3, 4];
console.log(findMaxWaterContainer(height));
