// <a href="https://leetcode.cn/problems/decode-string/description/">
//   394. 字符串解码
// </a>
// <div>给定一个经过编码的字符串，返回它解码后的字符串。</div>
// <div>编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。</div>
// <div><code>输入：s = "3[a]2[bc]"</code></div>
// <div><code>输出："aaabcbc"</code></div>

/**
 * @param {string} s
 * @return {string}
 */
// 直接让 ] 之前的所有字符逐个入栈 stack
// 然后一个个出栈考察，顺序就是先构建内层
// 首先遇到的肯定是[]中的字母，一个个拼成子串，直到遇到 [ 停下来
// 接着遇到数字，数字出栈，组成倍数，直到遇到 “非数字”
// 现在有了字母串和倍数，就构建出局部子串，一整个子串推入栈
// 这样，一个 [] 中的子串就构建好了放在 stack 里
// 它再和可能有的别的字母一起组成子串，再一起被倍数拷贝
// 再回到 stack 里，最后将 stack 里的项剩下都是字符串， join 拼接成字符串返回
var decodeString = function (s) {
  let arr = []
  for (let i of s) {
    let str = ''
    let num = ''
    if (i !== ']') {
      arr.push(i)
      continue
    } else {
      let temp = arr.pop()
      while (temp !== '[') {
        str = temp + str
        temp = arr.pop()
      }
      let temp2 = arr.pop()
      while (!isNaN(temp2)) {
        num = temp2 + num
        temp2 = arr.pop()
      }
      if (temp2) arr.push(temp2)
      arr.push(str.repeat(num))
    }
  }
  return arr.join('')
}
