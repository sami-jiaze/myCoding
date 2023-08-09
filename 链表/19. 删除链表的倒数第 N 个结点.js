// 19. 删除链表的倒数第 N 个结点 https://leetcode.cn/problems/remove-nth-node-from-end-of-list/description

// 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点
// 输入：head = [1,2,3,4,5], n = 2
// 输出：[1,2,3,5]

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
// 使用数组
var removeNthFromEnd = function (head, n) {
  let temp = head
  let arr = []
  while (temp != null) {
    arr.push(temp)
    temp = temp.next
  }
  let del = arr[arr.length - n]
  let pre = head
  if (pre == del) {
    return head.next
  }
  let next = head.next
  while (next != null) {
    if (next == del) {
      pre.next = next.next
    }
    pre = pre.next
    next = next.next
  }
  return head
}

// 快慢指针
var removeNthFromEnd = function (head, n) {
  let xu = new ListNode()
  xu.next = head
  let slow = xu
  let fast = xu
  while (n > 0) {
    fast = fast.next
    n--
  }

  while (fast?.next != null) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next
  return xu.next
}
