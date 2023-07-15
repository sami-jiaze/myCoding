// 请补全JavaScript代码，要求将数组参数中的对象以总成绩
// (包括属性"chinese"、"math"、"english")从高到低进行排序并返回
const _rank = array => {
  // 补全代码
  array.sort((a, b) => {
    return b.chinese + b.english + b.math - (a.chinese + a.math + a.english)
  })
  console.log(array)
  return array
}

// test
function test() {
  let grade = [
    { name: 'nowcoder1', chinese: 73, math: 80, english: 72 },
    { name: 'nowcoder2', chinese: 59, math: 53, english: 36 },
    { name: 'nowcoder3', chinese: 94, math: 96, english: 94 }
  ]
  let array = _rank(grade)
  return array[0].math === 96 && array[1].math === 80 && array[2].math === 53
}

console.log(test())
