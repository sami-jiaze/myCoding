class Eventbus {
  constructor() {
    this.map = new Map()
  }
  on(str, fn) {
    let set = this.map.get(str)
    if (!set) {
      this.map.set(str, (set = []))
    }
    set.push(fn)
  }
  emit(str) {
    let set = this.map.get(str)
    if (!set) return
    set.forEach(fn => {
      fn()
    })
  }
  del(str, fn) {
    let srr = this.map.get(str)
    srr.splice(str.indexOf(fn), 1)
  }
}

// 测试
let num1 = 0
let num2 = 0
let eventbus = new Eventbus()
eventbus.on('add1', function () {
  num1++
})
eventbus.on('add1', function () {
  num1 = num1 + 2
})
eventbus.on('add2', function () {
  num1++
  num2++
})
eventbus.emit('add1')
eventbus.emit('add1')
eventbus.emit('add2')
eventbus.del('add1', function () {
  num1 = num1 + 2
})
eventbus.emit('add1')
console.log(num1, num2)
