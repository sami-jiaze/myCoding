class EventEmitter {
  // 补全代码
  constructor() {
    this.list = {}
  }
  on(event, fn) {
    if (!this.list[event]) {
      this.list[event] = [fn]
      console.log('5', this.list[event])
    } else {
      this.list[event].push(fn)
    }
  }

  emit(event, data) {
    if (this.list[event]) {
      console.log('4', this.list[event])
      this.list[event].forEach(callback => callback(data))
    }
  }

  off(name, fn) {
    if (this.list[name]) {
      let index = this.list[name].indexOf(fn)
      this.list[name].splice(index, 1)
      console.log(this.list)
    }
  }
}

// test
function test() {
  let sign1 = 0
  let sign2 = 0
  const emitter = new EventEmitter()
  emitter.on('add', function () {
    sign1++
  })
  emitter.emit('add')
  emitter.on('add', function () {
    sign2++
  })
  emitter.emit('add')
  const judge = sign1 === 2 && sign2 === 1

  console.log('s1 ', sign1, ' s2 ', sign2)
  return judge
}

console.log(test())
