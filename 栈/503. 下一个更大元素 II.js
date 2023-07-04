// <a href="https://leetcode.cn/problems/next-greater-element-ii/description/">
//   503. 下一个更大元素 II
// </a>
// <div>给定一个循环数组 nums （ nums[nums.length - 1] 的下一个元素是 nums[0] ），返回 nums 中每个元素的 下一个更大元素 </div>
// <div>数字 x 的 下一个更大的元素 是按数组遍历顺序，这个数字之后的第一个比它更大的数，这意味着你应该循环地搜索它的下一个更大的数。如果不存在，则输出 -1 。</div>
// <div><code>输入: nums = [1,2,3,4,3]</code></div>
// <div><code>输出: [2,3,4,-1,4]</code></div>

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  let one = []
  let two = []
  for (let i = 0; i < nums.length; i++) {
    two.push(i)
  }
  for (let i = 0; i < nums.length; i++) {
    two.push(i)
  }

  let fin = new Array(nums.length).fill(-1)
  for (let i = 0; i < two.length; i++) {
    while (one.length > 0 && nums[two[i]] > nums[one[one.length - 1]]) {
      const index = one.pop()
      fin[index] = nums[two[i]]
    }
    one.push(two[i])
  }
  return fin
}
