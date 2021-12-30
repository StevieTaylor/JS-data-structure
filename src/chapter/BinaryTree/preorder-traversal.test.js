/*
 * @Author: Stevie
 * @Date: 2021-12-30 15:18:02
 * @LastEditTime: 2021-12-30 17:24:18
 * @LastEditors: Stevie
 * @Description:
 */
import { preorderTraversal } from './preorder-traversal'

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
    expect(preorderTraversal(data1)).toEqual([1, 2, 3])
  })

  it('root = [], expected: [] ', () => {
    const data2 = null
    expect(preorderTraversal(data2)).toEqual([])
  })

  it('root = [1], expected: [1] ', () => {
    const data3 = {
      val: 1,
      left: null,
      right: null,
    }
    expect(preorderTraversal(data3)).toEqual([1])
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
    expect(preorderTraversal(data4)).toEqual([1, 2])
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
    expect(preorderTraversal(data5)).toEqual([1, 2])
  })
})
