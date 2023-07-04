// <a href="https://leetcode.cn/problems/sort-integers-by-the-number-of-1-bits/description/">
//   1356. 根据数字二进制下 1 的数目排序

// </a>
// <div>给你一个整数数组 arr 。请你将数组中的元素按照其二进制表示中数字 1 的数目升序排序。

//   如果存在多个数字二进制中 1 的数目相同，则必须将它们按照数值大小升序排列。

//   请你返回排序后的数组。</div>
// <div><code>输入：arr = [0,1,2,3,4,5,6,7,8]</code></div>
// <div><code>输出：[0,1,2,4,8,3,5,6,7]</code></div>
// <div><code>解释：[0] 是唯一一个有 0 个 1 的数。
//   [1,2,4,8] 都有 1 个 1 。
//   [3,5,6] 有 2 个 1 。
//   [7] 有 3 个 1 。
//   按照 1 的个数排序得到的结果数组为 [0,1,2,4,8,3,5,6,7]</code></div>

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  function two(n) {
    let count = 0
    while (n != 0) {
      count = count + (n & 1)
      n = n >> 1
    }
    return count
  }
  arr.sort((a, b) => {
    return two(a) - two(b) || a - b
  })
  return arr
}
