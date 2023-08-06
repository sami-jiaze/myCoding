// https://leetcode.cn/problems/invert-binary-tree/solutions/415507/shou-hua-tu-jie-san-chong-xie-fa-di-gui-liang-chon
// 226. 翻转二叉树

// 给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点

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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  let cur = root
  fan(cur)
  return root

  function fan(root) {
    if (root?.left == null && root?.right == null) return root
    let left = fan(root.right)
    let right = fan(root.left)
    root.left = left
    root.right = right
    return root
  }
}
