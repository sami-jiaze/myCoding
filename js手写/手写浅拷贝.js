//方法1 调用Object.assign({},{})
const _shallowClone = target => {
  // 补全代码
  let newobj = {}
  for(let key in target){
      newobj[key] = target[key]
  }
  return newobj
}

//test
function test() {
  const o1 = { name: 'g', age: 18, fn: function () {}, a: [1, 2], o: { name: 'o' } }
  const o2 = _shallowClone(o1)
  o1.name = 'z'
  const result = o2.name === 'g' && o1.fn === o2.fn && o1.a === o2.a && o1.o === o2.o
  return result
}
