Array.prototype._reduce = function (fn, init = 0) {
  let that = this
  for (let i = 0; i < that.length; i++) {
    init = fn(init, that[i])
  }
  return init
}

// test
const numbers = [1, 2, 3, 4, 5]

// 累加示例
const sum = numbers._reduce((acc, current) => acc + current, 0)
console.log(sum) // 输出: 15

// 累乘示例
const product = numbers._reduce((acc, current) => acc * current, 1)
console.log(product) // 输出: 120

// 拼接示例
const text = numbers._reduce((acc, current) => acc + current, '')
console.log(text) // 输出: "12345"
