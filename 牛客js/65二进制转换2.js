// 给定二进制字符串，将其换算成对应的十进制数字

// 输入：'11000000'
// 输出：192

function base10(str) {
  let num = 0
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] == 1) num = Math.pow(2, str.length - 1 - i) + num
  }
  return num
}

// test
console.log(base10('11000000'), 2 ^ 2)
