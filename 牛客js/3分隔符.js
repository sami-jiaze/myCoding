// 要求返回参数数字的千分位分隔符字符串。
// 输入：_comma(12300)
// 输出：'12,300'

function _comma(number) {
  // 补全代码
  if (number < 1000) return '' + number
  let str = String(number).split('').reverse()
  let num = 0
  for (let i = 0; i < str.length; i++) {
    if (num == 3) {
      str.splice(i, 0, ',')
      num = 0
    } else num++
  }
  str = str.reverse().join('')
  return str
}

console.log(_comma(2514465))
