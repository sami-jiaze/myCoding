// 42. 接雨水 https://leetcode.cn/problems/trapping-rain-water/

// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，
// 计算按此排列的柱子，下雨之后能接多少雨水。

// 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
// 输出：6
// 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1]
// 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。

// 双指针
var trap = function (height) {
  let max = 0
  let left = 0
  let right = height.length - 1
  let leftH = 0
  let rightH = 0
  while (left < right) {
    if (height[left] < height[right]) {
      let cur = height[left]
      if (cur > leftH) {
        leftH = cur
      } else {
        max += leftH - cur
      }
      left++
    } else {
      let cur = height[right]
      if (cur > rightH) {
        rightH = cur
      } else {
        max += rightH - cur
      }
      right--
    }
  }
  return max
}

// test
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
