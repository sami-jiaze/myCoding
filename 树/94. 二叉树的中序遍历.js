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
// 递归
var inorderTraversal = function (root) {
  let res = []
  mid(root)
  return res

  function mid(root) {
    if (root == null) return
    mid(root.left)
    res.push(root.val)
    mid(root.right)
  }
}

// 迭代解法
var inorderTraversal1 = function (root) {
  let res = []
  let stack = []
  let cur = root
  while (cur != null || stack.length > 0) {
    if (cur != null) {
      stack.push(cur)
      cur = cur.left
    } else {
      let node = stack.pop()
      res.push(node.val)
      cur = node.right
    }
  }
  return res
}
