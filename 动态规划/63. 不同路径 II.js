// <a href="https://leetcode.cn/problems/unique-paths-ii/description/">
//   63. 不同路径 II
// </a>
// <div>现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？

//   网格中的障碍物和空位置分别用 1 和 0 来表示。</div>
// <div><code>输入：obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]</code></div>
// <div><code>输出：2</code></div>
// <div><code></code></div>

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  let m = obstacleGrid.length
  let n = obstacleGrid[0].length
  let dp = Array(m)
    .fill(0)
    .map(item => Array(n).fill(0))
  for (let i = 0; i < m; i++) {
    if (obstacleGrid[i][0] == 1) {
      break
    } else {
      dp[i][0] = 1
    }
  }
  for (let i = 0; i < n; i++) {
    if (obstacleGrid[0][i] == 1) {
      break
    } else {
      dp[0][i] = 1
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] == 1) {
        dp[i][j] = 0
        continue
      } else dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }
  return dp[m - 1][n - 1]
}

console.log(
  uniquePathsWithObstacles([
    [0, 0],
    [1, 1],
    [0, 0]
  ])
)
