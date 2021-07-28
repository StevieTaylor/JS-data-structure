/*
 * @Author: Stevie
 * @Date: 2021-07-28 14:13:31
 * @LastEditTime: 2021-07-28 16:23:38
 * @LastEditors: Stevie
 * @Description:
 */
import ArrayList from './array'

const CAPACITY = 10

function testArray(array, presetNumber) {
  for (let i = 0; i < presetNumber; i++) {
    array.set(i, `e${i}`)
  }
  console.log('预设容量:', array.Capacity)
  console.log('实际大小:', array.Size)
  console.log('原始数组:>> ', array.list)

  array.insert(0, 'head')
  console.log('头部插入后 :>> ', array.list)

  array.delete(0)
  console.log('头部删除后 :>> ', array.list)

  array.insert(5, 'middle')
  console.log('中间插入后 :>> ', array.list)

  array.delete(5)
  console.log('中间删除后 :>> ', array.list)

  array.insert(array.size, 'rear')
  console.log('尾部插入后 :>> ', array.list)

  array.delete(array.size - 1)
  console.log('尾部删除后 :>> ', array.list)
}
const fullArray = new ArrayList(CAPACITY)
testArray(fullArray, CAPACITY)

const halfArray = new ArrayList(CAPACITY)
testArray(halfArray, CAPACITY / 2)
