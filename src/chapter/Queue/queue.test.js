/*
 * @Author: Stevie
 * @Date: 2021-12-28 15:45:48
 * @LastEditTime: 2021-12-28 16:32:52
 * @LastEditors: Stevie
 * @Description:
 */
import Queue from './queue'

describe('Queue', () => {
  it('should be defined', () => {
    expect(Queue).toBeDefined()
  })

  let queue

  beforeEach(() => {
    queue = new Queue()
  })

  afterEach(() => {
    queue = null
  })

  it('should be empty', () => {
    expect(queue.isEmpty).toBeTruthy()
  })

  it('should support enqueue', () => {
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    expect(queue.elements).toEqual([1, 2, 3])
  })

  it('should support dequeue', () => {
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    queue.dequeue()
    expect(queue.elements).toEqual([2, 3])
  })

  it('should support clear', () => {
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    queue.clear()
    expect(queue.elements).toEqual([])
  })

  it('should support front', () => {
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    expect(queue.front).toBe(1)
  })

  it('should support size', () => {
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    expect(queue.size).toBe(3)
  })
})
