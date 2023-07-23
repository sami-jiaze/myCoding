// 封装函数 f，使 f 的 this 指向指定的对象

function bindThis(f, oTarget) {
  return function (...args) {
    let temp = Symbol('temp')
    oTarget[temp] = f
    let res = oTarget[temp](...args)
    delete oTarget.temp
    return res    
  }
}

// test
function test() {
  var r = bindThis(
    function (a, b) {
      return this.test + a + b
    },
    { test: 2 }
  )(2, 3)
  return r === 7
}
console.log(test());