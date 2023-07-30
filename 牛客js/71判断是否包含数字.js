// 给定字符串 str，检查其是否包含数字，包含返回 true，否则返回 false

function containsNumber(str) {
  for(let i of str){
    console.log(isNaN(i));
    if(!isNaN(i)){
      return true;
    }
  }
  return false;
}

// test
console.log(containsNumber('abc123'))
