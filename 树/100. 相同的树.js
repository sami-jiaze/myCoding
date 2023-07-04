// <a href="https://leetcode.cn/problems/same-tree/description/">
//   100. 相同的树
// </a>
// <div>给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。

//   如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。</div>
// <div><code>输入：p = [1,2,3], q = [1,2,3]</code></div>
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  return fn(p, q)

  function fn(p, q) {
    if (p == null && q == null) return true
    if (p?.val !== q?.val) return false

    let l = fn(p.left, q.left)
    let r = fn(p.right, q.right)
    return l && r
  }
}
