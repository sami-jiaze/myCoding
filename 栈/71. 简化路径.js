// <a href="https://leetcode.cn/problems/simplify-path/description/">
//   71. 简化路径
// </a>
// <div>给你一个字符串 path ，表示指向某一文件或目录的 Unix 风格 绝对路径 （以 '/' 开头），请你将其转化为更加简洁的规范路径</div>
// <div><code>输入：path = "/home//foo/"</code></div>
// <div><code>输出："/home/foo"</code></div>
// <div><code>解释：在规范路径中，多个连续斜杠需要用一个斜杠替换。</code></div>

// <div><code>输入：path = "/a/./b/../../c/"</code></div>
// <div><code>输出："/c"</code></div>

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  path = path.split('/')
  path = path.filter(p => {
    return p !== ''
  })
  let fin = []

  for (let i of path) {
    if (i == '..') fin.pop()
    if (i !== '..' && i !== '.') fin.push(i)
  }
  let finstr = ''
  for (let i of fin) {
    let temp = '/' + i
    finstr = finstr + temp
  }
  finstr = finstr == '' ? '/' : finstr
  return finstr
}
