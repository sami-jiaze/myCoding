// <a href="https://leetcode.cn/problems/binary-tree-inorder-traversal/description/">
//   94. 二叉树的中序遍历
// </a>
// <div>给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。</div>
// <div><code></code></div>
// <div><code></code></div>
// <div><code></code></div>

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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  if (root == null) return []
  let a = []
  mid(root)

  function mid(node) {
    if (node?.left) mid(node.left)
    a.push(node?.val)
    if (node?.right) mid(node.right)
  }
  return a
}
