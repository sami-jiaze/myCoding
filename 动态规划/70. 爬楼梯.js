// <a href="https://leetcode.cn/problems/climbing-stairs/description/">
//   70. 爬楼梯
// </a>
// <div>假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

//   每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？</div>
// <div><code>输入：n = 3</code></div>
// <div><code>输出：3</code></div>
// <div><code> 解释：有三种方法可以爬到楼顶。
//   1. 1 阶 + 1 阶 + 1 阶
//   2. 1 阶 + 2 阶
//   3. 2 阶 + 1 阶</code></div>

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let dp = [1, 2]
  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 2] + dp[i - 1]
  }
  return dp[n - 1]
}
