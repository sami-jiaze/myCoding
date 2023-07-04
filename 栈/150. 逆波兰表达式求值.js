// <a href="https://leetcode.cn/problems/evaluate-reverse-polish-notation/description/">
//   150. 逆波兰表达式求值
// </a>
// <div>给你一个字符串数组 tokens ，表示一个根据 逆波兰表示法 表示的算术表达式。</div>
// <div>请你计算该表达式。返回一个表示表达式值的整数。</div>
// <div><code>输入：tokens = ["2","1","+","3","*"]</code></div>
// <div><code>输出：9</code></div>
// <div><code>解释：该算式转化为常见的中缀算术表达式为：((2 + 1) * 3) = 9</code></div>

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  if (tokens.length <= 1) return tokens
  let arr = []
  let temp = ''
  for (let i of tokens) {
    if (!isNaN(i)) {
      arr.push(i)
    } else {
      let two = Number(arr.pop())
      let first = Number(arr.pop())
      if (i == '+') {
        temp = first + two
      } else if (i == '-') {
        temp = first - two
      } else if (i == '*') {
        temp = first * two
      } else if (i == '/') {
        temp = parseInt(first / two)
      }
      arr.push(temp)
    }
  }
  return temp
}
