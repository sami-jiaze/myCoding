function myInstanceOf(a, b) {
  let ap = Object.getPrototypeOf(a)
  if (typeof a !== 'object') return false
  let bp = b.prototype
  while (ap) {
    if (ap === bp) return true
    ap = Object.getPrototypeOf(ap)
  }
  return false
}

// test
function Person() {
  this.age = 10
  this.name = 'John'
}
const p = new Person()
console.log(p instanceof Person)
console.log([] instanceof Array, p instanceof Array)
console.log([] instanceof Object, p instanceof Object)
console.log('---')
console.log(myInstanceOf(p, Person))
console.log(myInstanceOf([], Array), myInstanceOf(p, Array))
console.log(myInstanceOf([], Object), myInstanceOf(p, Object))
console.log('---')
console.log('a' instanceof String, myInstanceOf('a', String))
