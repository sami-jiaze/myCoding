// <a href="https://leetcode.cn/problems/permutations/solutions/857631/dai-ma-sui-xiang-lu-dai-ni-xue-tou-hui-s-mfrp/">
//   46. 全排列
// </a>
// <div>给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。</div>
// <div><code>输入：nums = [1,2,3]</code></div>
// <div><code>输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]</code></div>

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = []
  let temp = []
  let len = nums.length
  su(nums, len, [])
  return res

  function su(nums, len, used) {
    if (temp.length == len) {
      res.push(Array.from(temp))
    }
    for (let i = 0; i < len; i++) {
      if (used[i] == true) continue
      else {
        temp.push(nums[i])
        used[i] = true
        su(nums, len, used)
        used[i] = false
        temp.pop()
      }
    }
  }
}

let a = permute([1, 2, 3])
console.log(a)
