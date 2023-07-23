// 将函数 fn 的执行上下文改为 obj 对象

// 输入：function () {return this.greeting + ', ' + this.name + '!!!';}, {greeting: 'Hello', name: 'Rebecca'}
// 输出：Hello, Rebecca!!!

function speak(fn, obj) {
  return fn.bind(obj)()
}
