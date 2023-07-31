// css 中经常有类似 background-image 这种通过 - 连接的字符，通过 javascript 设置样式的时候需要将这种样式转换成 backgroundImage 驼峰格式，请完成此转换功能
// 1. 以 - 为分隔符，将第二个起的非空单词首字母转为大写
// 2. -webkit-border-image 转换后的结果为 webkitBorderImage

function cssStyle2DomStyle(sName) {
  // 填写JavaScript
  let str = ''
  let arr = sName.split('-')
  while (arr[0] == '') {
    arr = arr.splice(1)
  }

  for (let i = 0; i < arr.length; i++) {
    if (i !== 0) {
      let temp = arr[i].toLocaleUpperCase().substring(0, 1)
      temp = temp + arr[i].substring(1)
      str += temp
    } else {
      str += arr[i]
    }
  }
  return str
}

// test
function test() {
  return cssStyle2DomStyle('-webkit-border-image')
}
console.log(test())
