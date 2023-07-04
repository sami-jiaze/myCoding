// <a href="https://leetcode.cn/problems/implement-queue-using-stacks/description/">
//   232. 用栈实现队列
// </a>
// <div>请你仅使用两个栈实现先入先出队列。
// </div>
// <div>队列应当支持一般队列支持的所有操作（push、pop、peek、empty）：</div>
// <div> 实现 MyQueue 类：
// </div>
// <div>
//   void push(int x) 将元素 x 推到队列的末尾
// </div>
// <div> int pop() 从队列的开头移除并返回元素
// </div>
// <div> int peek() 返回队列开头的元素
// </div>
// <div> boolean empty() 如果队列为空，返回 true ；否则，返回 false</div>
// <div>
//   <code>输入：</code>
// </div>
// <div><code>["MyQueue", "push", "push", "peek", "pop", "empty"]
//   [[], [1], [2], [], [], []]</code></div>
// <div><code>输出：
//  </code></div>
// <div><code>   [null, null, null, 1, 1, false]</code></div>

var MyQueue = function () {
  this.arr = []
  this.temp = []
}

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.arr.push(x)
}

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  this.temp = []
  while (this.arr.length > 0) {
    this.temp.push(this.arr.pop())
  }
  let s = this.temp.pop()
  while (this.temp.length > 0) {
    this.arr.push(this.temp.pop())
  }
  return s
}

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  this.temp = []
  while (this.arr.length > 0) {
    this.temp.push(this.arr.pop())
  }
  let s = this.temp.pop()
  this.temp.push(s)
  while (this.temp.length > 0) {
    this.arr.push(this.temp.pop())
  }
  return s
}

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.arr.length <= 0
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
