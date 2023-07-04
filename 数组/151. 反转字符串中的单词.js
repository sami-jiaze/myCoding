// <a href="https://leetcode.cn/problems/reverse-words-in-a-string/">
//   151. 反转字符串中的单词
// </a>
// <div>给你一个字符串 s ，请你反转字符串中 单词 的顺序。

//   单词 是由非空格字符组成的字符串。s 中使用至少一个空格将字符串中的 单词 分隔开。

//   返回 单词 顺序颠倒且 单词 之间用单个空格连接的结果字符串。</div>
// <div><code>输入：s = "the sky is blue"</code></div>
// <div><code> 输出："blue is sky the"</code></div>
// <div><code></code></div>

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let word = ''
  let res = []
  for (let i of s) {
    if (i == ' ') {
      if (word !== '') res.unshift(word)
      word = ''
    } else {
      word = word + i
    }
  }
  if (word !== '') res.unshift(word)
  return res.join(' ')
}
