// <a href="https://leetcode.cn/problems/third-maximum-number/description/">
//   414. 第三大的数
// </a>
// <div>给你一个非空数组，返回此数组中 第三大的数 。如果不存在，则返回数组中最大的数。</div>
// <div><code>输入：[3, 2, 1]</code></div>
// <div><code> 输出：1</code></div>
// <div><code>解释：第三大的数是 1 。</code></div>

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let a = -Infinity,
    b = -Infinity,
    c = -Infinity
  for (let i of nums) {
    if (i > a) {
      c = b
      b = a
      a = i
    } else if (i > b && a > i) {
      c = b
      b = i
    } else if (i > c && b > i) {
      c = i
    }
  }
  return c == -Infinity ? a : c
}
