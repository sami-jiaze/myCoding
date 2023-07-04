// <a href="https://leetcode.cn/problems/merge-two-sorted-lists/description/">
//   21. 合并两个有序链表
// </a>
// <div>将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的</div>
// <div><code>输入：l1 = [1,2,4], l2 = [1,3,4]</code></div>
// <div><code>输出：[1,1,2,3,4,4]</code></div>
// <div><code>递归思想</code></div>

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// 递归法
var mergeTwoLists = function (list1, list2) {
  if (list1?.val == undefined) return list2
  if (list2?.val == undefined) return list1
  if (list1?.val > list2?.val) {
    list2.next = mergeTwoLists(list2?.next, list1)
    return list2
  } else {
    list1.next = mergeTwoLists(list1?.next, list2)
    return list1
  }
}

// 迭代法
var mergeTwoLists = function (l1, l2) {
  let fin1 = new ListNode(0)
  let fin = fin1
  while (l1 != null && l2 != null) {
    let n1 = l1.val ? l1.val : null
    let n2 = l2.val ? l2.val : null
    if (n1 >= n2) {
      fin.next = l2
      l2 = l2.next
    } else {
      fin.next = l1
      l1 = l1.next
    }
    fin = fin.next
  }
  fin.next = l1 === null ? l2 : l1
  return fin1.next
}
