// <a href="https://leetcode.cn/problems/daily-temperatures/description/">
//   739. 每日温度
// </a>
// <div>给定一个整数数组 temperatures ，表示每天的温度，返回一个数组 answer ，其中 answer[i] </div>
// <div>是指对于第 i 天，下一个更高温度出现在几天后。如果气温在这之后都不会升高，请在该位置用 0 来代替</div>
// <div><code>输入: temperatures = [73,74,75,71,69,72,76,73]</code></div>
// <div><code>输出: [1,1,4,2,1,1,0,0]</code></div>

// 单调栈
// 通常是一维数组，要寻找任一个元素的右边或者左边第一个比自己大或者小的元素的位置，
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let arr = [0]
  let fin = new Array(temperatures.length).fill(0)

  for (let i = 1; i < temperatures.length; i++) {
    while (temperatures[i] > temperatures[arr[arr.length - 1]]) {
      const pop = arr.pop()
      fin[pop] = i - pop
    }
    arr.push(i)
  }
  return fin
}
