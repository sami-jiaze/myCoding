// 20. 有效的括号 https://leetcode.cn/problems/valid-parentheses/description/

// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效
// 输入：s = "()[]{}"
// 输出：true

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let obj = {
    '[': ']',
    '{': '}',
    '(': ')'
  }

  let stack = []
  for (let i of s) {
    if (i == '[' || i == '(' || i == '{') {
      stack.push(i)
    } else {
      let temp = stack.pop()
      if (i != obj[temp]) {
        return false
      }
    }
  }
  return stack.length == 0
}

console.log(isValid('()[]{[]}'))
console.log(isValid('('))
