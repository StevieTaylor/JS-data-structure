/*
 * @Author: Stevie
 * @Date: 2021-12-30 15:08:20
 * @LastEditTime: 2021-12-30 17:52:00
 * @LastEditors: Stevie
 * @Description: 前序遍历
 */
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

/**
 * @param {TreeNode} node
 * @return {number[]}
 */
function traversal(node, res) {
  if (!node) return
  res.push(node.val)
  traversal(node.left, res)
  traversal(node.right, res)
}

/**
 * @description:
 * @param {TreeNode} root
 * @return {number[]}
 */
export function preorderTraversal(root) {
  const res = []
  traversal(root, res)
  return res
}

export function preorderTraversalIteration(root) {}
