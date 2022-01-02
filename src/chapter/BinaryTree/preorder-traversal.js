/*
 * @Author: Stevie
 * @Date: 2021-12-30 15:08:20
 * @LastEditTime: 2022-01-02 17:37:30
 * @LastEditors: Stevie
 * @Description: 前序遍历
 */
import { TreeNode } from './treenode'

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
 * @description: 递归法前序遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
export function preorderTraversalRecursion(root) {
  const res = []
  traversal(root, res)
  return res
}

/**
 * @description: 迭代法前序遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
export function preorderTraversalIteration(root) {
  // * 利用栈存放二叉树的所有子树
  const stack = []
  const result = []
  while (root !== null || stack.length !== 0) {
    // * 当前子树有子节点时
    while (root !== null) {
      // * 将要遍历的root压入栈内
      stack.push(root)
      // * 保存当前树根节点的值
      result.push(root.val)
      // * root置为其左子树, 遍历左子树
      root = root.left
    }
    // * 返回上一层节点
    root = stack.pop()
    // * root置为其右子树, 遍历右子树
    root = root.right
  }
  return result
}

const treeData = {
  val: 'F',
  left: {
    val: 'B',
    left: {
      val: 'A',
      left: null,
      right: null,
    },
    right: {
      val: 'D',
      left: {
        val: 'C',
        left: null,
        right: null,
      },
      right: {
        val: 'E',
        left: null,
        right: null,
      },
    },
  },
  right: {
    val: 'G',
    left: null,
    right: {
      val: 'I',
      left: {
        val: 'H',
        left: null,
        right: null,
      },
      right: null,
    },
  },
}

console.log('期望结果      :>> ', ['F', 'B', 'A', 'D', 'C', 'E', 'G', 'I', 'H'])
console.log('递归法前序遍历 :>> ', preorderTraversalRecursion(treeData))
console.log('迭代法前序遍历 :>> ', preorderTraversalIteration(treeData))
