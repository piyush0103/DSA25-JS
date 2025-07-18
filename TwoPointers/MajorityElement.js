
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

var majorityElement = function(nums) {
    const hash = {};
      let res = 0;
      let majority = 0;
  
      for (let n of nums) {
          hash[n] = 1 + (hash[n] || 0);
          if (hash[n] > majority) {
              res = n;
              majority = hash[n];
          }
      }
  
      return res;    
  };

  console.log(majorityElement([2,2,1,1,1,2,2]))