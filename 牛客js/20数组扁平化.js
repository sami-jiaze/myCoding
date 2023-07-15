// 要求将数组参数中的多维数组扩展为一维数组并返回该数组。
// 输入： [1,[2,[3,[4]]]]
// 输出： [1,2,3,4]

const _flatten = arr => {
  // 补全代码
  let res = []
  for(let i=0;i<arr.length;i++) {
    if(arr[i] instanceof Array){
      let b = _flatten(arr[i]);
      res.push(...b)
    } else {
      res.push(arr[i])
    }
  }
  return res
}

// test
function test() {
  var result = JSON.stringify(_flatten([1, [2, 3, [4, 5]]])) == JSON.stringify([1, 2, 3, 4, 5])
  return result
}
console.log(test());
