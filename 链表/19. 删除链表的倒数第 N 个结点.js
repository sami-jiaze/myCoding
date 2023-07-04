// <a href="https://leetcode.cn/problems/remove-nth-node-from-end-of-list/description/">
//   19. 删除链表的倒数第 N 个结点
// </a>
// <div>给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。</div>
// <div><code>输入：head = [1,2,3,4,5], n = 2</code></div>
// <div><code>输出：[1,2,3,5]</code></div>
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let len = 0
  let cur = head
  let fin = head
  while (cur) {
    len++
    cur = cur.next
  }
  let del = len - n - 1
  if (del == -1) return head.next

  while (del > 0) {
    fin = fin?.next
    del--
  }
  let delItem = fin.next
  if (!delItem || !delItem.next) {
    fin.next = null
  } else {
    fin.next = fin?.next?.next
  }

  return head
}
