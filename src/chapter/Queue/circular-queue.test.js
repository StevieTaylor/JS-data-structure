/*
 * @Author: Stevie
 * @Date: 2021-12-29 17:03:39
 * @LastEditTime: 2021-12-29 17:59:59
 * @LastEditors: Stevie
 * @Description:
 */
import { CircularQueue } from './circular-queue'

describe('circular queue', () => {
  const circularQueue = new CircularQueue(3)

  it('isEmpty ', () => {
    expect(circularQueue.isEmpty()).toBeTruthy()
  })

  it('enqueue ', () => {
    circularQueue.enqueue(1)
    circularQueue.enqueue(2)
    circularQueue.enqueue(3)
    expect(circularQueue.enqueue(4)).toBeFalsy()
  })

  it('front ', () => {
    expect(circularQueue.front).toBe(1)
  })

  it('rear', () => {
    expect(circularQueue.rear).toBe(3)
  })

  it('isFull ', () => {
    expect(circularQueue.isFull()).toBeTruthy()
  })

  it('dequeue ', () => {
    expect(circularQueue.dequeue()).toBeTruthy()
  })

  it('enqueue ', () => {
    expect(circularQueue.enqueue(4)).toBeTruthy()
  })

  it('front ', () => {
    expect(circularQueue.front).toBe(2)
  })

  it('rear', () => {
    expect(circularQueue.rear).toBe(4)
  })
})
