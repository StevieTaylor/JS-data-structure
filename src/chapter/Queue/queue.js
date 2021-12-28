/*
 * @Author: Stevie
 * @Date: 2021-12-27 17:42:34
 * @LastEditTime: 2021-12-28 16:32:26
 * @LastEditors: Stevie
 * @Description:
 */
export default class Queue {
  constructor() {
    this.elements = []
  }

  // * 入队
  enqueue(element) {
    this.elements.push(element)
  }

  // * 出队
  dequeue() {
    if (this.isEmpty) {
      return
    }
    return this.elements.shift()
  }

  // * 清空队列
  clear() {
    this.elements = []
  }

  // * 返回队列第一个元素
  get front() {
    if (this.isEmpty) {
      return
    }
    return this.elements[0]
  }

  get size() {
    return this.elements.length
  }

  get isEmpty() {
    return this.elements.length === 0
  }
}
