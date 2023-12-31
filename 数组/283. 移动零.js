// <a href="https://leetcode.cn/problems/move-zeroes/description/">
//   283. 移动零
// </a>
// <div>给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序</div>
// <div>请注意 ，必须在不复制数组的情况下原地对数组进行操作。</div>
// <div><code>输入: nums = [0,1,0,3,12]</code></div>
// <div><code>输出: [1,3,12,0,0]</code></div>
// <div><code></code></div>

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let left = 0
  let right = 0
  for(let i = 0; i < nums.length;i++){
    if(nums[right]!=0){
      nums[left] = nums[right]
      left++
    }
    right++
  }
  for(let i = left;i<nums.length;i++){
    nums[i] = 0
  }
  
  return nums
}

// test
console.log(moveZeroes([0, 1, 0, 3, 12]))
