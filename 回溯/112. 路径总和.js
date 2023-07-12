// <a href="https://leetcode.cn/problems/path-sum/description/">
//   112. 路径总和
// </a>
// <div>给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。如果存在，返回 true ；否则，返回 false </div>
// <div><code>输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22</code></div>
// <div><code>输出：true</code></div>

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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  return su(root, targetSum)

  function su(treenode, count) {
    if (treenode?.left == null && treenode?.right == null && treenode?.val == count) {
      return true
    } else if (treenode?.left == null && treenode?.right == null && treenode?.val !== count) {
      return false
    }

    if (treenode.left) {
      targetSum = targetSum - treenode.val
      let b = su(treenode.left, targetSum)
      if (b) return true
      targetSum = targetSum + treenode.val
    }
    if (treenode.right) {
      targetSum = targetSum - treenode.val
      let b = su(treenode.right, targetSum)
      if (b) return true
      targetSum = targetSum + treenode.val
    }
    return false
  }
}
