// <a href="https://leetcode.cn/problems/remove-duplicates-from-sorted-list-ii/description/">
//   82. 删除排序链表中的重复元素 II
// </a>
// <div>给定一个已排序的链表的头 head ， 删除原始链表中所有重复数字的节点，只留下不同的数字 。返回 已排序的链表 。</div>
// <div><code>输入：head = [1,2,3,3,4,4,5]</code></div>
// <div><code>输出：[1,2,5]</code></div>
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
var deleteDuplicates = function (head) {
  let n = new ListNode(0, head)
  let tempn = n
  while (tempn.next) {
    let next = tempn.next
    let nn = next.next
    if (next.val !== nn?.val) {
      tempn = tempn.next
      continue
    } else {
      while (next.val == nn?.val) {
        let temp = nn.next
        next = nn
        nn = temp
      }
      tempn.next = nn
    }
  }
  return n.next
}
