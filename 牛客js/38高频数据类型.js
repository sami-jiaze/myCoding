// 请补全JavaScript代码，要求找到参数数组中出现频次最高的数据类型，并且计算出出现的次数，要求以数组的形式返回。
// 注意：
// 1. 基本数据类型之外的任何引用数据类型皆为"object"
// 2. 当多种数据类型出现频次相同时将结果拼接在返回数组中，出现次数必须在数组的最后

// 输入：__findMostType([0,0,'',''])
// 输出：['number','string',2]或['string','number',2]

const _findMostType = array => {
  // 补全代码
  let obj = {}
  let max = -1
  let res = []
  for (let i of array) {
    let temp = typeof i
    if (!(temp in obj)) {
      obj[temp] = 1
    } else {
      obj[temp]++
    }
  }
  for (let k in obj) {
    if (obj[k] >= max && !res.includes(k)) {
      max = obj[k]
      res.push(k)
    }
  }
  res.push(max)
  return res
}

// test
function test() {
  return JSON.stringify(_findMostType([1, '1', {}, {}, 2, 3, 4, 3, 3, '', '', '', '', ''])) === '["number","string",6]' || JSON.stringify(_findMostType([1, '1', {}, {}, 2, 3, 4, 3, 3, '', '', '', '', ''])) === '["string","number",6]'
}
console.log(test())
