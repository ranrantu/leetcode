const TreeNode = require('./structure/tree_node');

const toTreeNode = function (value) {
  return value ? new TreeNode(value) : null;
};
// 读数组，生成一个树节点
const generateNode = function (arr) {
  const node = toTreeNode(arr.shift());
  if (node) {
    node.left = generateNode(arr);
    node.right = generateNode(arr);
  }
  return node;
};
// 顺序遍历二叉树数组 -> 二叉树
const array2tree = function (arr) {
  // 数组为空则返回空节点
  if (!arr || arr.length === 0) return null;
  return generateNode(arr);
};

module.exports = {
  array2tree
}
