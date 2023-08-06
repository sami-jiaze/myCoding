function myNew(target, ...props) {
  let obj = Object.create(target.prototype)
  target.apply(obj, props)
  return obj
}

// test
function Person(name, age) {
  this.name = name
  this.age = age
}
let person1 = myNew(Person, '张三', 15)
console.log(person1)

let person2 = new Person('李四', 15)
console.log(person2)
