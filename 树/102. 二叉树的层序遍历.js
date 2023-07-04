// <a href="https://leetcode.cn/problems/binary-tree-level-order-traversal/description/">
//   102. 二叉树的层序遍历
// <div>给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。</div>
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let queue = []
  let temp = []
  let r = root
  queue.push(r)
  if (root == null) return temp
  while (queue.length !== 0) {
    let ss = []
    let len = queue.length
    for (let i = 0; i < len; i++) {
      let s = queue.shift()
      if (s) {
        ss.push(s.val)
        s.left && queue.push(s.left)
        s.right && queue.push(s.right)
      }
    }
    temp.push(ss)
  }
  console.log(temp)
  return temp
}
