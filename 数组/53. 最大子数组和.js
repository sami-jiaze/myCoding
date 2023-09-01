// 53. 最大子数组和 https://leetcode.cn/problems/maximum-subarray
//
// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组
// （子数组最少包含一个元素），返回其最大和。

// 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出：6
// 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = nums[0]
  let temp = 0
  for (let i of nums) {
    temp += i
    if (temp > max) {
      max = temp
    }
    if (temp < 0) {
      temp = 0
    }
  }
  return max
}

function maxSubArray2(arr) {
  let max = arr[0]
  let temp = 0
  for (let i = 0; i < arr.length; i++) {
    temp = temp + arr[i]
    if(temp > max) {
      max = temp
    }
    if(temp<0){
      temp = 0
    }
  }
  return max
}

// test
// console.log(maxSubArray([-2, -1])) //-1
// console.log(maxSubArray([-2, 1])) //1
console.log(maxSubArray([-3, -2, 0, -1])) // 0
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])) // 6
console.log(maxSubArray2([-3, -2, 0, -1])) // 0
console.log(maxSubArray2([-2, 1, -3, 4, -1, 2, 1, -5, 4])) // 6
