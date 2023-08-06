function Human(name) {
  this.name = name
  this.kingdom = 'animal'
  this.color = ['yellow', 'white', 'brown', 'black']
}
Human.prototype.getName = function () {
  return this.name
}

function Chinese(name, age) {
  Human.call(this, name)
  this.age = age
  this.color = 'yellow'
}

Chinese.prototype = Object.create(Human.prototype)
Chinese.prototype.constructor = Chinese

Chinese.prototype.getAge = function () {
  return this.age
}

// test
function test() {
  const o = new Chinese('z', 18)
  const judge = o.getAge() === 18 && o.getName() === 'z' && o.kingdom === 'animal' && o.__proto__.constructor === Chinese
  return judge
}

console.log(test());