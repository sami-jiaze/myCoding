Function.prototype._bind = function (thisArg, ...argArray) {
  const fn = this

  thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window

  function proxyFn(...args) {
    const tag = Symbol('mybind')
    thisArg[tag] = fn
    const finalArgs = [...argArray, ...args]
    const result = thisArg[tag](...finalArgs)
    delete thisArg[tag]
    return result
  }

  return proxyFn
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
