// <a href="https://leetcode.cn/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/description/">
//   剑指 Offer 22. 链表中倒数第k个节点
// </a>
// <div>输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。</div>
// <div><code>给定一个链表: 1->2->3->4->5, 和 k = 2.</code></div>
// <div><code>返回链表 4->5.</code></div>
// <div><code>快慢指针</code></div>

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  let slow = head
  let fast = head
  while (k > 0) {
    fast = fast.next
    k--
  }
  while (fast?.val !== undefined) {
    slow = slow.next
    fast = fast.next
  }
  return slow
}
