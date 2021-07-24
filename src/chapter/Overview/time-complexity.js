/*
 * @Author: Stevie
 * @Date: 2021-07-20 16:33:38
 * @LastEditTime: 2021-07-24 18:26:28
 * @LastEditors: Stevie
 * @Description:
 */
/**
 * - 通过对比程序运行时间可以得知, 时间复杂度从小到大依次是:
 * -   常数阶 O(1)
 * -   对数阶 O(logN)
 * -   线性阶 O(n)
 * -   线性对数阶 O(nlogN)
 * -   平方阶 O(n^2)
 * !   --- 分水岭, 后面的时间复杂度太高, 程序运行缓慢 ---
 * -   立方阶 O(n^3)
 * -   指数阶 O(2^n)
 * -   阶乘阶 O(n!)
 * -   n次方阶 O(n^n)
 */
/**
 * @description: 常数阶, O(1)
 * @param {*} n
 * @return {*}
 */
function constant(n) {
  console.time('常数阶')
  console.timeEnd('常数阶')
}

/**
 * @description: 对数阶, O(logN)
 * @param {*} n
 * @return {*}
 */
function logarithmic(n) {
  console.time('对数阶')
  for (let i = 1; i <= n; i = i * 2) {}
  console.timeEnd('对数阶')
}

/**
 * @description: 线性阶, O(n)
 * @param {*} n
 * @return {*}
 */
function linear(n) {
  console.time('线性阶')
  for (let i = 0; i <= n; i++) {}
  console.timeEnd('线性阶')
}

/**
 * @description: 线性对数阶, O(nlogN)
 * @param {*} n
 * @return {*}
 */
function linearLogarithmic(n) {
  console.time('线性对数阶')
  for (let i = 1; i <= n; i++) {
    let j = 1
    while (j < n) {
      j = j * 2
    }
  }
  console.timeEnd('线性对数阶')
}

/**
 * @description: 平方阶, O(n^2)
 * @param {*} n
 * @return {*}
 */
function nSquare(n) {
  console.time('平方阶')
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {}
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
  Fibonacci(n)
  console.timeEnd('指数阶')
}

/**
 * @description: 斐波那契数列递归
 * @param {*} n
 * @return {*}
 */
function Fibonacci(n) {
  if (n <= 1) {
    return n
  }
  return Fibonacci(n - 1) + Fibonacci(n - 2)
}

const INPUTSIZE = 10000
constant(INPUTSIZE)
logarithmic(INPUTSIZE)
linear(INPUTSIZE)
linearLogarithmic(INPUTSIZE)
nSquare(INPUTSIZE)

const SMALLINPUTSIZE = 30
nCubic(SMALLINPUTSIZE)
exponential(SMALLINPUTSIZE)
