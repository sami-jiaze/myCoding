// <a href="https://leetcode.cn/problems/basic-calculator-ii/description/"></a>
// <div>227. 基本计算器 II</div>
// <div>给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。整数除法仅保留整数部分。</div>
// <div><code>输入：s = "14-3/2"</code></div>
// <div><code>输出：7</code></div>
//   <!-- 关键点+-直接存入 */ pop()数据乘除后在放入
//  遇到符号位执行的是上一个符号位的操作 初始操作符为+ 末尾补+ -->
//  <!-- 14-3/2+ -->
//  <!-- 第一次遇到-但做的是+操作(做前一个操作符的操作) 存入14
//   遇到/时做的是-的操作 存入-3 末尾自动补加+
//   到末尾+ 做的是/的操作 -3/2=-1 放入-1 -->

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let nums = []
  s = s + '+'
  let pre = '+'
  let cur = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] == ' ') continue
    if (!isNaN(s[i])) {
      cur = cur * 10 + +s[i]
      console.log('cur', cur)
    } else {
      if (pre == '+') {
        nums.push(cur)
      }
      if (pre == '-') {
        nums.push(-1 * cur)
      }
      if (pre == '*') {
        nums.push(nums.pop() * cur)
      }
      if (pre == '/') {
        let n = nums.pop()
        if (n < 0) {
          let t = Math.floor(Math.abs(n) / cur)
          nums.push(-t)
        } else {
          nums.push(Math.floor(n / cur))
        }
      }
      cur = 0
      pre = s[i]
    }
  }
  let fin = 0
  for (i of nums) {
    fin = fin + i
  }
  return fin
}
