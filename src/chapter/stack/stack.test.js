/*
 * @Author: Stevie
 * @Date: 2021-12-27 17:17:17
 * @LastEditTime: 2021-12-27 17:37:02
 * @LastEditors: Stevie
 * @Description:
 */
import Stack from './stack'

describe('test Stack', () => {
  const stack = new Stack()

  test('initial length ', () => {
    expect(stack.size).toEqual(0)
  })

  test('push ', () => {
    expect(stack.push(1)).toEqual([1])
  })

  test('length after push ', () => {
    expect(stack.size).toBe(1)
  })

  test('pop ', () => {
    expect(stack.pop()).toEqual(1)
  })

  test('peek ', () => {
    stack.push(1)
    stack.push(2)
    stack.push(3)
    stack.push(4)
    stack.push(5)
    expect(stack.peek).toBe(5)
  })

  test('clear ', () => {
    stack.push(1)
    stack.push(2)
    stack.push(3)
    stack.push(4)
    stack.push(5)
    expect(stack.clear()).toStrictEqual([])
    expect(stack.isEmpty).toBeTruthy()
  })
})
