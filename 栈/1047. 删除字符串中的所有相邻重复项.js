//   <a href="https://leetcode.cn/problems/remove-all-adjacent-duplicates-in-string/description/">
//     1047. 删除字符串中的所有相邻重复项
//   </a>
//   <div>给出由小写字母组成的字符串 S，重复项删除操作会选择两个相邻且相同的字母，并删除它们。</div>
//   <div>在 S 上反复执行重复项删除操作，直到无法继续删除。</div>
//   <div>在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。</div>
//   <div><code>输入："abbaca"
// </code></div>
//   <div><code>    输出："ca"
//  </code></div>
//   <div> 解释：
//     例如，在 "abbaca" 中，我们可以删除 "bb" 由于两字母相邻且相同，这是此时唯一可以执行删除操作的重复项。
//   </div>
//   <div>之后我们得到字符串 "aaca"，其中又只有 "aa" 可以执行重复项删除操作，所以最后的字符串为 "ca"</div>

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  let arr = []
  for (let i of s) {
    if (arr.length) {
      let temp = arr.pop()
      if (i != temp) {
        arr.push(temp)
        arr.push(i)
      }
    } else {
      arr.push(i)
    }
  }
  return arr.join('')
}
