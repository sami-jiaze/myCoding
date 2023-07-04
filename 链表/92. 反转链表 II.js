// <a href="https://leetcode.cn/problems/reverse-linked-list-ii/description/">
//   92. 反转链表 II
// </a>
// <div>给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表</div>
//     <div><code>输入：head = [1,2,3,4,5], left = 2, right = 4</code></div>
//     <div><code>输出：[1,4,3,2,5]</code></div>
//     <div><code></code></div>

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let cur = new ListNode(0)
  cur.next = head

  let pre = cur
  let temp = cur.next
  for (let i = 1; i < left; i++) {
    temp = temp.next
    pre = pre.next
  }

  for (let i = left; i < right; i++) {
    let temp1 = temp.next
    temp.next = temp.next.next
    temp1.next = pre.next
    pre.next = temp1
    console.log(cur.next, temp, pre)
  }
  return cur.next
}
