// 请补全JavaScript代码，该函数接受两个参数分别为数组、索引值，
// 要求在不改变原数组的情况下返回删除了索引项的新数组。
const _delete = (array, index) => {
  let newarr = []
  for(let i=0;i<array.length;i++) {
    if(i!==index){
      newarr.push(array[i])
    }
  }
  return newarr
}

// test
function test() {
  let array = [1, 2, 3]
  return JSON.stringify(_delete(array, 1)) === '[1,3]'
}
