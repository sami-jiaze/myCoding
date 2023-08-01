// 整数数组 nums 按升序排列，数组中的值 互不相同 。
// 在传递给函数之前，nums 在预先未知的某个下标 k
// （0 <= k < nums.length）上进行了
// [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]
// 下标 从 0 开始 计数。例如， [0,1,2,4,5,6,7]
// 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。
// 给你 旋转后 的数组 nums 和一个整数 target ，
// 如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。

// 输入：nums = [4,5,6,7,0,1,2], target = 0
// 输出：4;

function search(nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    let mid = Math.floor((right + left) / 2)
    if (target == nums[mid]) return mid
    if (nums[mid] >= nums[left]) {
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else {
      if (target >= nums[mid] && target < nums[left]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }
  return -1
}

// test
console.log(search([1, 3], 3)) // 1
console.log(search([5, 1, 3], 0)) // -1

// mid和left比 确定递增区间在哪里