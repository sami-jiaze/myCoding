// <a href="https://leetcode.cn/problems/swap-nodes-in-pairs/description/">
//   24. 两两交换链表中的节点
// </a>
// <div>给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。</div>

// <div><code>输入：head = [1,2,3,4]</code></div>
// <div><code>输出：[2,1,4,3]</code></div>
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
var swapPairs = function (head) {
  let cur1 = new ListNode(0, head)
  let cur = cur1
  // if(cur?.next) return cur
  while (cur?.next && cur.next.next) {
    let n = cur?.next
    let nn = cur?.next.next
    n.next = nn.next
    nn.next = n
    cur.next = nn
    cur = n
  }
  return cur1.next
}
