// <a href="https://leetcode.cn/problems/plus-one/description/">
//   66. 加一
// </a>
// <div>给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。</div>
// <div>最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。</div>
// <div><code>输入：digits = [1,2,3]</code></div>
// <div><code>输出：[1,2,4]</code></div>
// <div><code>解释：输入数组表示数字 123。</code></div>

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let arr = []
  let add = 1
  while (digits.length) {
    arr.push(digits.pop())
  }
  console.log(arr)
  while (arr.length) {
    let num = arr.shift()
    if (num + add >= 10) {
      num = (num + add) % 10
      add = 1
      digits.unshift(num)
      continue
    }

    digits.unshift(num + add)
    if (add > 0) {
      add--
    }
  }
  if (add == 1) digits.unshift(1)
  return digits
}
