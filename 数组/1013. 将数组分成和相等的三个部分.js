// <a href="https://leetcode.cn/problems/partition-array-into-three-parts-with-equal-sum/description/">
//   1013. 将数组分成和相等的三个部分
// </a>
// <div>给你一个整数数组 arr，只有可以将其划分为三个和相等的 非空 部分时才返回 true，否则返回 false。</div>
// <div><code>输入：arr = [0,2,1,-6,6,-7,9,1,2,0,1]</code></div>
// <div><code>输出：true</code></div>
// <div><code>解释：0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1</code></div>

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function (arr) {
  let sum = 0
  for (let i of arr) {
    sum = sum + i
  }
  console.log('num', sum / 3)
  if (sum % 3 !== 0) return false

  let temp = 0
  let t = 0
  for (let i of arr) {
    temp = i + temp
    if (temp == sum / 3) {
      temp = 0
      t++
      if (t == 3) return true
    }
  }
  return false
}
