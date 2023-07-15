// 请补全JavaScript代码，要求以Boolean的形式返回字符串参数是否符合身份证标准。
// 注意：
// 1. 无需考虑地区信息、出生日期、顺序码与校验码的验证

// 输入：_isCard('21062319980907888X')
// 输出: true

const _isCard = number => {
  let rex = /(^[0-9]{15}$)|(^[0-9]{17}[xX]$)|(^[0-9]{18}$)/
  let res = rex.test(number)
  return res
}

// test
function test() {
  return _isCard('2106231998090788X') 
}
console.log(test())
