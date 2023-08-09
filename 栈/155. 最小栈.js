// 155. 最小栈 https://leetcode.cn/problems/min-stack/description/
// 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
// MinStack() 初始化堆栈对象
// void push(int val) 将元素val推入堆栈。
// void pop() 删除堆栈顶部的元素。
// int top() 获取堆栈顶部的元素。
// int getMin() 获取堆栈中的最小元素。

// 输入：
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]
// 输出：
// [null,null,null,null,-3,null,0,-2]</code></div>

var MinStack = function () {
  this.stack = []
  this.min = []
}

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  let num = this.min[this.min.length - 1]
  if (num < val && num != null) {
    this.min.push(num)
  } else {
    this.min.push(val)
  }
  this.stack.push(val)
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop()
  this.min.pop()
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min[this.min.length - 1]
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
