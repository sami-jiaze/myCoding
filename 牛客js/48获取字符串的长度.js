// 如果第二个参数 bUnicode255For1 === true，则所有字符长度为 1
// 否则如果字符 Unicode 编码 > 255 则长度为 2
// 输入：'hello world, 牛客', false
// 输出：17

function strLength(s, bUnicode255For1) {
  let len = s.length
  if (!bUnicode255For1) {
    for (let i=0;i<len;i++) {
      if (s.charCodeAt(i) > 255) {
        len++
      }
    }
  }
  return len
}

// test
function test() {
  var l = strLength('牛客, hello world', false)
  return l === 17
}
console.log(test())
