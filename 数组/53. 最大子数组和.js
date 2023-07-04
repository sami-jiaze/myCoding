// <a href="https://leetcode.cn/problems/maximum-subarray/">
//   53. 最大子数组和
// </a>
// <div>给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。</div>
// <div><code>输入：nums = [-2,1,-3,4,-1,2,1,-5,4]</code></div>
// <div><code>输出：6</code></div>
// <div><code>解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。</code></div>

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let res = 0
  let ans = nums[0]
  for (let item of nums) {
    res += item
    if (res > ans) {
      ans = res
    }
    if (res <= 0) {
      res = 0
      continue
    }
  }
  return ans
}
