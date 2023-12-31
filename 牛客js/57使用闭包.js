// 实现函数 makeClosures，调用之后满足如下条件：
// 1、返回一个函数数组 result，长度与 arr 相同
// 2、运行 result 中第 i 个函数，即 result[i]()，结果与 fn(arr[i]) 相同

function makeClosures(arr, fn) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    let f = () => fn(arr[i])
    res.push(f)
  }
  return res
}

// test
function test() {
  var arr = [Math.random(), Math.random(), Math.random(), Math.random()]
  var square = function (x) {
    return x * x
  }
  var funcs = makeClosures(arr, square)
  return arr.length === funcs.length
}
