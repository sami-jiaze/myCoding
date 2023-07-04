// <a href="https://leetcode.cn/problems/roman-to-integer/description/">
//   13. 罗马数字转整数
// </a>
// <div></div>
// <div><code>输入: s = "LVIII"</code></div>
// <div><code>输出: 58</code></div>
// <div><code>解释: L = 50, V= 5, III = 3</code></div>

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const map = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000
  }
  let con = false
  let num = 0
  for (let i = 0; i < s.length; i++) {
    if (con) {
      con = false
      continue
    }
    if (s[i] == 'I' || s[i] == 'X' || s[i] == 'C') {
      let temp = s[i] + s[i + 1] ?? ''
      if (map[temp]) {
        num = num + map[temp]
        con = true
        continue
      }
    }
    num = num + map[s[i]]
  }
  return num
}
