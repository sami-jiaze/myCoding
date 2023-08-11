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
    this.observers.forEach(observer => {
      observer.update(this)
    })
  }
}
class Observer {
  constructor() {}
  update(observerd) {
    console.log(observerd.name + '正在' + observerd.state)
  }
}

// test
const sub = new Observerd('Rio')

const user1 = new Observer()
const user2 = new Observer()

sub.setObserver(user1)
sub.setObserver(user2)

sub.setState('run')
