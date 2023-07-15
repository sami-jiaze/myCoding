// 要求以boolean的形式返回两个Set对象参数是否一样，
// 是则返回true，否则返回false。

const _isSameSet = (s1, s2) => {
  // 补全代码
  let a1 = [...s1]
  let a2 = [...s2]
  a1.forEach(item => {
    let index = a2.indexOf(a2)
    if (index == -1) return false
  })
  return true
}

// test
function test() {
  const set1 = new Set(['a', 'b', 'c'])
  const set2 = new Set(['a', 'c', 'b'])
  var result = _isSameSet(set1, set2)
  return result
}
console.log(test());