// <a href="https://leetcode.cn/problems/integer-break/description/">
//   343. 整数拆分
// </a>
// <div>给定一个正整数 n ，将其拆分为 k 个 正整数 的和（ k >= 2 ），并使这些整数的乘积最大化。

//   返回 你可以获得的最大乘积 。</div>
// <div><code>输入: n = 10</code></div>
// <div><code>输出: 36</code></div>
// <div><code>解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36</code></div>

/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  let dp = Array(n + 1).fill(0)
  dp[0] = 0
  dp[1] = 0
  dp[2] = 1
  console.log(dp)
  for (let i = 3; i < n + 1; i++) {
    for (let j = 1; j < i; j++) {
      dp[i] = Math.max(j * (i - j), dp[i], j * dp[i - j])
    }
  }
  return dp[n]
}
