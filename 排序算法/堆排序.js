function heapSort(arr) {
  const n = arr.length
  // 从第一个非叶子节点开始进行下滤操作
  const start = Math.floor(n / 2 - 1)
  for (let i = start; i >= 0; i--) {
    down(arr, n, i)
  }
  // 最大堆进行排序
  for (let i = n - 1; i > 0; i--) {
    swap(arr, 0, i)
    down(arr, i, 0)
  }
  return arr
}

// 数组,长度,索引
function down(arr, n, index) {
  while (2 * index + 1 < n) {
    // 获取左右子节点的索引
    const leftChildIndex = 2 * index + 1
    const rightChildIndex = 2 * index + 2
    // 找出左右子节点较大的值
    let largeIndex = leftChildIndex
    if (rightChildIndex < n && arr[rightChildIndex] > arr[leftChildIndex]) {
      largeIndex = rightChildIndex
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

console.log(heapSort([6, 27, 174, 85, 99, 101, 74, 173, 82, 131]))
