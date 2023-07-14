// 请补全JavaScript代码，实现一个函数，要求如下：
// 1. 根据输入的数字范围[start,end]和随机数个数"n"生成随机数
// 2. 生成的随机数存储到数组中，返回该数组
// 3. 返回的数组不能有相同元素
// 注意：
// 1. 不需要考虑"n"大于数字范围的情况

const _getUniqueNums = (start, end, n) => {
  // 补全代码
  let arr = []
  for (let i = 0; i < n; i++) {
    let num = Math.floor(Math.random() * (end - start + 1) + start)
    while (arr.indexOf(num) !== -1) {
      num = Math.floor(Math.random() * (end - start + 1) + start)
    }
    arr.push(num)
  }
  return arr
}

// test
function test() {
  var arr = _getUniqueNums(2, 10, 5)
  var result = arr.length == 2
  return result
}
console.log(test())
