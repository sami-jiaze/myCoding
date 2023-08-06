function _instanceOf(a, b) {
  if(typeof a !='object' || a == null) return false
  let ap = Object.getPrototypeOf(a)
  while (ap!=null) {
    if(ap == b.prototype) return true
    a = Object.getPrototypeOf(a)
  }
  return false
}

console.log(_instanceOf(null, Array)) // false
console.log(_instanceOf([], Array)) // true
console.log(_instanceOf('', Array)) // false
console.log(_instanceOf({}, Object)) // true
