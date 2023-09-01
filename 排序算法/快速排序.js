/*
  将一个大数组分成两个小数组，然后递归地对两个小数组进行排序。
  选择一个基准元素(pivot)，将数组分成左右两部分
  左部分的元素都小于或等于基准元素，右部分的元素都大于基准元素。
  对左右两部分分别进行递归调用快速排序，最终将整个数组排序。

  快速排序是不稳定的
  快速排序的时间复杂度是O(nlogn)，在最坏情况下是O(n^2)。
*/

let arr = [22, 34, 3, 32, 82, 55, 89, 50, 37, 5, 64, 35, 9, 70]

function quickSort(arr) {
  partition(0, arr.length - 1)

  function partition(left, right) {
    if (left >= right) return

    // 找基准
    const p = arr[right]
    // 双指针交换 形成左右两个数组
    let i = left
    let j = right - 1
    while (i <= j) {
      // 找比基准大 左边数组要比基准小,找出大的做交换
      while (arr[i] < p) {
        i++
      }
      // 找比基准小
      while (arr[j] > p) {
        j--
      }

      if (i <= j) {
        swap(arr, i, j)
        i++
        j--
      }
    }
    // i已到头重新指定基准值
    swap(arr, i, right)
    // 再次划分
    partition(left, j)
    partition(i + 1, right)
  }
  return arr
}

function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function quickSort2(arr) {
  if (arr.length == 0) return arr
  let half = Math.floor(arr.length / 2)
  let p = arr.splice(half, 1)
  let l = []
  let r = []

  for (let i of arr) {
    if (i < p) {
      l.push(i)
    } else {
      r.push(i)
    }
  }
  return quickSort2(l).concat(p, quickSort2(r))
}

console.log(quickSort(arr))
console.log(quickSort2(arr))
