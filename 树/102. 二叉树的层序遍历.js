// 102. 二叉树的层序遍历 https://leetcode.cn/problems/binary-tree-level-order-traversal/description

// 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 
// （即逐层地，从左到右访问所有节点）

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
  if (root == null) return []
  let queue = []
  let res = []
  queue.push(root)

  while (queue.length > 0) {
    let len = queue.length
    let temparr = []
    for (let i = 0; i < len; i++) {
      let temp = queue.shift()
      temparr.push(temp?.val)
      temp?.left && queue.push(temp.left)
      temp?.right && queue.push(temp.right)
    }
    res.push(temparr)
  }

  return res
}
