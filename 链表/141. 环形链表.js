// 141. 环形链表 https://leetcode.cn/problems/linked-list-cycle/description
//   
// 给你一个链表的头节点 head ，判断链表中是否有环,注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况
// 输入：head = [3,2,0,-4], pos = 1
// 输出：true</code></div>
// 解释：链表中有一个环，其尾部连接到第二个节点
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

var hasCycle = function(head) {
  if(!head) return false
  let slow = head
  let fast = head.next
  while (fast!=null) {
    if(slow==fast) {
      return true
    }
    slow = slow.next
    fast = fast?.next?.next
  }
  return false
};