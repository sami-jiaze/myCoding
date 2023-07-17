// 请补全JavaScript代码，要求以boolean的形式返回参数字符串是否为回文字符串。

const _isPalindrome = string => {
  // 补全代码
  let stack = []
  let str = ''
  for (let i of string) {
    stack.push(i)
  }
  while (stack.length > 0) {
    str = str + stack.pop()  
  }
  return str == string
}

// test
function test() {
  return _isPalindrome('asdsa') === true
}
console.log(test());