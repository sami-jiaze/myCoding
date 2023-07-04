//   <a href="https://leetcode.cn/problems/min-stack/description/">
//     155. 最小栈
//   </a>
//   <div>设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。</div>
//   <div>MinStack() 初始化堆栈对象。
//     void push(int val) 将元素val推入堆栈。
//     void pop() 删除堆栈顶部的元素。
//     int top() 获取堆栈顶部的元素。
//     int getMin() 获取堆栈中的最小元素。</div>
//   <div><code>输入：
//       ["MinStack","push","push","push","getMin","pop","top","getMin"]
//       [[],[-2],[0],[-3],[],[],[],[]]
// </code></div>
//   <div><code>
//   输出：
//   [null,null,null,null,-3,null,0,-2]</code></div>

var MinStack = function () {
  this.arr = []
  this.temp = [Infinity]
}

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.arr.push(val)
  let min = this.temp.pop()
  this.temp.push(min)
  let tem = min > val ? val : min
  this.temp.push(tem)
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.arr.pop()
  this.temp.pop()
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  let s = this.arr.pop()
  this.arr.push(s)
  return s
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.temp[this.temp.length - 1]
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
