{
  /* <div>
    <a href="https://leetcode.cn/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/description/">
      剑指 Offer 09. 用两个栈实现队列
    </a>
  </div>
  <div>用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead</div>
  <div>分别完成在队列尾部插入整数和在队列头部删除整数的功能。</div>
  <div>(若队列中没有元素，deleteHead 操作返回 -1 )</div>
  <div>示例 </div>
  <div> <code>
    输入：["CQueue","appendTail","deleteHead","deleteHead","deleteHead"]
    </code></div>
  <div><code>[[],[3],[],[],[]]</code></div>
  <div> <code>输出：[null,null,3,-1,-1]</code></div> */
}

var CQueue = function () {
  this.arr = []
  this.temp = []
}

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.arr.push(value)
}

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  this.temp = []
  while (this.arr.length) {
    this.temp.push(this.arr.pop())
  }
  let s = this.temp.pop()
  while (this.temp.length) {
    this.arr.push(this.temp.pop())
  }
  if (s) {
    return s
  } else {
    return -1
  }
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
