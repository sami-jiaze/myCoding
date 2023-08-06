// 2. 两数相加 https://leetcode.cn/problems/add-two-numbers/description
//
// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字
// 输入：l1 = [2,4,3], l2 = [5,6,4]
// 输出：[7,0,8]
// 解释：342 + 465 = 807

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
  let t1 = l1
  let t2 = l2
  let add = 0
  let fin = new ListNode(0)
  let fin1 = fin
  while (t1 != null || t2 != null) {
    let n1 = t1 == null ? 0 : t1.val
    let n2 = t2 == null ? 0 : t2.val
    let temp = n1 + n2 + add
    if (temp >= 10) {
      add = 1
      temp = temp % 10
    } else {
      add = 0
    }
    fin1.val = temp
    t1 = t1?.next
    t2 = t2?.next
    if (add == 1) {
      fin1 = fin1.next = new ListNode(1)
    } else if (t1 || t2) {
      fin1 = fin1.next = new ListNode(0)
    }
  }
  return fin
}
