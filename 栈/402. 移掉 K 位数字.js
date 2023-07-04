// <a href="https://leetcode.cn/problems/remove-k-digits/description/">
//   402. 移掉 K 位数字
// </a>
// <div>给你一个以字符串表示的非负整数 num 和一个整数 k ，移除这个数中的 k 位数字，使得剩下的数字最小。请你以字符串形式返回这个最小的数字。</div>
// <div><code>输入：num = "1432219", k = 3</code></div>
// <div><code>输出："1219"</code></div>
// <div><code>解释：移除掉三个数字 4, 3, 和 2 形成一个新的最小的数字 1219 。</code></div>

// 单调栈
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  let arr = []
  for (let i = 0; i < num.length; i++) {
    let temp = num[i]
    while (k > 0 && arr.length > 0 && arr[arr.length - 1] > temp) {
      arr.pop()
      k--
    }
    arr.push(temp)
    if (arr[0] == 0) arr.pop()
  }
  while (k > 0) {
    arr.pop()
    k--
  }
  if (arr.length == 0) return '0'
  return arr.join('')
}
