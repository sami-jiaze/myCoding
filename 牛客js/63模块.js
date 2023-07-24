// 完成函数 createModule，调用之后满足如下要求：
// 1、返回一个对象
// 2、对象的 greeting 属性值等于 str1， name 属性值等于 str2
// 3、对象存在一个 sayIt 方法，该方法返回的字符串为 greeting属性值 + ', ' + name属性值

function createModule(str1, str2) {
  let obj = {}
  obj.greeting = str1
  obj.name = str2
  obj.sayIt = function () {
    return this.greeting + ',' + this.name
  }
  return obj
}

// test
function test() {
  var o = createModule('hello', 'matt')
  return o.name
}
console.log(test());