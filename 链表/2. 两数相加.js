// <a href="https://leetcode.cn/problems/add-two-numbers/description/">
//   2. 两数相加
// </a>
// <div>给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。</div>
// <div><code>输入：l1 = [2,4,3], l2 = [5,6,4]</code></div>
// <div><code>输出：[7,0,8]</code></div>
// <div><code>解释：342 + 465 = 807.</code></div>

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let count = 0
  let fin = new ListNode(0)
  let fin1 = fin
  while (l1 || l2) {
    let temp = 0
    let ln = l1 ? l1.val : 0
    let rn = l2 ? l2.val : 0
    temp = Number(ln) + Number(rn) + count
    if (count > 0) count--
    if (temp >= 10) {
      temp = temp % 10
      count++
    }
    fin.val = temp
    l1 = l1?.next
    l2 = l2?.next
    if (count > 0) {
      fin.next = new ListNode(1)
    } else if (l1 || l2) {
      fin.next = new ListNode(0)
    }

    fin = fin.next
  }
  return fin1
}
