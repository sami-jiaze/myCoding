// 56. 合并区间 https://leetcode.cn/problems/merge-intervals/

// 以数组 intervals 表示若干个区间的集合，
// 其中单个区间为 intervals[i] = [starti, endi]
// 请你合并所有重叠的区间，并返回 一个不重叠的区间数组
// 该数组需恰好覆盖输入中的所有区间 。

// 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
// 输出：[[1,6],[8,10],[15,18]]
// 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6]

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  let prev = intervals[0]
  let res= []

  for (let i = 1; i < intervals.length; i++) {
    let cur = intervals[i]
    if (prev[1] >= cur[0]) {
      prev[1] = Math.max(prev[1], cur[1])
    } else {
      res.push(prev)
      prev = cur
    }
  }
  res.push(prev)
  return res
}

// test
console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18]
  ])
)
