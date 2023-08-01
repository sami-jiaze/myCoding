// 5. 最长回文子串 "https://leetcode.cn/problems/longest-palindromic-substring/description

// 给你一个字符串 s，找到 s 中最长的回文子串。
// 如果字符串的反序与原始字符串相同，则该字符串称为回文字符串
// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let max = 0
  let left = 0
  let right = 0
  let len = s.length
  let dp = Array(len)
    .fill()
    .map(item => Array(len).fill(false))

  for (let i = 0; i < len; i++) {
    for (let j = 0; j <= i; j++) {
      if (s[i] == s[j]) {
        if (i - j <= 1) {
          dp[j][i] = true
        } else if (dp[j + 1][i - 1]) {
          dp[j][i] = true
        }
      }
      if (dp[j][i]) {
        // console.log(j,i)
        if (i - j > max) {
          max = i - j
          left = j
          right = i
        }
      }
    }
  }
  // console.log(left,right)
  return s.slice(left, right + 1)
}

// 中心扩散法
var longestPalindrome = function (s) {
  let res = ''
  for (let i = 0; i < s.length; i++) {
    getStr(i, i)
    getStr(i, i + 1)
  }

  function getStr(m, n) {
    while (m >= 0 && n < s.length && s[m] == s[n]) {
      m--
      n++
    }
    if (n - m - 1 > res.length) {
      res = s.substring(m + 1, n)
    }
  }
  return res
}
