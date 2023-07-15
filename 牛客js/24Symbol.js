// 请补全JavaScript代码，要求以键/值对的对象形式返回参数数组。
// 1. 键名的数据类型为Symbol
// 2. 键值为当前数组项
// 3. Symbol的描述为当前数组项
// 4. 返回普通对象

const _symbolKey = array => {
  // 补全代码
  let obj = {}
  for (let i = 0; i < array.length; i++) {
    let s = Symbol(array[i])
    obj[s] = array[i]
  }
  return obj
}

// test
function test() {
  let o = _symbolKey([1, 2])
  return Object.getOwnPropertySymbols(o)[0].toString() === 'Symbol(1)' && Object.getOwnPropertySymbols(o)[1].toString() === 'Symbol(2)'
}
console.log(test());