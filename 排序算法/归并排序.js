/*
  将待排序数组分成若干个子数组。然后将相邻的子数组归并成一个有序数组。
  最后再将这些有序数组归并(merge)成一个整体有序的数组。

  归并排序是稳定的
  算法复杂度O(nlogn)
*/

let arr = [22, 34, 3, 32, 82, 55, 89, 50, 37, 5, 64, 35, 9, 70]

function mergeSort(arr) {
  if (arr.length <= 1) return arr

  // 分解数组
  let mid = Math.floor(arr.length / 2)
  const leftArr = arr.slice(0, mid)
  const rightArr = arr.slice(mid)
  // 递归切割左、右数组
  const newLeft = mergeSort(leftArr)
  const newRight = mergeSort(rightArr)
  // 合并 使用双指针
  let res = []
  let i = 0
  let j = 0
  while (i < newLeft.length && j < newRight.length) {
    if (newLeft[i] <= newRight[j]) {
      res.push(newLeft[i])
      i++
    } else {
      res.push(newRight[j])
      j++
    }
  }
  // 循环结束 左、右如果还有剩余
  if (i < newLeft.length) {
    res.push(...newLeft.slice(i))
  }
  if (j < newRight.length) {
    res.push(...newRight.slice(j))
  }

  return res
}

function mergeSort2(arr) {
  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)

  let newleft = mergeSort2(left)
  let newright = mergeSort2(right)

  let res = []
  let l = 0
  let r = 0
  while (l < newleft.length && r < newright.length) {
    if (newleft[l] < newright[r]) {
      res.push(newleft[l])
      l++
    } else {
      res.push(newright[r])
      r++
    }
  }

  if (l < newleft.length) {
    res.push(...newleft.slice(l))
  }
  if (r < newright.length) {
    res.push(...newright.slice(r))
  }
  return res
}

console.log(mergeSort(arr))
console.log(mergeSort2(arr))
