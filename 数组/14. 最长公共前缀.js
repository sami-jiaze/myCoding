// 14. 最长公共前缀

// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。

// 输入：strs = ["flower","flow","flight"]
// 输出："fl"

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let fin = strs[0].split('')
  let cut = 0
  for (let i = 0; i < strs.length - 1; i++) {
    let tempcur = 0
    let f1 = strs[i]
    let f2 = strs[i + 1]
    let temp = f1.length > f2.length ? f2.length : f1.length
    for (let j = 0; j < temp; j++) {
      if (f1[j] == f2[j] && tempcur >= j) {
        console.log(f1[j], f2[j])
        tempcur++
      }
    }
    cut = cut > tempcur ? cut : tempcur
  }

  if (cut == 0) {
    console.log("over");
    
  }
  else if (cut > 0) fin = fin.slice(0, cut)
  fin = fin.join('')
  console.log(cut, fin)
}

longestCommonPrefix(['flower', 'flow', 'flight'])
longestCommonPrefix(['flower'])
longestCommonPrefix(['dog', 'racecar', 'car'])
longestCommonPrefix([''])
longestCommonPrefix(['a'])
longestCommonPrefix(['ab', 'a'])
