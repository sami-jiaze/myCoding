const _completeDeepClone = (obj, map = new Map()) => {
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof RegExp) return new RegExp(obj)
  if (obj instanceof Error) return new Error(obj)
  if (obj instanceof Function) return new Function(obj)
  if (!obj || typeof obj !== 'object') return obj

  let newObject = Array.isArray(obj) ? [] : {}
  if (map.get(obj)) return map.get(obj)
  map.set(obj, true)

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object') {
        newObject[key] = _completeDeepClone(obj[key], map)
      } else {
        newObject[key] = obj[key]
      }
    }
  }
  return newObject
}


// test
function test() {
  const o1 = { name: 'g', age: 18, o: { name: 'o' }, a: [1, 2] }
  const o2 = _sampleDeepClone(o1)
  const judge = JSON.stringify(o1) === JSON.stringify(o2) && o1.o !== o2.o && o1.a !== o2.a
  return judge
}

function test2() {
  const o1 = { name: 'g', age: 18, o: { name: 'o' }, a: [1, 2], r: new RegExp(), d: new Date() }
  o1.self = o1
  const o2 = _completeDeepClone(o1)
  o1.name = 'z'
  o1.age = 1
  const judge = o1.name !== o2.name && o1.age !== o2.age && o1.o !== o2.o && o1.a !== o2.a && o1.r !== o2.r && o1.d !== o2.d && o1.self.self.self.self.self.self.self.self.self === o1.self && o1.self !== o2.self
  return judge
}
