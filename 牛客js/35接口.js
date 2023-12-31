// 请补全JavaScript代码，完成函数的接口功能。要求如下：
//  1. 函数接收两种类型的参数，分别为"get?"和"update?name=xxx&to=yyy"，"name"、"to"为参数，"xxx"、"yyy"分别为参数对应的值。
//  2. 当参数为"get?"时，返回data数据
//  3. 当参数为"update?name=xxx&to=yyy"时，将data中所有"name"为"xxx"的项，更改为"name"值为"yyy"

let data = [{ name: 'nowcoder1' }, { name: 'nowcoder2' }]

const _api = string => {
  // 补全代码
  if (string != 'get?') {
    let index = string.indexOf('?')
    let s = string.substring(index + 1)
    s = s.split('&')
    let one = s[0].split('=')
    let two = s[1].split('=')
    for (let i of data) {
      if (i[one[0]] == one[1]) {
        i[one[0]] = two[1]
      }
    }
  }
  return data
}

// test
function test() {
  _api('update?name=nowcoder2&to=nowcoder999')
  let data = _api('get?')
  return data[1].name === 'nowcoder999'
}
console.log(test())
