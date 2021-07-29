/*
 * @Author: Stevie
 * @Date: 2021-07-28 16:42:32
 * @LastEditTime: 2021-07-29 15:01:35
 * @LastEditors: Stevie
 * @Description: 单向链表
 */
class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = new Node('head')
  }
}
