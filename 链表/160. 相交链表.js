// <a href="https://leetcode.cn/problems/intersection-of-two-linked-lists/description/">
//   160. 相交链表
// </a>
// <div>给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。</div>
// <div><code>输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3</code></div>
// <div><code>输出：Intersected at '8'</code></div>
// <div><code>解释：相交节点的值为 8 （注意，如果两个链表相交则不能为 0）</code></div>

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

// 优雅一点
// 我无路可走就去走你的路
var getIntersectionNode = function (headA, headB) {
  let ha = headA
  let hb = headB
  if (headA == null || headB == null) {
    return null
  }

  while (ha !== hb) {
    ha = ha == null ? headB : ha.next
    hb = hb == null ? headA : hb.next
  }
  return ha
}

var getIntersectionNode = function (headA, headB) {
  let a = headA
  let b = headB

  let lena = 0
  let lenb = 0
  let aa = headA
  let bb = headB
  while (aa) {
    lena++
    aa = aa.next
  }
  while (bb) {
    lenb++
    bb = bb.next
  }
  let temp = Math.abs(lena - lenb)
  while (temp > 0) {
    if (lena > lenb) a = a.next
    else b = b.next
    temp--
  }
  while (a) {
    if (a == b) return a
    else {
      a = a.next
      b = b.next
    }
  }
  return null
}
