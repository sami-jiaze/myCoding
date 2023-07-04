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
// 优雅一点
var moveZeroes = function (nums) {
  if (nums.length <= 1) return nums
  let fast = 0
  let slow1 = 0
  // 双指针
  for (fast; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      let temp = nums[fast]
      nums[slow1] = temp
      slow1++
    }
  }
  // 把剩下的全置为零
  while (slow1 <= nums.length - 1) {
    nums[slow1] = 0
    slow1++
  }
  return nums
}

var moveZeroes = function (nums) {
  if (nums.length <= 1) return nums
  let fast = 1
  let slow1 = 0
  let num = 0
  for (fast; fast < nums.length; fast++) {
    if (nums[slow1] !== 0) slow1++
    if (nums[fast] !== 0 && nums[slow1] == 0) {
      nums[slow1] = nums[fast]
      slow1++
      nums[fast] = 0
      num++
    }
  }
  while (num == -1) {
    nums[slow1] = 0
    slow1++
    num--
  }
  return nums
}
