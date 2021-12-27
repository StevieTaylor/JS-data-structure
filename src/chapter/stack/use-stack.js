/*
 * @Author: Stevie
 * @Date: 2021-07-08 17:56:34
 * @LastEditTime: 2021-12-27 17:40:40
 * @LastEditors: Stevie
 * @Description:
 */
import Stack from './stack'

const stack = new Stack()
console.log('isEmpty:', stack.isEmpty)
stack.pop()
stack.print()

stack.push('s')
stack.push('t')
stack.push('a')
stack.push('c')
stack.push('k')
stack.print()

console.log('last:', stack.peek)
console.log('size:', stack.size)

stack.pop()
stack.print()

stack.clear()
stack.print()
