// 给定两个整数数组 preorder 和 inorder ，
// 其中 preorder 是二叉树的先序遍历 inorder 是同一棵树的中序遍历
// 请构造二叉树并返回其根节点。

// 输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// 输出: [3,9,20,null,null,15,7]

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
let buildTree = (preorder, inorder) => {
  if (!preorder.length || !inorder.length) return null
  let node = new TreeNode(preorder[0])
  let index = inorder.indexOf(preorder.shift())
  node.left = buildTree(preorder, inorder.slice(0, index))
  node.right = buildTree(preorder, inorder.slice(index + 1))
  return node
}
