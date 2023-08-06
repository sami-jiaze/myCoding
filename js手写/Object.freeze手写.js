function freeze(obj) {
  for (let key in obj) {
    let type = Object.prototype.toString.call(obj[key])
    if (type == '[Object object]' || type == '[Object array]') {
      freeze(obj[key])
    }
    else if (obj.hasOwnProperty(key)) {
      Object.defineProperty(obj, key, {
        writable: false
      })
    }
  }
  Object.seal(obj)
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
