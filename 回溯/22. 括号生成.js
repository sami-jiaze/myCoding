// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

// 输入：n = 3
// 输出：["((()))","(()())","(())()","()(())","()()()"]

/**
 * @param {number} n
 * @return {string[]}
 */

var generateParenthesis = function (n) {
  let arr = []
  su(n, n, '')
  return arr

  function su(left, right, str) {
    if (str.length == 2 * n) {
      arr.push(str)
      return
    }
    if (left > 0) {
      let temp = str + '('
      su(left - 1, right, temp)
    }
    if (right > left) {
      let temp = str + ')'
      su(left, right - 1, temp)
    }
  }
}

// test
console.log(generateParenthesis(4))
