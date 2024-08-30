
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


function sumOfLeftLeaves(root: TreeNode | null): number {
  let actualSum = 0;
  if(root.right) {
      actualSum += sumOfLeftLeaves(root.right);
  }
  if(root.left?.left || root.left?.right ) {
      actualSum += sumOfLeftLeaves(root.left);
  } else if(root.left) {
      actualSum += root.left.val;
  }
  return actualSum;
};