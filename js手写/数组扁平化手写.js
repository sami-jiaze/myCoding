function flatten(arr) {
  let res = []
  fn(arr)
  function fn(temparr) {
    for(let i of temparr){
      if(Array.isArray(i)){
        fn(i)
      } else {
        res.push(i)
      }
    }
  }
  return res
}

function flatten(arr) {
  if(!arr.length) return 
  while (arr.some((item)=>Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}

console.log(flatten([1, 2, [1, [2, 3, [4, 5, [6]]]]]));