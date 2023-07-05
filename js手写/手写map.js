Array.prototype._map = function (Fn) {
  if (typeof Fn !== 'function') return
  let res = []
  let current = this
  for (let i = 0; i < current.length; i++) {
    console.log(Fn)
    res[i] = Fn(current[i], i, current)
  }
  return res
}

// test
let arr = [1, 2, 5]
arr = arr._map((item, index, arr) => item * 3)
console.log('arr', arr)
