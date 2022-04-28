function sayHi(name) {
    console.log(arguments)
    console.log(arguments.__proto__)
    console.log(arguments.__proto__.__proto__)
    console.log(arguments.__proto__ === Object.prototype)
    console.log(arguments[0])
    console.log(name)
    // arguments的值和形参的值保持同步 ，同步修改。但是他们并不是在一个相同的内存空间。这是为啥这么设计呢？嘛的又是同样，又不是同一个内存空间。。。
    // 严格模式下，argument[x]修改了，不会同步影响形参，重写arguments会直接语法错误
    console.log(name === arguments[0])

    // Arguments =>
}
sayHi('mobs')

// ES的函数不介意传递参数的数量、类型 ，简称TS中的any
// 参数在函数内部通过arguments对象去访问
// arguments对象是类数组 => 支持下标访问
// 因为又是对象，可以通过读取length属性知道传递参数的个数
// 特点：函数的形参单纯只是提供便利，方便阅读和书写，但不是必须的，可以通过arguments对象访问所有的参数
// 👆这也太放松了8，形参写好看点方便大家啊。。。
// arguments是由函数调用时传入的个数决定的，并不是定义函数写的形参的个数决定的。
// ******所有的参数传递都是值传递，不可能是引用传递参数

// 所以JS函数是没有重载的
// 重载是啥，同一个函数，定义不同的入参数量或者类型 就叫函数的重载 类似java
// ES中定义两个重名函数，后定义的函数才生效。。。后者会覆盖前者