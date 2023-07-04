// <a href="https://leetcode.cn/problems/merge-sorted-array/description/">
//   88. 合并两个有序数组
// </a>
// <div>给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。</div>
// <div>请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。</div>
// <div><code>输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3</code></div>
// <div><code>输出：[1,2,2,3,5,6]</code></div>
// <div>解释：需要合并 [1,2,3] 和 [2,5,6] 。
//   合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素</div>

// https://leetcode.cn/problems/merge-sorted-array/description/

// 88. 合并两个有序数组
// 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// 输出：[1,2,2,3,5,6]
// 解释：需要合并 [1,2,3] 和 [2,5,6] 。
// 合并结果是 [1,2,2,3,5,6]
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let temp = []
  for (let i = 0; i < m; i++) {
    temp.push(nums1[i])
  }
  for (let j = 0; j < n; j++) {
    temp.push(nums2[j])
  }
  temp.sort((a, b) => a - b)

  for (let i = 0; i < temp.length; i++) {
    nums1[i] = temp[i]
  }
}
