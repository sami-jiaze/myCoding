// <a href="https://leetcode.cn/problems/partition-list/description/">
//   86. 分隔链表
// </a>
// <div>给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前</div>
// <div><code>输入：head = [1,4,3,2,5,2], x = 3</code></div>
// <div><code>输出：[1,2,2,4,3,5]</code></div>
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let small = new ListNode(0, null)
  let ss = small
  let large = new ListNode(0, null)
  let ll = large
  while (head) {
    if (head.val >= x) {
      ll.next = head
      ll = ll.next
    } else {
      ss.next = head
      ss = ss.next
    }
    head = head.next
  }
  ss.next = large.next
  ll.next = null
  return small.next
}
