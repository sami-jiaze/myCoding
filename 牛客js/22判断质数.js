// 请补全JavaScript代码，要求在Number对象的原型对象上添加"_isPrime"函数，
// 该函数判断调用的对象是否为一个质数，是则返回true，否则返回false。

Number.prototype._isPrime = function (num) {
  if (num < 2) return false
  for (let i = 2; i * i < num; i++) {
    if (num % i == 0) return false
  }
  return true
}

// test
function test() {
  return (2)._isPrime() === true
}
console.log(test())
