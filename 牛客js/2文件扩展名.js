// 请补全JavaScript代码，要求以字符串的形式返回文件名扩展名，
// 文件名参数为"filename"。

const _getExFilename = filename => {
  // 补全代码
  let pos = filename.indexOf('.')
  let str = filename.substring(pos)
  return str

}

// test
function test() {
  var result = _getExFilename('problem.xml') == '.xml'
  return result
}

console.log(test());
