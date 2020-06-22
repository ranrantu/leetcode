const { array2tree } = require('../lib/tree').default;

const data = [1, null, 2, 3];

var max = -Infinity;

var maxPathSum = function(root) {
  if (root && !root.left && !root.right) {
    return root.val;
  }
  maxPathSumNode(root);
  return max;
};

var maxPathSumNode = function (root) {
  if (!root) return 0;
  var leftValue = Math.max(0, maxPathSumNode(root.left));
  var rightValue = Math.max(0, maxPathSumNode(root.right));
  max = Math.max(max, root.val + leftValue + rightValue);
  return root.val + Math.max(leftValue, rightValue);
}

console.log(
  maxPathSum(array2tree(data))
);
