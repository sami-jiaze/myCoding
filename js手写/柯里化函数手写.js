// function curryIt(fn) {
//   return function curried(...args) {
//     if (args.length >= fn.length) {
//       return fn.apply(this, args)
//     } else {
//       return function (...nextArgs) {
//         return curried.apply(this, [...args, ...nextArgs])
//       }
//     }
//   }
// }

function curryIt(fn) {
  return function cur(...args) {
    if(args.length >= fn.length) {
      return fn.apply(this, args)
    } else {
      return function (...nextArgs) {
        return cur.apply(this, [...args, ...nextArgs])
      }
    }
  }
}

// test
function add(a, b, c) {
  return a + b + c
}

var curriedAdd = curryIt(add)

console.log(curriedAdd(1, 2, 3)) // 输出 6
console.log(curriedAdd(1)(2)(3)) // 输出 6
console.log(curriedAdd(1, 2)(3)) // 输出 6
console.log(curriedAdd(1)(2, 3)) // 输出 6
