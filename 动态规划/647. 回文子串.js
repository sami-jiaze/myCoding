// <a href="https://leetcode.cn/problems/palindromic-substrings/description/">
//   647. 回文子串
// </a>
// <div></div>
// <div><code>输入：s = "aaa"</code></div>
// <div><code>输出：6</code></div>
// <div><code>解释：6个回文子串: "a", "a", "a", "aa", "aa", "aaa"</code></div>

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let len = s.length
  let dp = Array(len)
    .fill()
    .map(item => Array(len).fill(false))
  let sum = 0
  for (let i = 0; i < len; i++) {
    for (let j = 0; j <= i; j++) {
      if (s[i] == s[j]) {
        if (i - j <= 1) {
          dp[j][i] = true
          sum++
        } else if (dp[j + 1][i - 1] == true) {
          dp[j][i] = dp[j + 1][i - 1]
          sum++
        }
      }
    }
  }
  return sum
}
