// 请补全JavaScript代码，该函数接受两个参数分别为字符串、子字符串，要求返回子字符串在字符串中出现的频次。

const _searchStrIndexOf = (str, target) => {
  // 补全代码
  let num = 0
  let index = str.indexOf(target)
  while (index != -1) {
    num++
    index = str.indexOf(target, index + 1)
  }
  return num
}

// test
function test() {
  var result = _searchStrIndexOf('sdffgfdfdgfdw', 'fd') == 3
  return result
}
console.log(test())
