Function.prototype._call = function (context, ...args) {
  let temp = Object(context) || window
  const fn = Symbol('fn')
  temp[fn] = this
  const result = temp[fn](args)
  delete temp[fn]
  return result
}

// test
const obj = {
  value: 1
}
function fn(val) {
  console.log(this.value, val)
}

fn._call(obj, [1, 2, 3], 200, { a: 1 })

function greeting(name) {
  console.log(`Hello, ${name}!`)
}

greeting._call(null, 'John') // Output: "Hello, John!"

const person = {
  name: 'Alice',
  age: 15
}

greeting._call(person, 'Bob') // Output: "Hello, Bob!"
