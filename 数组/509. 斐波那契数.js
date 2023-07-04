// <a href="https://leetcode.cn/problems/fibonacci-number/description/">
//   509. 斐波那契数
// </a>
// <div>斐波那契数 （通常用 F(n) 表示）形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是/div>
//   <div><code>输入：n = 4
//     输出：3
//     解释：F(4) = F(3) + F(2) = 2 + 1 = 3</code></div>
//   <div><code></code></div>
//   <div><code></code></div>

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  // if (n == 0) return 0
  // if (n == 1) return 1
  // return fib(n - 1) + fib(n - 2)
  let dp = [0, 1]
  if (n >= 2) {
    for (let i = 2; i < n + 1; i++) {
      dp[i] = dp[i - 1] + dp[i - 2]
    }
  }
  return dp[n]
}
