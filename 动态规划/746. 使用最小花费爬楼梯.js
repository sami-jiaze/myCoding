// <a href="https://leetcode.cn/problems/min-cost-climbing-stairs/description/">
//   746. 使用最小花费爬楼梯
// </a>
// <div>给你一个整数数组 cost ，其中 cost[i] 是从楼梯第 i 个台阶向上爬需要支付的费用。一旦你支付此费用，即可选择向上爬一个或者两个台阶。

//   你可以选择从下标为 0 或下标为 1 的台阶开始爬楼梯。

//   请你计算并返回达到楼梯顶部的最低花费。</div>
// <div><code>输入：cost = [1,100,1,1,1,100,1,1,100,1]</code></div>
// <div><code>输出：6</code></div>
// <div><code>解释：你将从下标为 0 的台阶开始。
//   - 支付 1 ，向上爬两个台阶，到达下标为 2 的台阶。
//   - 支付 1 ，向上爬两个台阶，到达下标为 4 的台阶。
//   - 支付 1 ，向上爬两个台阶，到达下标为 6 的台阶。
//   - 支付 1 ，向上爬一个台阶，到达下标为 7 的台阶。
//   - 支付 1 ，向上爬两个台阶，到达下标为 9 的台阶。
//   - 支付 1 ，向上爬一个台阶，到达楼梯顶部。
//   总花费为 6 。</code></div>

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let dp = [0, 0]
  for (let i = 2; i < cost.length + 1; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
  }
  return dp[cost.length]
}
