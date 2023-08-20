function _instanceOf(a, b) {
  if(typeof a !='object' || a == null) return false
  let ap = Object.getPrototypeOf(a)
  while (ap!=null) {
    if(ap == b.prototype) return true
    ap = Object.getPrototypeOf(ap)
  }
  return false
}

console.log(_instanceOf(null, Array)) // false
console.log(_instanceOf([], Object)) // true
console.log(_instanceOf('', Array)) // false
console.log(_instanceOf({}, Object)) // true
