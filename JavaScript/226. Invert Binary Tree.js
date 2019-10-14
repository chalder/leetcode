// Invert a binary tree.
//
// Example:
//
// Input:
//
//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// Output:
//
//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
/** 1) Recursion */
function invertTree1(root) {
  function go(node) {
    if (node == null) return;

    const n = node.left;
    node.left = node.right;
    node.right = n;

    go(node.left);
    go(node.right);
  }

  go(root);
  return root;
}

/** 2) Recursion */
function invertTree3(root) {
  if (root == null) return root;
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  return root;
}

/** 3) DFS */
function invertTree4(root) {
  const st = [root];

  while (st.length) {
    const n = st.pop();
    if (n != null) {
      [n.left, n.right] = [n.right, n.left];
      st.push(n.left, n.right);
    }
  }

  return root;
}

/** 4) BFS */
function invertTree(root) {
  const q = [root];

  while (q.length) {
    const n = q.shift();  // the only difference with DFS is here
    if (n != null) {
      [n.left, n.right] = [n.right, n.left];
      q.push(n.left, n.right);
    }
  }

  return root;
}
