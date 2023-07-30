// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

// 输入: s = "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

function lengthOfLongestSubstring(s) {
  let stack = []
  let max = 0
  for (let i = 0; i < s.length; i++) {
    if (stack.indexOf(s[i]) == -1) {
      stack.push(s[i])
      let len = stack.length
      max = len > max ? len : max
    } else {
      stack.push(s[i])
      stack = stack.slice(stack.indexOf(s[i]) + 1)
    }
  }
  return max
}

console.log(lengthOfLongestSubstring('pwwkew')) // 3
console.log(lengthOfLongestSubstring('aab')) // 2
console.log(lengthOfLongestSubstring('dvdf')) // 3
console.log(lengthOfLongestSubstring('abcabcbb')) // 3
console.log(lengthOfLongestSubstring('aabaab!bb')) // 3
