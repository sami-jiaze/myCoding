class Observerd {
  constructor(name) {
    this.name = name
    this.state = '走路'
    this.observers = []
  }
  setObserver(observer) {
    this.observers.push(observer)
  }
  setState(state) {
    this.state = state
    this.observers.forEach(observer => observer.update(this))
  }
}
class Observer {
  constructor() {}
  update(observerd) {
    console.log(observerd.name + '正在' + observerd.state)
  }
}

// test
function test() {
  let state = ''
  window.console.log = function (event) {
    state = event
  }
  const obd = new Observerd('g')
  const ob = new Observer()
  obd.setObserver(ob)
  obd.setState('跑步')
  const judge = state === 'g正在跑步'
  return judge
}
