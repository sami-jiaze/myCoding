// <a href="https://leetcode.cn/problems/palindrome-linked-list/description/">
//   234. 回文链表
// </a>
// <div>给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false</div>
// <div><code>输入：head = [1,2,2,1]</code></div>
// <div><code>输出：true</code></div>
// <div><code></code></div>

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let a = ''
  let b = ''
  while (head) {
    a = head.val + a
    b = b + head.val
    head = head.next
  }
  return a == b
}
