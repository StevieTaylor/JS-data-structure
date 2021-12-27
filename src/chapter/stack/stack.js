/*
 * @Author: Stevie
 * @Date: 2021-07-08 17:53:33
 * @LastEditTime: 2021-12-27 17:35:49
 * @LastEditors: Stevie
 * @Description:
 */

/**
 * - 栈: LIFO的数据结构
 * - LIFO: last in first out 后入先出
 *
 */
class Stack {
  constructor() {
    this.list = []
  }

  // - 入栈(推进去)
  push(element) {
    this.list.push(element)
    return this.list
  }

  // - 出栈(弹出来)
  pop() {
    if (this.isEmpty) {
      return
    }
    return this.list.pop()
  }

  clear() {
    this.list = []
    return this.list
  }

  // - 栈顶元素
  get peek() {
    if (this.isEmpty) {
      return
    }
    return this.list[this.list.length - 1]
  }

  get size() {
    return this.list.length
  }

  get isEmpty() {
    return this.list.length === 0
  }

  print() {
    console.log(this.list.toString())
  }
}

export default Stack
