Array.prototype.reduce = function (callback, initialValue) {
  let accumulator = initialValue == undefined ? undefined : initialValue;
  let that = this

  for (let i = 0; i < that.length; i++) {
    if (accumulator !== undefined) {
      accumulator = callback(accumulator, that[i], i, that)
    } else accumulator = that[i]
  }

  return accumulator
}

// test
const numbers = [1, 2, 3, 4, 5]

// 累加示例
const sum = numbers.reduce((acc, current) => acc + current,0)
console.log(sum) // 输出: 15

// 累乘示例
const product = numbers.reduce((acc, current) => acc * current, 1)
console.log(product) // 输出: 120

// 拼接示例
const text = numbers.reduce((acc, current) => acc + current, '')
console.log(text) // 输出: "12345"
