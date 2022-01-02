/*
 * @Author: Stevie
 * @Date: 2021-12-31 13:44:04
 * @LastEditTime: 2021-12-31 14:07:24
 * @LastEditors: Stevie
 * @Description: 树节点
 */
export class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}
