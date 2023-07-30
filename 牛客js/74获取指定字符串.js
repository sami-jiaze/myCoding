// 给定字符串 str，检查其是否包含 连续3个数字
// 1、如果包含，返回最先出现的 3 个数字的字符串
// 2、如果不包含，返回 false

function captureThreeNumbers(str) {
  let len = str.length
  for (let i = 0; i <= len - 3; i++) {
    if (2 * str[i + 1] == +str[i] + +str[i + 2]) {
      return str.substring(i,i+3)
    }
  }
  return false
}

console.log(captureThreeNumbers('abc123'))
