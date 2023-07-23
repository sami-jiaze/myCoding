// 为 Array 对象添加一个去除重复项的方法
// 输入： [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN]
// 输出： [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a']

Array.prototype.uniq = function () {
  let that = this
  let res = []
  for (let i of that) {
    if (!res.includes(i)) {
      res.push(i)
    }
  }
  console.log(res)
  return res
}

// test
function test() {
  var a = [true, false, null, undefined, NaN, 0, 1, {}, {}, 'a', 'a', NaN].uniq()
  return a.length === 10 && a[1] === false && a[0] === true && a[3] === undefined && a[2] === null && isNaN(a[4])
}
console.log(test())
