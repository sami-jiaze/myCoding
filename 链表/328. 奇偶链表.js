// <a href="https://leetcode.cn/problems/odd-even-linked-list/description/">
//   328. 奇偶链表
// </a>
// <div>给定单链表的头节点 head ，将所有索引为奇数的节点和索引为偶数的节点分别组合在一起，然后返回重新排序的列表</div>
// <div>第一个节点的索引被认为是 奇数 ， 第二个节点的索引为 偶数 ，以此类推。</div>
// <div><code>输入: head = [1,2,3,4,5]</code></div>
// <div><code>输出: [1,3,5,2,4]</code></div>
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
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  let odd = new ListNode(0, null)
  let oo = odd
  let even = new ListNode(0, null)
  let ee = even

  let cur = head
  let num = 1
  while (cur) {
    if (num % 2 == 0) {
      ee.next = cur
      ee = cur
    } else {
      oo.next = cur
      oo = cur
    }
    num++
    cur = cur.next
  }
  oo.next = even.next
  ee.next = null
  return odd.next
}
