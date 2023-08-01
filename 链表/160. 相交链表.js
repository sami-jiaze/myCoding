// 160. 相交链表 https://leetcode.cn/problems/intersection-of-two-linked-lists/description

// 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null
// 输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
// 输出：Intersected at '8'
// 解释：相交节点的值为 8 （注意，如果两个链表相交则不能为 0）

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

// 我走你走过的路
var getIntersectionNode = function (headA, headB) {
  let ha = headA
  let hb = headB
  if (headA == null || headB == null) {
    return null
  }

  while (ha !== hb) {
    ha = ha.next
    hb = hb.next
    if (ha == null && hb == null) break
    if (ha == null) ha = headB
    if (hb == null) hb = headA
  }
  return ha
}
