// <a href="https://leetcode.cn/problems/reverse-linked-list/description/">
//   206. 反转链表
// </a>
// <div>给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。</div>
// <div><code>输入：head = [1,2,3,4,5]</code></div>
// <div><code>输出：[5,4,3,2,1]</code></div>

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 迭代
var reverseList = function (head) {
  let next = null
  let prev = null

  while (head !== null) {
    next = head.next
    head.next = prev
    prev = head
    head = next
  }
  return prev
}

// 递归
var reverseList1 = function (head, prev = null) {
  if (head == null) return prev
  let next = head.next
  head.next = prev
  return reverseList1(next, head)
}
