function freeze(obj) {
  // 判断参数是否为对象
  if (typeof obj === 'object' && obj !== null) {
    // 获取对象的所有属性
    const props = Object.getOwnPropertyNames(obj)
    console.log(props)
    // 遍历所有属性，使其不可修改
    // for (let prop in obj) {
    for (let prop of props) {
      const type = Object.prototype.toString.call(obj[prop])
      if (type === '[Object object]' || type === '[Object array]') {
        _objectFreeze(obj[prop])
      }
      // 如果属性是可修改的，将其变为不可修改
      Object.defineProperty(obj, prop, {
        writable: false
      })
    }
  }
  Object.seal(obj)
  // 返回被冻结的对象
  return obj
}

// test
const obj = {
  name: 'Alice',
  age: 20
}

const frozenObj = freeze(obj)
// 修改属性将不会生效
frozenObj.name = 'Bob'
console.log(frozenObj.name) // Output: Alice
// 添加新属性也将不会生效
frozenObj.gender = 'female'
console.log(frozenObj.gender) // Output: undefined
// 冻结的对象仍然可以被引用
console.log(frozenObj === obj) // Output: true

console.log('---------')

function m() {
  const o = { name: 'z', fn: function () {} }
  freeze(o)
  o.name = 'g'
  o.fn = 1
  o.o = 1
  console.log(o.o === undefined)
  const result = o.name === 'z' && typeof o.fn === 'function' && o.o === undefined
  return result
}
// m()
// console.log(m());
