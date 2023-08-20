// 78. 子集 https://leetcode.cn/problems/subsets/

// 给你一个整数数组 nums ，数组中的元素 互不相同
// 返回该数组所有可能的子集（幂集）。
// 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

// 输入：nums = [1,2,3]
// 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let res = []
  fn(0, [])
  function fn(index, arr) {
    if (index == nums.length) {
      let fin = arr.concat()
      res.push(fin)
      return
    }
    arr.push(nums[index])
    fn(index + 1, arr)
    arr.pop()
    fn(index + 1, arr)
  }
  return res
}

// test
console.log(subsets([1, 2, 3]))
