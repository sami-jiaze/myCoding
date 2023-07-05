Function.prototype._call = function (context, ...args) {
  console.log(args)
  context = Object(context) || window
  const fn = Symbol('fn')
  // console.log("context", context);
  context[fn] = this
  // console.log(this);
  const result = context[fn](args)
  delete context[fn]
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
