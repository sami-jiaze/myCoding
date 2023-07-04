// <a href="https://leetcode.cn/problems/linked-list-cycle/description/">
//   141. 环形链表
// </a>
// <div>给你一个链表的头节点 head ，判断链表中是否有环,注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况。</div>
// <div><code>输入：head = [3,2,0,-4], pos = 1</code></div>
// <div><code> 输出：true</code></div>
// <div><code>解释：链表中有一个环，其尾部连接到第二个节点。</code></div>
// <!-- 快慢指针 -->

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (head?.next == undefined) return false
  let slow = head
  let fast = head
  while (fast?.next !== undefined) {
    fast = fast?.next?.next
    slow = slow?.next
    if (fast == slow) return true
  }
  return false
}
