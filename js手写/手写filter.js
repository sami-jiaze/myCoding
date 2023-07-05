Array.prototype._filter = function (Fn) {
  let res = []
  let current = this
  for (let i = 0; i < current.length; i++) {
    if (Fn(current[i])) {
      res.push(current[i])
    }
  }
  return res
}

// test
let arr = [1, 2, 5]
arr = arr._filter(item => item > 3)
console.log('arr', arr)
