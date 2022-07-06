// 按照给定的回调处理数组元素，每一次执行回调函数都会将上一次的元素结果作为参数传入
// 如果不给定初始值，回调函数默认将第0个作为初始值，回调从第二个元素开始。
// 需要回调从第一个元素开始，需要自己指定初始值
// reduce(callbackFn, initialValue)
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
const testArr = [
  {
    name: 'mobs',
    sex: 'male'
  },
  {
    name: '秋山',
    sex: 'male'
  },
  {
    name: 'akiyama',
    sex: 'female'
  }
]
// 上述数组中找出性别为男的人的名字的集合
// 1. filter + map 两次
console.log(testArr.filter(item => item.sex === 'male').map(item => item.name))
// 2. reduce 一次循环
// pV 上一次回调的返回值，第一次执行 若有初始值就是初始值，没有就是数组[0]
// cV 当前处理的元素 有初始值arr[0] 没有就是arr[1]
// cI 0 1
// oV 被处理的数组
console.log(testArr.reduce((pV, cV, cI, oV) => {
  const result = pV
  if(cV.sex === 'male') result.push(cV.name)
  return result
}, []))