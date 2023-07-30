// 求 a 和 b 相乘的值，a 和 b 可能是小数，需要注意结果的精度问题

// 输入：3, 0.0001
// 输出：0.0003

function multiply(a, b) {
  let anum = 0
  let bnum = 0
  while (a < 1) {
    a = a * 10
    anum++
  }
  while (b < 1) {
    b = b * 10
    bnum++
  }
  return (a * b) / Math.pow(10, anum + bnum)
}

// test
console.log(multiply(3, 0.0001))
