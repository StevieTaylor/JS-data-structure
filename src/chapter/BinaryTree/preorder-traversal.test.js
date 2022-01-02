/*
 * @Author: Stevie
 * @Date: 2021-12-30 15:18:02
 * @LastEditTime: 2022-01-02 17:28:25
 * @LastEditors: Stevie
 * @Description:
 */
import { preorderTraversalRecursion, preorderTraversalIteration } from './preorder-traversal'

describe('递归法前序遍历', () => {
  it('root = [1,null,2,3], expected: [1,2,3] ', () => {
    const data1 = {
      val: 1,
      left: null,
      right: {
        val: 2,
        left: {
          val: 3,
          left: null,
          right: null,
        },
        right: null,
      },
    }
    expect(preorderTraversalRecursion(data1)).toEqual([1, 2, 3])
    expect(preorderTraversalIteration(data1)).toEqual([1, 2, 3])
  })

  it('root = [], expected: [] ', () => {
    const data2 = null
    expect(preorderTraversalRecursion(data2)).toEqual([])
    expect(preorderTraversalIteration(data2)).toEqual([])
  })

  it('root = [1], expected: [1] ', () => {
    const data3 = {
      val: 1,
      left: null,
      right: null,
    }
    expect(preorderTraversalRecursion(data3)).toEqual([1])
    expect(preorderTraversalIteration(data3)).toEqual([1])
  })

  it('root = [1,2], expected: [1,2] ', () => {
    const data4 = {
      val: 1,
      left: {
        val: 2,
        left: null,
        right: null,
      },
      right: null,
    }
    expect(preorderTraversalRecursion(data4)).toEqual([1, 2])
    expect(preorderTraversalIteration(data4)).toEqual([1, 2])
  })

  it('root = [1,null,2], expected: [1,2] ', () => {
    const data5 = {
      val: 1,
      left: null,
      right: {
        val: 2,
        left: null,
        right: null,
      },
    }
    expect(preorderTraversalRecursion(data5)).toEqual([1, 2])
    expect(preorderTraversalIteration(data5)).toEqual([1, 2])
  })

  it("expected: ['F','B','A','D','C','E','G','I','H'] ", () => {
    const data6 = {
      val: 'F',
      left: {
        val: 'B',
        left: {
          val: 'A',
          left: null,
          right: null,
        },
        right: {
          val: 'D',
          left: {
            val: 'C',
            left: null,
            right: null,
          },
          right: {
            val: 'E',
            left: null,
            right: null,
          },
        },
      },
      right: {
        val: 'G',
        left: null,
        right: {
          val: 'I',
          left: {
            val: 'H',
            left: null,
            right: null,
          },
          right: null,
        },
      },
    }
    const expected = ['F', 'B', 'A', 'D', 'C', 'E', 'G', 'I', 'H']
    expect(preorderTraversalRecursion(data6)).toEqual(expected)
    expect(preorderTraversalIteration(data6)).toEqual(expected)
  })
})
