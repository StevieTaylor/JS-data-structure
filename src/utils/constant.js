/*
 * @Author: Stevie
 * @Date: 2021-06-15 15:11:56
 * @LastEditTime: 2021-07-29 11:01:27
 * @LastEditors: Stevie
 * @Description: 章节和模块配置
 */
export const title = 'JS Data Structure'

export const chapterMap = {
  overview: {
    chapterId: 'Overview',
    name: '一、概述',
    modules: {
      overview: '数据结构与算法',
      timeComplexity: '时间复杂度',
      spaceComplexity: '空间复杂度',
    },
    display: true,
  },
  array: {
    chapterId: 'Array',
    name: '二、数组',
    modules: {
      array: '数组',
      useArray: '数组的使用',
    },
    display: true,
  },
  linkedList: {
    chapterId: 'LinkedList',
    name: '三、链表',
    modules: {
      singlyLinkedList: '单向链表',
      doublyLinkedList: '双向链表',
    },
    display: true,
  },
  stack: {
    chapterId: 'Stack',
    name: '四、栈',
    modules: {
      implement: '栈的实现',
      useStack: '栈的使用',
    },
    display: true,
  },
}
