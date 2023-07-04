// <a href="https://leetcode.cn/problems/diameter-of-binary-tree/description/">
//   543. 二叉树的直径
// </a>
// <div>给你一棵二叉树的根节点，返回该树的 直径 。二叉树的 直径 是指树中任意两个节点之间最长路径的 长度 。这条路径可能经过也可能不经过根节点 root 。两节点之间路径的 长度 由它们之间边数表示。</div>
// <div><code>输入：root = [1,2,3,4,5]</code></div>
// <div><code>输出：3</code></div>
// <div><code>解释：3 ，取路径 [4,2,1,3] 或 [5,2,1,3] 的长度。</code></div>

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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let res = 0
  zhi(root)

  function zhi(root) {
    if (root.left == null && root.right == null) return 0

    let left = root.left !== null ? zhi(root.left) + 1 : 0
    let right = root.right !== null ? zhi(root.right) + 1 : 0
    res = Math.max(res, left + right)
    return Math.max(left, right)
  }
  return res
}
