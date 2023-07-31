// 将 rgb 颜色字符串转换为十六进制的形式，如 rgb(255, 255, 255) 转为 #ffffff
// 1. rgb 中每个 , 后面的空格数量不固定
// 2. 十六进制表达式使用六位小写字母
// 3. 如果输入不符合 rgb 格式，返回原始输入

// slice
function rgb2hex(sRGB) {
  if (sRGB.slice(0, 4) !== 'rgb(' || sRGB.slice(-1) !== ')') return sRGB
  var rgb = sRGB.slice(4, -1).split(',')
  if (rgb.length < 3) return sRGB
  var rs = '#'
  var num
  for (var i = 0; i < 3; i++) {
    if (isNaN((num = parseInt(rgb[i])))) return sRGB
    if (num > 255 || num < 0) return sRGB
    rs += num.toString(16).length === 1 ? '0' + num.toString(16) : num.toString(16)
  }
  return rs
}

// test
console.log(rgb2hex('rgb(255, 255, 255)'))
