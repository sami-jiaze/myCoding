// <a href="https://leetcode.cn/problems/maximum-product-of-three-numbers/">
//   628. 三个数的最大乘积
// </a>
// <div>给你一个整型数组 nums ，在数组中找出由三个数组成的最大乘积，并输出这个乘积。</div>
// <div><code>输入：nums = [-8,-7,-2,10,20]</code></div>
// <div><code>输出：1120</code></div>
// <div><code></code></div>

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  nums.sort(function (a, b) {
    return a - b
  })
  console.log(nums)
  let result_a = nums[0] * nums[1] * nums[nums.length - 1]
  let result_b = nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3]
  if (result_a > result_b) {
    return result_a
  }
  return result_b
}
