/*
 * @Author: Stevie
 * @Date: 2021-07-19 11:23:38
 * @LastEditTime: 2021-07-28 16:25:25
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
    this.size++
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

  /**
   * @description:
   *  * 插入元素，有几种情形：
   *  *  1. 当 size = capacity时，数组满了，属于超范围插入
   *  *  2. 当 size < capacity时，再比较size和index
   *  *     2.1. 当 index < 0 时，超范围
   *  *     2.2. 当 index = 0 时，属于头部插入
   *  *     2.3. 当 0 < index < size时，属于中间插入
   *  *     2.4. 当 index = size时，属于尾部插入
   *  *     2.5. 当 index > size时，超范围
   * @param {*} index
   * @param {*} element
   * @return {*}
   */
  insert(index, element) {
    if (index < 0 || index > this.size) {
      throw new Error('超出数组元素实际范围')
    }
    // 当实际元素大于等于容量时, 需要扩容
    if (this.size >= this.list.length) {
      this.list.length += 1
    }
    for (let i = this.size - 1; i >= index; i--) {
      this.list[i + 1] = this.list[i]
    }
    this.list[index] = element
    this.size++
  }

  /**
   * @description:
   * @param {*} index
   * @return {*}
   */
  delete(index) {
    if (index < 0 || index >= this.size) {
      throw new Error('超出数组元素实际范围')
    }
    const deleteElement = this.list[index]
    for (let i = index; i < this.size; i++) {
      this.list[i] = this.list[i + 1]
    }
    this.size--
    return deleteElement
  }

  unshift(element) {
    this.insert(0, element)
  }

  push(element) {
    this.insert(this.size, element)
  }
}

export default ArrayList
