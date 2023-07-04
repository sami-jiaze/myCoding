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
  let res = []
  let len = nums.length
  nums.sort((a, b) => a - b)

  for (let i = 0; i < len; i++) {
    let left = i + 1
    let right = len - 1
    let inum = nums[i]
    if (inum > 0) return res
    if (inum == nums[i - 1]) continue
    while (left < right) {
      let l = nums[left]
      let r = nums[right]
      let sum = inum + l + r
      if (sum > 0) {
        right--
      } else if (sum < 0) {
        left++
      } else {
        res.push([inum, l, r])
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
  return res
}
