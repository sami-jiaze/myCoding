// 实现函数 callIt，调用之后满足如下条件
// 1、返回的结果为调用 fn 之后的结果
// 2、fn 的调用参数为 callIt 的第一个参数之后的全部参数

function callIt(fn) {
  let arr = Array.from(arguments).splice(1)
  return fn.apply(null, arr)
}

// test
function test() {
  var a = 1
  b = 2
  var c = 3
  var test = function (first, second, third) {
    return first === a && second === b && third === c
  }
  return callIt(test, a, b, c)
}
console.log(test())
