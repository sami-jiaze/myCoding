// 请补全JavaScript代码，要求将字符串参数URL中的参数解析并以对象的形式返回。
// 输入: getParams('https://nowcoder.com/online?id=1&salas=1000')
// 输出: {id:1, salas: 100}

const _getParams = url => {
  // 补全代码
  const pos = url.indexOf('?') + 1
  const str = url.substring(pos)
  let  arr = str.split('&')
  const fin = {}
  for(let i of arr){
    let temp = i.split('=')
    fin[temp[0]] = temp[1]
  }
  return fin
}

// test
function test() {
  var obj = _getParams('https://scriptoj.com/problems?offset=100&limit=10')
  var result = JSON.stringify(obj) == JSON.stringify({ offset: '100', limit: '10' })
  return result
}
console.log(test());
