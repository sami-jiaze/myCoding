// 23. 合并 K 个升序链表 https://leetcode.cn/problems/merge-k-sorted-lists/

// 给你一个链表数组，每个链表都已经按升序排列。
// 请你将所有链表合并到一个升序链表中，返回合并后的链表。

// 输入：lists = [[1,4,5],[1,3,4],[2,6]]
// 输出：[1,1,2,3,4,4,5,6]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  for (let i = 0; i < lists.length; i++) {
    if (lists[i] == null) {
      lists.splice(i, 1)
      i--
    }
  }
  if (lists.length == 0) return null

  let min = 0
  let res = new ListNode()
  let temp = res
  while (lists.length > 1) {
    for (let i = 0; i < lists.length; i++) {
      if (lists[i].val < lists[min].val) {
        min = i
      }
    }
    temp.next = lists[min]
    temp = temp.next
    if (lists[min].next != null) {
      lists[min] = lists[min].next
    } else {
      lists.splice(min, 1)
      min = 0
    }
  }
  temp.next = lists[0]
  return res.next
}
