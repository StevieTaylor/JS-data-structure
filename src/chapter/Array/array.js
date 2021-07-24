/*
 * @Author: Stevie
 * @Date: 2021-07-19 11:23:38
 * @LastEditTime: 2021-07-25 00:17:51
 * @LastEditors: Stevie
 * @Description:
 */
/**
 * - 数组: 有限个相同类型的变量组成的有序集合
 * -      在内存中是 顺序存储, 元素之间紧密排列
 */
class ArrayList {
  constructor(capacity) {
    // * capacity:预设容量
    this.list = new Array(capacity)
    // * 实际大小
    this.size = 0
  }

  get(index) {
    return this.list[index]
  }

  set(index, value) {
    this.list[index] = value
  }

  get Size() {
    return this.size
  }

  get Capacity() {
    return this.list.length
  }

  resize() {
    this.list.length += 1
  }

  insert(index, element) {}
}

const array = new ArrayList(10)
console.log(`array`, array.list)
array.resize()
console.log(`array`, array.list)
