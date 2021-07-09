/*
 * @Author: Stevie
 * @Date: 2021-07-08 17:56:34
 * @LastEditTime: 2021-07-09 11:23:06
 * @LastEditors: Stevie
 * @Description:
 */
import Stack from './implement'

const stack = new Stack()
console.log('isEmpty:', stack.isEmpty)
stack.pop();
stack.print();

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
