function countingSort_enhanced(input) {
    // Find the smallest element (to account for negative values)
    const min = Math.min(...input);
  
    // Shift all values in the input by the min value
    input = input.map(val => val - min);
  
    // Find the maximum element in the array
    const max = Math.max(...input);
  
    // Create a count array to store the frequency of each element
    const count = new Array(max + 1).fill(0);
  
    // Count the occurrences of each element
    for (const num of input) {
      count[num]++;
    }
  
    // Calculate prefix sum to store the position of 
    // each element in the sorted array
    for (let i = 1; i <= max; i++) {
      count[i] += count[i - 1];
    }
  
    // Create an output array to store the sorted elements
    let output = new Array(input.length);
  
    // Place elements in the output array based on counts
    for (let i = input.length - 1; i >= 0; i--) {
      output[count[input[i]] - 1] = input[i];
      count[input[i]]--;
    }
  
    // Having accounted for the minimum value,
    // shift all values back
    output = output.map(val => val + min);
  
    // Return the sorted array
    return output;
  }
  
  // Live example!
  let unsortedArray = [1, 0, -2, 3, -5, 0, 3];
  let sortedArray = countingSort_enhanced(unsortedArray);
  console.log(sortedArray); // [-5, -2, 0, 0, 1, 3, 3]