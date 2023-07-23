// 找出数组 arr 中重复出现过的元素（不用考虑返回顺序）
// 输入：[1, 2, 4, 4, 3, 3, 1, 5, 3]
// 输出：[1, 3, 4]

function duplicates(arr) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i], i + 1) !== -1 && res.indexOf(arr[i]) == -1) {
      res.push(arr[i])
    }
  }
  return res
}

// test
function test() {
  return duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]).sort().join(' ')
}
console.log(test()) // 1 3 4
