// <a href="https://leetcode.cn/problems/symmetric-tree/description/">
//   101. 对称二叉树
// </a>
// <div>给你一个二叉树的根节点 root ， 检查它是否轴对称。</div>
// <div><code>输入：root = [1,2,2,3,4,4,3]</code></div>
// <div><code>输出：true</code></div>
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  let temp = root
  return dui(temp.left, temp.right)

  function dui(left, right) {
    if (left?.val !== right?.val) return false
    else if (left == null && right == null) return true

    let l = dui(left?.left, right?.right)
    let r = dui(left?.right, right?.left)

    return l && r
  }
}
