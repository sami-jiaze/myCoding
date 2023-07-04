// <a href="https://leetcode.cn/problems/merge-sorted-array/description/">
//   88. 合并两个有序数组
// </a>
// <div>给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目</div>
// <div><code>输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3</code></div>
// <div><code>输出：[1,2,2,3,5,6]</code></div>
// <div><code>解释：需要合并 [1,2,3] 和 [2,5,6] 。</code></div>

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let cur1 = 0
  let cur2 = 0
  let fin = []
  while (m > cur1 || n > cur2) {
    if (cur1 >= m) {
      fin.push(nums2[cur2])
      cur2++
      continue
    } else if (cur2 >= n) {
      fin.push(nums1[cur1])
      cur1++
      continue
    }
    if (nums1[cur1] < nums2[cur2]) {
      fin.push(nums1[cur1])
      cur1++
    } else if (nums1[cur1] > nums2[cur2]) {
      fin.push(nums2[cur2])
      cur2++
    } else {
      fin.push(nums1[cur1])
      fin.push(nums2[cur2])
      cur1++
      cur2++
    }
  }
  console.log(fin)
  for (let i = 0; i < fin.length; i++) {
    nums1[i] = fin[i]
  }
}
