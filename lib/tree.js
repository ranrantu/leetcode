const TreeNode = require('./structure/tree_node');

const toTreeNode = function (value) {
  return value ? new TreeNode(value) : null;
};
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
  // function generateNode() {
  //   const node = toTreeNode(arr.shift());
  //   if (node) {
  //     node.left = generateNode();
  //     node.right = generateNode();
  //   }
  //   return node;
  // }
  // // 构建二叉树
  // let root = generateNode();
  // return root;
  return generateNode(arr);
};

module.exports = {
  array2tree
}
