// <a href="https://leetcode.cn/problems/valid-parentheses/description/">
//   20. 有效的括号
// </a>
// <div>给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。</div>
// <div><code>输入：s = "()[]{}"
//   </code></div>
// <div><code>输出：true</code></div>

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let m = {
    '[': ']',
    '(': ')',
    '{': '}'
  }
  let arr = []
  for (let i of s) {
    if (Object.keys(m).includes(i)) {
      arr.push(m[i])
    } else {
      let item = arr.pop()
      if (item !== i) {
        return false 
      }
    }
  }
  if (arr.length) {
    return false
  }
  return true
}

console.log(isValid('()[]{[]}'))
