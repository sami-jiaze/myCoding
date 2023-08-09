// 101. 对称二叉树 https://leetcode.cn/problems/symmetric-tree/description/
// 给你一个二叉树的根节点 root ， 检查它是否轴对称

// 输入：root = [1,2,2,3,4,4,3]
// 输出：true

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  let temp = root
  return dui(temp.left, temp.right)

  function dui(tl, tr) {
    if (tl?.val != tr?.val) return false
    if (tl == null && tr == null) return true
    let r1 = dui(tl.left, tr.right)
    let r2 = dui(tl.right, tr.left)
    return r1 && r2
  }
}
