// 给定字符串 str，检查其是否包含连续重复的字母（a-zA-Z），
// 包含返回 true，否则返回 false

function containsRepeatingLetter(str) {
  let tmep = str[0]
  for (let i = 0; i < str.length - 1; i++) {
    let cur = str[i + 1]
    if (cur == tmep && isNaN(str[i])) return true
    tmep = cur
  }
  return false
}

// test
console.log(containsRepeatingLetter('caats'))