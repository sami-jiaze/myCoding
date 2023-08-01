// 46. 全排列 "https://leetcode.cn/problems/permutations/solutions/857631/dai-ma-sui-xiang-lu-dai-ni-xue-tou-hui-s-mfrp
// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案
// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let temp = []
  let res = []
  let len = nums.length
  su(nums, len, [])
  return res

  function su(nums, len, used) {
    if (temp.length == len) {
      // 注意拷贝问题
      res.push(Array.from(temp))
    }
    for (let i = 0; i < len; i++) {
      if (used[i] == true) continue
      used[i] = true
      temp.push(nums[i])
      su(nums, len, used)
      used[i] = false
      temp.pop()
    }
  }
}

let a = permute([1, 2, 3])
console.log(a)
