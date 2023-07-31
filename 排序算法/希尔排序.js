function shellSort(arr) {
  let n = arr.length
  // 选择不同的增量
  let gap = Math.floor(n / 2)
  while (gap > 0) {
    for (let i = gap; i < n; i++) {
      let j = i
      const num = arr[i]
      // 使用num向前寻找一个比num小的值
      while (j > gap - 1 && num < arr[j - gap]) {
        arr[j] = arr[j - gap]
        j = j - gap
      }
      arr[j] = num
    }
    gap = Math.floor(gap / 2)
  }
  return arr
}

const arr = [81, 94, 11, 96, 12, 35, 17, 95, 28, 58, 41, 75, 15]
console.log(shellSort(arr))
