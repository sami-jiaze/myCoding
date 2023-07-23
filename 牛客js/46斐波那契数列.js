// 用 JavaScript 实现斐波那契数列函数,返回第n个斐波那契数。
//  f(1) = 1, f(2) = 1

function fibonacci(n) {
  let dp = [1, 1, 2]
  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n-1]
}

// test
function test() {
  return fibonacci(10) // 55
}
console.log(test())
