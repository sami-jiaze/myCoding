// <a href="https://leetcode.cn/problems/binary-tree-preorder-traversal/description/">
//   144. 二叉树的前序遍历
// </a>
// <div>给你二叉树的根节点 root ，返回它节点值的 前序 遍历。</div>
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
var preorderTraversal = function (root) {
  if (root == null) return []
  let a = []
  front(root)

  function front(root) {
    a.push(root?.val)
    root?.left && front(root.left)
    root?.right && front(root.right)
  }
  return a
}

var preorderTraversal = function(root, res = []) {
  const stack = [];
  if (root) stack.push(root);
  while(stack.length) {
      const node = stack.pop();
      if(!node) {
          res.push(stack.pop().val);
          continue;
      }
      if (node.right) stack.push(node.right); // 右
      if (node.left) stack.push(node.left); // 左
      stack.push(node); // 中
      stack.push(null);
  }; 
  return res;
};
