/*
 * @Author: Stevie
 * @Date: 2021-07-20 22:40:50
 * @LastEditTime: 2021-07-24 19:17:31
 * @LastEditors: Stevie
 * @Description:
 */
/**
 * @description: 常量空间, O(1)
 * @param {*} n
 * @return {*}
 */
function constantSpace(n) {
  console.time('常量空间')
  let i = 1
  let m = n + i
  console.timeEnd('常量空间')
  return m
}

/**
 * @description: 线性空间, O(n)
 * @param {*} n
 * @return {*}
 */
function linearSpace(n) {
  console.time('线性空间')
  const array = new Array(n)
  console.timeEnd('线性空间')
}

/**
 * @description: 二维空间, O(n^2)
 * @param {*} n
 * @return {*}
 */
function twoDimensionalSpace(n) {
  console.time('二维空间')
  const DDArray = new Array(n)
  for (i = 0; i < DDArray.length; i++) {
    DDArray[i] = new Array(n)
  }
  console.timeEnd('二维空间')
  // console.log('二维数组:', DDArray)
}

/**
 * @description: 递归空间, O(n)
 * @param {*} n, 递归深度
 * @return {*}
 */
function recursiveSpace(n) {
  console.time('递归空间')
  recursive(n)
  console.timeEnd('递归空间')
}

/**
 * @description: 递归函数
 * @param {*} n
 * @return {*}
 */
function recursive(n) {
  if (n <= 1) {
    return n
  }
  return recursive(n - 1)
}

const SPACESIZE = 10000
constantSpace(SPACESIZE)
linearSpace(SPACESIZE)
recursiveSpace(SPACESIZE)
twoDimensionalSpace(SPACESIZE)
