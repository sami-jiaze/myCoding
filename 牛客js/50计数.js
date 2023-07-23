// 统计数组 arr 中值等于 item 的元素出现的次数
// 输入：[1, 2, 4, 4, 3, 4, 3], 4
// 输出：3

function count(arr, item) {
  let map = new Map()
  for (let i of arr) {
    if (!map.get(i)) {
      map.set(i, 1)
    } else {
      let num = map.get(i)
      map.set(i, num + 1)
    }
  }
  return map.get(item)
}

// test
function test() {
  return count([1, 2, 4, 4, 3, 4, 3], 4)
}
console.log(test())
