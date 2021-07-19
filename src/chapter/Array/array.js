/*
 * @Author: Stevie
 * @Date: 2021-07-19 11:23:38
 * @LastEditTime: 2021-07-19 17:58:05
 * @LastEditors: Stevie
 * @Description:
 */
/**
 * - 数组: 有限个相同类型的变量组成的有序集合
 * -      在内存中是 顺序存储, 元素之间紧密排列
 */
class ArrayList {
  // * capacity:预设容量
  constructor(capacity) {
    this.array = new Array(capacity)
    // * 实际大小
    this.size = 0
  }

  get size() {
    return this.size
  }
}

const arr = new ArrayList(10)
console.log(`arr`, arr.array)
