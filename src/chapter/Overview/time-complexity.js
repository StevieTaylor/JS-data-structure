/*
 * @Author: Stevie
 * @Date: 2021-07-20 16:33:38
 * @LastEditTime: 2021-07-21 11:37:02
 * @LastEditors: Stevie
 * @Description:
 */
/**
 * @description: 常数阶, O(1)
 * @param {*} n
 * @return {*}
 */
function constant(n) {
  console.time('常数阶')
  console.log('O(1)常数阶')
  console.timeEnd('常数阶')
}

/**
 * @description: 对数阶, O(logN)
 * @param {*} n
 * @return {*}
 */
function logarithmic(n) {
  console.time('对数阶')
  console.timeEnd('对数阶')
}

/**
 * @description: 线性阶, O(n)
 * @param {*} n
 * @return {*}
 */
function linear(n) {
  console.time('线性阶')
  let sum = 0
  for (let i = 0; i <= n; i++) {
    sum += i
  }
  console.log('sum:', sum)
  console.timeEnd('线性阶')
}

/**
 * @description: 平方阶, O(n^2)
 * @param {*} n
 * @return {*}
 */
function nSquare(n) {
  console.time('平方阶')
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j < n; j++) {}
  }
  console.timeEnd('平方阶')
}

/**
 * @description: 立方阶, O(n^3)
 * @param {*} n
 * @return {*}
 */
function nCubic(n) {
  console.time('立方阶')
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      for (let k = 0; k <= n; k++) {}
    }
  }
  console.timeEnd('立方阶')
}

/**
 * @description: 指数阶, O(2^n)
 * @param {*} n
 * @return {*}
 */
function exponential(n) {
  console.time('指数阶')
  for (let i = n; i >= 0; i = i / 2) {}
  console.timeEnd('指数阶')
}

/**
 * @description: 阶乘阶, O(n!)
 * @param {*} n
 * @return {*}
 */
function factorial(n) {
  console.time('阶乘阶')
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j < i; j++) {}
  }
  console.timeEnd('阶乘阶')
}

constant(10000)
linear(10000)
nSquare(10000)
