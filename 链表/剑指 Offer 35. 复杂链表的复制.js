// <a href="https://leetcode.cn/problems/fu-za-lian-biao-de-fu-zhi-lcof/description/">
//   剑指 Offer 35. 复杂链表的复制
// </a>
// <div>请实现 copyRandomList 函数，复制一个复杂链表。在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，还有一个 random 指针指向链表中的任意节点或者 null。</div>
// <div><code>输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]</code></div>
// <div><code>输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]</code></div>
// <div><code></code></div>

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (head == null) {
    return head
  }
  let temp = head
  let tmap = new Map()
  while (temp) {
    let n = new Node(temp.val)
    tmap.set(temp, n)
    temp = temp?.next
  }

  temp = head

  while (temp) {
    tmap.get(temp).next = tmap.get(temp.next) == undefined ? null : tmap.get(temp?.next)
    tmap.get(temp).random = tmap.get(temp?.random)
    temp = temp?.next
  }

  return tmap.get(head)
}
