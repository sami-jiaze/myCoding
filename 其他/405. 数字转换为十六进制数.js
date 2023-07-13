// 给定一个整数，编写一个算法将这个数转换为十六进制数
// 输入: 26
// 输出: "1a"

// 将二进制数按照四位一组分成8组,依次将每一组转换为对应的十六进制数
// 即可得到 num 的十六进制数

/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
  if (num == 0) return '0'
  let arr = []
  for (let i = 7; i >= 0; i--) {
    let val = (num >> (4 * i)) & 0xf
    if (arr.length > 0 || val > 0) {
      val = val < 10 ? String.fromCharCode('0'.charCodeAt() + val) : String.fromCharCode('a'.charCodeAt() + val - 10)
      arr.push(val)
    }
  }
  return arr.join('')
}
