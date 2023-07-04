// <a href="https://leetcode.cn/problems/middle-of-the-linked-list/description/">
//   876. 链表的中间结点
// </a>
// <div>给你单链表的头结点 head ，请你找出并返回链表的中间结点。如果有两个中间结点，则返回第二个中间结点。</div>
// <div><code>输入：head = [1,2,3,4,5]</code></div>
// <div><code>输出：[3,4,5]</code></div>
// <div><code>解释：链表只有一个中间结点，值为 3 。</code></div>

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
var middleNode = function (head) {
  let slow = head
  let fast = head
  while (fast?.next) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
}
