// <a href="https://leetcode.cn/problems/remove-linked-list-elements/">
//   203. 移除链表元素
// </a>
// <div>给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点</div>
// <div><code>输入：head = [1,2,6,3,4,5,6], val = 6</code></div>
// <div><code>输出：[1,2,3,4,5]</code></div>
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  const hnode = new ListNode(0, head)
  let res = hnode
  while (res.next) {
    if (res.next.val == val) {
      res.next = res.next.next
    } else {
      res = res.next
    }
  }
  return hnode.next
}
