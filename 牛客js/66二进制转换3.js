// 将给定数字转换成二进制字符串。如果字符串长度不足 8 位，则在前面补 0 到满8位。

// 输入：65
// 输出：01000001

function convertToBinary(num) {
  let stack = []
  while (num > 1) {
    let temp = Math.floor(num % 2)
    stack.unshift(temp)
    num = Math.floor(num / 2)
  }
  stack.unshift(num)
  while (stack.length < 8) {
    stack.unshift(0)
  }
  stack = stack.join('')
  return stack
}

// test

console.log(convertToBinary(128))
