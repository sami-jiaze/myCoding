// <a href="https://leetcode.cn/problems/3sum/description/">
//   15. 三数之和
// </a>
// <div>给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k]
//   == 0 。请

//   你返回所有和为 0 且不重复的三元组。

//   注意：答案中不可以包含重复的三元组。</div>
// <div><code>输入：nums = [-1,0,1,2,-1,-4]</code></div>
// <div><code>输出：[[-1,-1,2],[-1,0,1]]</code></div>
// <div><code></code></div>

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b)
  let fin = []
  for (let i = 0; i < nums.length; i++) {
    let left = i + 1
    let right = nums.length - 1
    let cur = nums[i]
    if (cur > 0) return fin
    if (cur == nums[i - 1]) continue
    while (left < right) {
      if (nums[left] + nums[right] + cur < 0) {
        left++
      } else if (nums[left] + nums[right] + cur > 0) {
        right--
      } else {
        fin.push([nums[left], nums[right], cur])
        while (left < right && nums[left] == nums[left + 1]) {
          left++
        }
        while (left < right && nums[right] == nums[right - 1]) {
          right--
        }
        left++
        right--
      }
    }
  }
  return fin
}

// test
console.log(threeSum([-1, 0, 1, 2, -1, -4])) // [[-1,-1,2],[-1,0,1]]
