// 请补全JavaScript代码，该函数接收两个参数分别为旧版本、新版本，当新版本高于旧版本时表明需要更新，返回true，否则返回false。
// 注意：
// 1. 版本号格式均为"X.X.X"
// 2. X∈[0,9]
// 3. 当两个版本号相同时，不需要更新

const _shouldUpdate = (oldVersion, newVersion) => {
  // 补全代码
  let o = oldVersion.split('.')
  let n = newVersion.split('.')
  for (let i = 0; i < n.length; i++) {
    if (n[i] > o[i]) {
      return true
    }
  }
  return false
}

// test
function test() {
  return _shouldUpdate('0.0.2', '0.0.0') === false
}
console.log(test());
