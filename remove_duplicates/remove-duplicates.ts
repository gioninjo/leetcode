function removeDuplicates(nums: number[]): number {
  let prev = 0;
  for(let i = 1; i < nums.length;) {
      if(nums[i] == nums[i - 1]) {
          nums.splice(i, 1)
      } else {
          i++
      }
  }
  return nums.length;
};