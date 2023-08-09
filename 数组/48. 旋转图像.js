// 48. 旋转图像 https://leetcode.cn/problems/rotate-image/description/

// 给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。
// 你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。

// 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
// 输出：[[7,4,1],[8,5,2],[9,6,3]]

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let len = matrix.length
  for (let i = 0; i < Math.floor(len / 2); i++) {
    for (let j = 0; j < len; j++) {
      let temp = matrix[i][j]
      matrix[i][j] = matrix[len - 1 - i][j] 
      matrix[len - 1 - i][j] = temp
    }
  }
  for(let i=0;i<len;i++){
    for(let j=0;j<i;j++){
      let temp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = temp
    }
  }
}

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
)
