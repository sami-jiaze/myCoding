// 请给参数对象添加拦截代理功能，并返回这个代理，
// 要求每当通过代理调用该对象拥有的属性时，"count"值加1，否则减

let count = 0
const _proxy = object => {
  // 补全代码
  let obj = new Proxy(object, {
    get(target, key) {
      if (key in target) {
        count++
      } else {
        count--
      }
    }
  })
  return obj
}

// test
function test() {
  var me = { name: 'me' }
  var proxy = _proxy(me)
  proxy.name
  proxy.name
  proxy.name
  proxy.name
  proxy.name
  proxy.name
  proxy.name
  return count === 7
}
console.log(test());