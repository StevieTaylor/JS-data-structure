/*
 * @Author: Stevie
 * @Date: 2021-07-17 18:05:16
 * @LastEditTime: 2021-07-17 18:08:56
 * @LastEditors: Stevie
 * @Description:
 */
export function firstUpperCase(str) {
  return str.replace(/( |^)[a-z]/g, (L) => L.toUpperCase())
}
