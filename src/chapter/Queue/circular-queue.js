/*
 * @Author: Stevie
 * @Date: 2021-12-28 17:47:07
 * @LastEditTime: 2021-12-29 18:52:37
 * @LastEditors: Stevie
 * @Description:
 */
export class CircularQueue {
  constructor(capacity) {
    this.elements = new Array(capacity)
    // * 队列总容量
    this.capacity = capacity
    // * 队列中已使用容量
    this.used = 0
    // * 头指针index
    this.head = 0
    // * 尾指针index
    this.tail = 0
  }

  // * 获取队首元素
  get front() {
    if (this.isEmpty()) {
      return false
    }
    return this.elements[this.head]
  }

  // * 获取队尾元素
  get rear() {
    if (this.isEmpty()) {
      return false
    }
    let index = (this.tail + this.capacity - 1) % this.capacity
    return this.elements[index]
  }

  // * 入队
  enqueue(element) {
    if (this.isFull()) {
      return false
    }
    this.elements[this.tail] = element
    // - 入队后, 尾指针向后移一位
    this.tail = (this.tail + 1) % this.capacity
    this.used++
    return true
  }

  // * 出队
  dequeue() {
    if (this.isEmpty()) {
      return false
    }
    // - 移除队头元素
    delete this.elements[this.head]
    // - 出队后, 头指针向后移一位
    this.head = (this.head + 1) % this.capacity
    this.used--
    return true
  }

  // * 判断队列是否空
  isEmpty() {
    return this.used === 0
  }

  // * 判断队列是否满
  isFull() {
    return this.used === this.capacity
  }
}
