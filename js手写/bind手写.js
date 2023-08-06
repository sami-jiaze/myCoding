Function.prototype._bind = function (target, ...argArray) {
  let fn = Object(target) || window
  let that = this
  return function  (...args) {
    let s = Symbol()
    fn[s] = that;
    let fnargs = [...args,...argArray]
    let res = fn[s](...fnargs)
    delete fn[s]
    return res
  }
}

// test
function t() {
  const o1 = {
    name: 'z',
    fn: function () {
      return this.name
    }
  }
  const o2 = { name: 'g' }
  const result = o1.fn._bind(o2)
  return result() === 'g'
}
console.log(t())
