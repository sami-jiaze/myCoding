// 获取数字 num 二进制形式第 bit 位的值。注意：
// 1、bit 从 1 开始
// 2、返回 0 或 1
// 3、举例：2 的二进制为 10，第 1 位为 0，第 2 位为 1

// 输入：128, 8
// 输出：1

function valueAtBit(num, bit) {
  let stack = []
  while (num > 1) {
    let temp = Math.floor(num % 2)
    stack.push(temp)
    num = Math.floor(num / 2)
  }
  stack.push(num)
  return stack[bit - 1]
}

// test
console.log(valueAtBit(128, 8))
