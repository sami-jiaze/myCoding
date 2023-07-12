{/* <a href="https://leetcode.cn/problems/binary-tree-paths/">
    257. 二叉树的所有路径
  </a>
  <div>给你一个二叉树的根节点 root ，按 任意顺序 ，返回所有从根节点到叶子节点的路径。

    叶子节点 是指没有子节点的节点。</div>
  <div><code>输入：root = [1,2,3,null,5]</code></div>
  <div><code>输出：["1->2->5","1->3"]</code></div> */}

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
     * @return {string[]}
     */
    var binaryTreePaths = function (root) {
      let res = []
      hui(root, [])

      function hui(root, path) {
        if (root?.left == null && root?.right == null) {
          path.push(root.val)
          // console.log(path.join('->'))
          res.push(path.join('->'))
          return
        }
        path.push(root.val)
        if (root.left) {
          hui(root.left, path)
          path.pop()
        }
        if (root.right) {
          hui(root.right, path)
          path.pop()
        }
      }
      return res
    };
