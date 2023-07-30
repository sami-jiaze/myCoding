// 给定字符串 str，检查其是否符合如下格式
// 1、XXX-XXX-XXXX
// 2、其中 X 为 Number 类型

function matchesPattern(str) {
  let rex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/
  return rex.test(str)
}

// test
console.log(matchesPattern('800-555-1212'))
console.log(matchesPattern('1800-555-1212'))
