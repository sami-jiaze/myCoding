class observed {
  constructor() {
    this.list = []
  }
  add(user) {
    this.list.push(user)
  }
  notify(msg) {
    this.list.forEach(user => {
      user.listen(msg)
    })
  }
}

class observer {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  listen(msg) {
    console.log(this.name + ' ' + msg)
  }
}

let a = new observed()
let user1 = new observer('user1', 20)
let user2 = new observer('user2', 25)

a.add(user1)
a.add(user2)

a.notify('new msg')
