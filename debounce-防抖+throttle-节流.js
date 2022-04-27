// 1. 防抖是什么？
// 答 => 1. 优化高频执行代码的手段 2. n秒后执行事件，若在n秒内该事件再次触发，则重新计时n秒
// 细节
// 浏览器的 resize、scroll、keypress、mousemove 等事件在触发时，
// 会不断地调用绑定在事件上的回调函数，极大地浪费资源，降低前端性能。
// 采用防抖减少调用频次
// 电梯开关门，进来一个人后15秒后执行关门，但再次期间又进来人，15秒重新计时

document.getElementById('debounceInput').addEventListener(
    'input', 
    throttled2(
        function (e) {
            console.log(e.target.value);
        },
        500,
    )
)

function debounce(fn, delay, immediate) {
    let timer = null
    return function () {
        let context = this
        let args = arguments
        if(timer) {
            clearTimeout(timer)
        }
        if(immediate) {
            // 首次事件触发，后续等待延时后才有效
            let isFirst = !timer
            timer = setTimeout(function () {
                timer = null;
            }, delay)
            if(isFirst) {
                fn.apply(context, args)
            }
        }else {
            timer = setTimeout(function () {
                fn.apply(context, args)
            }, delay)
        }
    }
}

function throttled1(fn, delay = 500) {
    let oldtime = Date.now()
    return function (...args) {
        let newtime = Date.now()
        if (newtime - oldtime >= delay) {
            fn.apply(null, args)
            oldtime = Date.now()
        }
    }
}

function throttled2(fn, delay = 500) {
    let timer = null
    return function (...args) {
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(this, args)
                timer = null
            }, delay);
        }
    }
}