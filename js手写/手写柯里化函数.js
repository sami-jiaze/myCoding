function curryIt(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args)
    } else {
      return function (...nextArgs) {
        return curried.apply(this, [...args, ...nextArgs])
      }
    }
  }
}

function curry(fn) {
  return function f(...args) {
    if (args.length >= fn.length) return fn.apply(this, args)
    return function (...rest) {
      return f.apply(this, [...args, ...rest])
    }
  }
}

// test
function add(a, b, c) {
  return a + b + c
}

var curriedAdd = curry(add)

console.log(curriedAdd(1, 2, 3)) // 输出 6
console.log(curriedAdd(1)(2)(3)) // 输出 6
console.log(curriedAdd(1, 2)(3)) // 输出 6
console.log(curriedAdd(1)(2, 3)) // 输出 6
