// <a href="https://leetcode.cn/problems/unique-binary-search-trees/description/">
//   96. 不同的二叉搜索树
// </a>
// <div>给你一个整数 n ，求恰由 n 个节点组成且节点值从 1 到 n 互不相同的 二叉搜索树 有多少种？返回满足题意的二叉搜索树的种数</div>
// <div><code></code></div>
// <div><code></code></div>
// <div><code></code></div>

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  let dp = Array(n + 1).fill(0)
  console.log(dp)
  dp[0] = 1
  dp[1] = 1
  dp[2] = 2
  for (let i = 3; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      dp[i] = dp[i] + dp[j] * dp[i - 1 - j]
    }
  }
  return dp[n]
}
