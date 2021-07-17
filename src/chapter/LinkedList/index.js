/*
 * @Author: Stevie
 * @Date: 2021-07-12 10:16:51
 * @LastEditTime: 2021-07-12 11:26:29
 * @LastEditors: Stevie
 * @Description:
 */
class LinkedList {
  constructor(data) {
    this.data = data
  }

  firstItem = () => {
    return this.data.find((item) => item.head)
  }

  findById = (id) => {
    return this.data.find((item) => item.id === id)
  };

  [Symbol.iterator]() {
    return 1
  }
}
