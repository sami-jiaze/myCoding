// Object.create() 方法是在指定原型对象的情况下创建一个新对象，
// 而 new 创建对象时会调用构造函数进行初始化。
// Object.create() 方法不会调用任何函数，不会执行构造函数里面的代码。
// 而 new 关键字会执行构造函数里面的代码，并将其返回值作为新创建对象的值。

function myCreate(target) {
  function fn() {}
  fn.prototype = target
  return new fn()
}

// test
const person = {
  isHuman: false,
  print: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`)
  }
}

const me = Object.create(person)
const test = myCreate(person)
console.log('me', me, 'test', test)
me.name = 'Matthew'
test.name = 'Matthew'
me.isHuman = true
test.isHuman = true
me.print()
test.print()
