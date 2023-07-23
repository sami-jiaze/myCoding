// 判断输入是否是正确的邮箱格式

function isAvailableEmail(sEmail) {
  let rex = /^([\w+\.])+@\w+([.]\w+)+$/;
  return rex.test(sEmail)
}

// test
function test() {
  return isAvailableEmail('frontend@nowcoder.com.cn')
}
console.log(test());