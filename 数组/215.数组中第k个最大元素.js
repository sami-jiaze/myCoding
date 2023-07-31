// 给定整数数组 nums 和整数 k，请返回数组中第 k 个最小的元素。

var findKthLargest = function (nums, k) {
  let len = nums.length
  let n = Math.floor(len / 2 - 1)
  for (let i = n; i >= 0; i--) {
    down(nums, len, i)
  }

  for (let i = len - 1; i > 0; i--) {
    swap(nums, i, 0)
    down(nums, i, 0)
  }
  return nums[k]
}

function down(arr, len, index) {
  while (index * 2 + 1 < len) {
    let leftIndex = index * 2 + 1
    let rightIndex = index * 2 + 2
    let largeIndex = leftIndex
    if (rightIndex < len && arr[rightIndex] > arr[leftIndex]) {
      largeIndex = rightIndex
    }
    if (arr[index] >= arr[largeIndex]) {
      break
    }
    swap(arr, index, largeIndex)
    index = largeIndex
  }
}

function swap(arr, a, b) {
  let temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}

// test
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4))
