// 根据包名，在指定空间中创建对象
// 输入：amespace({a: {test: 1, b: 2}}, 'a.b.c.d')
// 输出：{a: {test: 1, b: {c: {d: {}}}}}

function namespace(oNamespace, sPackage) {
  let arr = sPackage.split('.')
  let o = oNamespace
  for(let v of arr){
    if(typeof o[v] !== 'object'){
      o[v] = {}
    }
    o = o[v]
  }
}


// test
function test() {
  var a = {}
  var r = namespace(a, 'a.b.c.d.e.f.g')
  a.a.b.c.d.e.f.g = 1
  return a.a.b.c.d.e.f.g === 1
}
console.log(test());