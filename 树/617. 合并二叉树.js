// <a href="https://leetcode.cn/problems/merge-two-binary-trees/description/">
//   617. 合并二叉树

// </a>
// <div></div>
// <div><code>输入：root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]</code></div>
// <div><code>输出：[3,4,5,5,4,null,7]</code></div>
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  return he(root1, root2)

  function he(r1, r2) {
    if (r1 == null && r2 == null) return null
    if (!r1) return r2
    if (!r2) return r1

    r1.val = r1.val + r2.val

    r1.left = he(r1?.left, r2?.left)
    r1.right = he(r1?.right, r2?.right)

    return r1
  }
}
