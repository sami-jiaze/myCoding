// <a href="https://leetcode.cn/problems/remove-duplicates-from-sorted-array/description/">
//   26. 删除有序数组中的重复项
// </a>
// <div>给你一个 升序排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。然后返回 nums 中唯一元素的个数。</div>
// <div><code>输入：nums = [0,0,1,1,1,2,2,3,3,4]</code></div>
// <div><code>输出：5, nums = [0,1,2,3,4]</code></div>
// <div><code></code></div>

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let arr = []
  arr.push(nums[0])
  let aindex = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] == arr[aindex]) {
      continue
    } else {
      arr.push(nums[i])
      aindex++
    }
  }
  for (let i = 0; i < arr.length; i++) {
    nums[i] = arr[i]
  }
  return arr.length
}
