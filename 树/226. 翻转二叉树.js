// <a href="https://leetcode.cn/problems/invert-binary-tree/solutions/415507/shou-hua-tu-jie-san-chong-xie-fa-di-gui-liang-chon/">
//   226. 翻转二叉树
// </a>
// <div>给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。</div>
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  return ft(root)

  function ft(node) {
    if (!node) return null
    let temp = node.left
    node.left = ft(node.right)
    node.right = ft(temp)
    return node
  }
}
