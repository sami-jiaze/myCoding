// 请补全JavaScript代码，要求返回一个长度为参数值并且每一项值都为参数值的数组。
// 注意：
// 1. 请勿直接使用for/while
const _createArray = number => {
  // 补全代码
  let arr = new Array(number)
  arr.fill(number)
  return arr
}

// test
function test() {
  return JSON.stringify(_createArray(3)) === '[3,3,3]' && !_createArray.toString().includes('for') && !_createArray.toString().includes('while')
}
console.log(_createArray(5))
